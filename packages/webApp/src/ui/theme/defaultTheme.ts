const defaultTheme = {
  // Alert
  alert: {
    container: {
      base: 'rounded-md p-4',
      success: 'bg-green-50',
      error: 'bg-red-50',
      warning: 'bg-yellow-50',
      info: 'bg-blue-50',
    },
    icon: {
      success: 'h-5 w-5 text-green-400',
      error: 'h-5 w-5 text-red-400',
      warning: 'h-5 w-5 text-yellow-400',
      info: 'h-5 w-5 text-blue-400',
    },
    title: {
      base: 'text-sm font-medium',
      success: 'text-green-800',
      error: 'text-red-800',
      warning: 'text-yellow-800',
      info: 'text-blue-800',
    },
    description: {
      base: 'mt-2 text-sm',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-yellow-600',
      info: 'text-blue-600',
    },
  },
  // Avatar
  avatar: {
    base: 'inline-flex items-center justify-center rounded-full bg-gray-500',
    container: {
      large: 'w-12 h-12',
      regular: 'w-10 h-10',
      small: 'w-8 h-8',
    },
    text: {
      large: 'text-lg font-medium leading-none text-white',
      regular: 'font-medium leading-none text-white',
      small: 'text-sm font-medium leading-none text-white',
    },
  },
  // Button
  button: {
    base: 'inline-flex items-center px-2.5 py-1.5 border',
    size: {
      xsmall: 'px-2.5 py-1.5 text-xs font-medium rounded',
      small: 'px-3 py-2 text-sm leading-4 font-medium rounded-md',
      regular: 'px-4 py-2 text-sm font-medium rounded-md',
      large: 'px-4 py-2 text-base font-medium rounded-md',
      xlarge: 'px-6 py-3 text-base font-medium rounded-md',
      pagination: 'px-3 py-1 rounded-md text-xs', //For pagination only
      icon: {
        xlarge: 'p-6 rounded-md',
        large: 'p-4 rounded-md',
        regular: 'p-4 rounded-md',
        small: 'p-3 rounded-md',
        xsmall: 'p-2.5 rounded',
        pagination: 'p-3 rounded',
      },
    },
    block: 'w-full flex justify-center',
    primary: {
      base: 'text-white bg-indigo-600 border-transparent shadow-sm',
      active:
        'active:bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    secondary: {
      base: 'text-indigo-700 bg-indigo-100 border-transparent shadow-sm ',
      active:
        'active:bg-indigo-200 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    white: {
      base: 'text-gray-700 bg-white border border-gray-300 ',
      active: 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    icon: {
      xlarge: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-4 w-4',
      xsmall: 'h-4 w-4',
      pagination: 'h-4 w-4',
      left: '-ml-1 mr-2',
      right: 'ml-2 -mr-1',
    },
    dropdownItem: {
      base: 'flex text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer',
    },
  },
  // Dropdown
  dropdown: {
    base: 'absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5',
    align: {
      left: 'origin-top-left left-0',
      right: 'origin-top-right right-0',
    },
  },
  // Dropdown Item
  dropdownItem: {
    base: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900',
    withIcon: 'group flex items-center',
  },
  // Input
  input: {
    label: 'block text-sm font-medium text-gray-700',
    disabled: 'opacity-40',
    container: {
      base: 'mt-1',
      error: 'relative rounded-md shadow-sm',
      valid: 'relative rounded-md shadow-sm',
    },
    input: {
      base:
        'placeholder-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md',
      error:
        'block w-full pr-10 border-red-500 text-red-500 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md',
      valid:
        'block w-full pr-10 border-green-500 text-green-500 placeholder-green-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md',
    },
    helperText: {
      base: 'mt-1 text-xs text-gray-500',
      error: 'text-red-500',
      valid: 'text-green-500',
    },
    icon: {
      base: 'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none',
      valid: 'h-5 w-5 text-green-500',
      error: 'h-5 w-5 text-red-500',
    },
  },
  // NavMenu
  navMenu: {
    container: 'mt-5 flex-grow flex flex-col',
    nav: 'flex-1 px-2 bg-white space-y-1',
  },
  navMenuItem: {
    base: 'group w-full flex items-center pl-2 pr-2 py-2 text-sm font-medium rounded-md',
    active: 'bg-gray-100 text-gray-900',
    default: 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
    icon: {
      base: 'mr-3 h-6 w-6',
      default: 'text-gray-400 group-hover:text-gray-500',
      active: 'text-gray-500',
    },
  },
}

export default defaultTheme
