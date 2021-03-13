import React from 'react'
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const Neutral = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
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
      <line x1="6.75" y1="19.75" x2="21.75" y2="19.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  )
}

const ForwardRef = React.forwardRef(Neutral)
export default ForwardRef
