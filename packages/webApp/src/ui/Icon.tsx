import React from 'react'
import icons from './icons'

export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
  icon: keyof typeof icons | null
  iconRef?: React.Ref<SVGSVGElement>
}

const Icon: React.FC<Props> = ({ icon, iconRef, ...props }: Props) => {
  if (!icon) return null
  const Icon = icons[icon]
  return <Icon {...props} ref={iconRef} />
}

export default Icon
