import { connect } from 'react-redux'
import React from 'react'
import { addRow, SHOW_ANOTHER_ROW } from '../store'
import { MyButton } from './MyButton'

function UpButton(props) {
  console.log(props)
  return (
    <MyButton color={'primary'} variant="contained" onClick={_ => props.dispatch({ type: SHOW_ANOTHER_ROW, payload: { by: 1 } })}>Hej</MyButton>
  )
}

export default connect(null,/* map function and it will dispatch automatically or just use dispatch regularly */)(UpButton)