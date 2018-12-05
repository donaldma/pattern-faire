import React from 'react'

const TextField = (props) => {
  const { state, value, handleChange, type } = props

  return (
    <div className='form-group'>
      <textarea
        type={type}
        className='input-group referral-form__field notes-field w-100'
        onChange={(e) => handleChange(state, e.target.value)}
        value={value}
      />
    </div>
  )
}

export default TextField
