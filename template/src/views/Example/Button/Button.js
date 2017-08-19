import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = (props) => {
  return (
    <button styleName='myButton' onClick={props.onClick}>{props.text}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button
