import React from 'react'
import classNames from 'classnames'

const Select = (props) => {
  const { id, isSelected, state, subText, handleChange } = props

  return (
    <div className='col-md-6'>
      <div
        id={id}
        className={classNames('project-select text-center vert-align', { 'project-select-active': isSelected })}
        onClick={() => handleChange(state, id, { isSelected: !isSelected })}
      >
        <div className='vert-align'>
          {id}
          <div>{subText}</div>
        </div>
      </div>
    </div>
  )
}

export default Select
