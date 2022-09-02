import React from 'react'
import { TDDProps } from './TDD.types';

export const TDD = (props: TDDProps) => {
    const { name } = props;
  return (
    <div>TDD {name}</div>
  )
}
