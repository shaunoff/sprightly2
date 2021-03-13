import React from 'react'

export interface TestProps {
  testProp: string
}

const Test: React.FC<TestProps> = (props: TestProps) => {
  return <div className="bg-green-600">12345Testyyyyyy: {props.testProp}</div>
}

export default Test
