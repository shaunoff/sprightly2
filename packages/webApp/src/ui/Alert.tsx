import React from 'react'
import clsx from 'clsx'
import { useTheme } from './theme/ThemeContext'
import Icon from './Icon'
import { IconTypes } from './icons'

enum AlertEnum {
  success,
  error,
  warning,
  info,
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The type of the alert
   */
  type: keyof typeof AlertEnum
  /**
   * Title of the alert
   */
  title: string
  /**
   * Description of the alert
   */
  description?: string
  /**
   * If defined, shows the close icon that calls this function
   */
  onClose?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { type, onClose, title, description } = props
  const {
    theme: { alert },
  } = useTheme()

  const containerBaseStyle = alert.container.base
  const containerTypeStyle = alert.container[type]

  const titleBaseStyle = alert.title.base
  const titleTypeStyle = alert.title[type]

  const descriptionBaseStyle = alert.description.base
  const descriptionTypeStyle = alert.description[type]

  const iconTypes: Record<keyof typeof AlertEnum, IconTypes> = {
    success: 'checkCircle',
    warning: 'exclamationCircle',
    error: 'xCircle',
    info: 'informationCircle',
  }

  const containerCls = clsx(containerBaseStyle, containerTypeStyle)
  const titleCls = clsx(titleBaseStyle, titleTypeStyle)
  const descriptionCls = clsx(descriptionBaseStyle, descriptionTypeStyle)
  return (
    <div className={containerCls}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon icon={iconTypes[type]} className={alert.icon[type]} />
        </div>
        <div className="ml-3">
          <h3 className={titleCls}>{title}</h3>
          {description && (
            <div className={descriptionCls}>
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default Alert
