import React from 'react'
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const VSad = ({ size = 24, ...props }: Props, svgRef: React.Ref<SVGSVGElement>) => {
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
        d="M14.5,14C10.36,14,7,16.69,7,20a2.46,2.46,0,0,0,2.94,2.41h0A21.49,21.49,0,0,1,14.1,22h.8a21.49,21.49,0,0,1,4.16.41h0A2.46,2.46,0,0,0,22,20C22,16.69,18.64,14,14.5,14Z"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M11,9.16c-.18,1.65-1,2.91-1.81,2.82S7.83,10.49,8,8.84"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        d="M18,9.16c.17,1.65,1,2.91,1.81,2.82S21.17,10.49,21,8.84"
        transform="translate(-0.25 -0.25)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(VSad)
export default ForwardRef
