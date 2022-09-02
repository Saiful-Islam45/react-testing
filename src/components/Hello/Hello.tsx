import React from 'react'
interface HelloProps {
    name?: string
}
export const Hello = (props: HelloProps) => {
    const { name } = props;
  return (
    <div>Hello {name}</div>
  )
}
