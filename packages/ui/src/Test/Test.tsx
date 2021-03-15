import * as React from 'react'

type Testy = string | number

/**
 * Column properties.
 */
export interface TestProps {
  /**
   * goioioioioi
   * @example ./extra.examples.md
   */
  testProp: Testy
  tet2: React.ReactElement
}

/**
 * gfhdjgfjhgfjhdgfjhdgfjhdgfhj
 * @example ./extra.examples.md
 */
const Test: React.FC<TestProps> = (props: TestProps) => {
  const hello = () => {
    console.log('dfghjgfjhg')
  }
  return <div className="bg-blue-600">76: {props.testProp}</div>
}

/**
 * gfhdjgfjhgfjhdgfjhdgfjhdgfhj
 * @random ./extra.examples.md
 */
export default Test
