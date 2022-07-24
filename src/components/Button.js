import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text,color,onClick}) => {
    return (
        <div className='btnBlock'>
      <button className='btn' style={ { backgroundColor: color } } onClick={onClick} >{ text }
            </button>
            </div>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    
}

export default Button