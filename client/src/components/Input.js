import React from 'react'

const Input = (props) => {
  const { state, value, handleChange, type } = props

  return (
    <div className='form-group'>
      <input
        type={type}
        className='input-group referral-form__field w-100'
        onChange={(e) => handleChange(state, e.target.value)}
        value={value}
      />
    </div>
  )
}

export default Input
