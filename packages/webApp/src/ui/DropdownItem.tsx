// import React, { useContext, ReactNode } from 'react'
// import clsx from 'clsx'
// import { useTheme } from './theme/ThemeContext'

// type IconType =
//   | string
//   | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
//   | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>

// interface Props {
//   children: ReactNode
//   icon?: IconType
//   className?: string
// }

// const DropdownItem: React.FC<Props> = (props: Props) => {
//   // Note: className is passed to the inner Button
//   const { children, icon, className, ...other } = props

//   const {
//     theme: { dropdownItem },
//   } = useTheme()

//   const { base, withIcon } = dropdownItem
//   const cls = clsx(base, icon ? withIcon : '', className)
//   return (
//     <a href="#" className={cls} role="menuitem" {...other}>
//       {/* TODO: use dynamic Icon */}
//       {icon && (
//         <svg
//           className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
//             clipRule="evenodd"
//           />
//         </svg>
//       )}
//       {children}
//     </a>
//   )
// }

// export default DropdownItem

import React from 'react'
import { ButtonProps } from './Button'
import Button from './Button'
import { useTheme } from './theme/ThemeContext'

type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(props: ButtonProps, ref) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props

  const {
    theme: { dropdownItem },
  } = useTheme()

  const baseStyle = dropdownItem.base

  return (
    <Button layout="__dropdownItem" tag="a" ref={ref} role="menuitem" {...other}>
      {children}
    </Button>
  )
})

export default DropdownItem
