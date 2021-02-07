//TODO add secure secrets and keys, 

provider "aws" {
  access_key = "KEY_HERE"
  secret_key = "SECRET_HERE"
  region     = "us-east-1"
}

variable "root_domain_name" {
  default = "shaun-hutch.com"
}

variable "application_subdomain" {
  default = "wellness-frontend.shaun-hutch.com"
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "${var.application_subdomain}"
  acl    = "public-read"

  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[{
    "Sid":"AddPerm",
    "Effect":"Allow",
    "Principal": "*",
    "Action":["s3:GetObject"],
    "Resource":["arn:aws:s3:::${var.application_subdomain}/*"]
  }]
}
POLICY

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

// Retrieve the certificate
data "aws_acm_certificate" "ssl_cert" {
  //domain   = "*.${var.root_domain_name}"
  domain   = "*.shaun-hutch.com"
  statuses = ["ISSUED"]
}

# data "aws_acm_certificate" "amazon_issued" {
#   domain      = "tf.example.com"
#   types       = ["AMAZON_ISSUED"]
#   most_recent = true
# }

/**
	Define CloudFront Distribution
    - It will use the SSL certificate
    - It will redirect all the http traffic to https.
*/
resource "aws_cloudfront_distribution" "frontend_cloudfront_distribution" {
  origin {
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }

    domain_name = "${aws_s3_bucket.s3_bucket.website_endpoint}"
    origin_id   = "${var.application_subdomain}"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${var.application_subdomain}"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  aliases = ["${var.application_subdomain}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.ssl_cert.arn}"
    ssl_support_method  = "sni-only"
  }
}

/**
   ==============================================
                     Option 1
      Route53 is already managing your DNS
   ==============================================
*/
data "aws_route53_zone" "zone" {
  name         = "${var.root_domain_name}"
  private_zone = false

  # most_recent  = true
}

resource "aws_route53_record" "frontend_record" {
  zone_id = "Z05482893D065IUV2VI13"
  name    = "${var.application_subdomain}"
  type    = "A"

  alias = {
    name                   = "${aws_cloudfront_distribution.frontend_cloudfront_distribution.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.frontend_cloudfront_distribution.hosted_zone_id}"
    evaluate_target_health = false
  }
}

/**
   ==============================================
               Option 1 - END
   ==============================================
*/

