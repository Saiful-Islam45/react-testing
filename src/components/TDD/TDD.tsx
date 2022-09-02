import React from 'react'
interface TDDProps {
    name?: string
}
export const TDD = (props: TDDProps) => {
    const { name } = props;
  return (
    <div>TDD {name}</div>
  )
}
