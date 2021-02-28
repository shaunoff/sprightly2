import React, { ReactElement } from 'react'
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'
import { useRef, useEffect, useContext } from 'react'

interface TransitionContextInterface {
  parent: {
    show?: boolean
    isInitialRender?: boolean
    appear?: boolean
  }
}

const TransitionContext = React.createContext<TransitionContextInterface>({
  parent: {},
})

const useIsInitialRender = () => {
  const isInitialRender = useRef(true)
  useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

const extractClasses = (classes: string): Array<string> => {
  return classes.split(' ').filter((s) => s.length)
}

interface CSSTransitionProps {
  show?: boolean
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
  appear?: boolean
  children?: ReactElement
}

const CSSTransition: React.FC<CSSTransitionProps> = ({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}: CSSTransitionProps) => {
  const enterClasses = extractClasses(enter)
  const enterFromClasses = extractClasses(enterFrom)
  const enterToClasses = extractClasses(enterTo)
  const leaveClasses = extractClasses(leave)
  const leaveFromClasses = extractClasses(leaveFrom)
  const leaveToClasses = extractClasses(leaveTo)

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes)
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes)
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false)
      }}
      onEnter={(node: HTMLElement) => {
        addClasses(node, [...enterClasses, ...enterFromClasses])
      }}
      onEntering={(node: HTMLElement) => {
        removeClasses(node, enterFromClasses)
        addClasses(node, enterToClasses)
      }}
      onEntered={(node: HTMLElement) => {
        removeClasses(node, [...enterToClasses, ...enterClasses])
      }}
      onExit={(node) => {
        addClasses(node, [...leaveClasses, ...leaveFromClasses])
      }}
      onExiting={(node) => {
        removeClasses(node, leaveFromClasses)
        addClasses(node, leaveToClasses)
      }}
      onExited={(node) => {
        removeClasses(node, [...leaveToClasses, ...leaveClasses])
      }}
    >
      {children}
    </ReactCSSTransition>
  )
}

const Transition: React.FC<CSSTransitionProps> = ({ show, appear, ...rest }: CSSTransitionProps) => {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return <CSSTransition appear={parent.appear || !parent.isInitialRender} show={parent.show} {...rest} />
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}

export default Transition