import React from 'react'
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const Happy = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
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
      <ellipse cx="9.25" cy="10.75" rx="1.5" ry="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <ellipse cx="19.25" cy="10.75" rx="1.5" ry="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <path
        d="M22.87,18.37a9.51,9.51,0,0,1-16.74,0"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(Happy)
export default ForwardRef
