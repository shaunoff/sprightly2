import React from 'react'
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const Sad = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      viewBox="-0.5 -0.5 29.5 29.5"
      stroke="currentColor"
      width={size}
      height={size}
      ref={svgRef}
      {...props}
    >
      <circle cx="14.25" cy="14.25" r="13.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <path
        d="M8.67,20a9.5,9.5,0,0,1,11.66,0"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M11,11c0,1.66-.67,3-1.5,3S8,12.66,8,11a5.12,5.12,0,0,1,0-.69L10.46,8.7A4.57,4.57,0,0,1,11,11Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M21,11c0,1.66-.67,3-1.5,3S18,12.66,18,11a4.46,4.46,0,0,1,.55-2.3L21,10.3A5.37,5.37,0,0,1,21,11Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(Sad)
export default ForwardRef
