import React from 'react'
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const VHappy = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
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
      <path
        d="M11,9.16c-.17,1.65-1,2.91-1.81,2.82S7.83,10.49,8,8.84,9,5.93,9.82,6,11.17,7.51,11,9.16Z"
        transform="translate(31.71 5.99)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <circle cx="14.25" cy="14.25" r="13.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <path
        d="M11,9.16c-.17,1.65-1,2.91-1.81,2.82S7.83,10.49,8,8.84,9,5.93,9.82,6,11.17,7.51,11,9.16Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M18,9.16c.17,1.65,1,2.91,1.81,2.82S21.17,10.49,21,8.84,20,5.93,19.18,6,17.83,7.51,18,9.16Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M24,16.7c0,4-4.25,7.3-9.5,7.3S5,20.73,5,16.7Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(VHappy)
export default ForwardRef
