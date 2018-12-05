import React from 'react'

const CounterSelect = (props) => {
  const { id, count, minusDisabled, state, handleChange } = props

  return (
    <div className='col-12'>
      <div className='row mb-3'>
        <div className='col-6 uppercase-helvetica'>
          <div className='vert-align'>{id}</div>
        </div>
        <div className='col-6 text-center'>
          <div className='counter buttons-added'>
            <input
              type='button'
              value='-'
              className='minus'
              disabled={minusDisabled}
              onClick={() => handleChange(state, id, { count: count - 1 })}
            />
            <input type='number' value={count} className='input-text count text' readOnly />
            <input
              type='button'
              value='+'
              className='plus'
              onClick={() => handleChange(state, id, { count: count + 1 })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CounterSelect
