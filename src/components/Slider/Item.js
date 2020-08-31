import React from 'react'
import useStyle from './Item.styles'

export default function Item({ item }) {
  const classes = useStyle()
  return <div className={classes.root}></div>
}
