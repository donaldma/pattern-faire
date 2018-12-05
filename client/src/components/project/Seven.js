import React, { Fragment } from 'react'
import Label from '../Label'
import PageActionButtons from './PageActionButtons'
import CounterSelect from '../CounterSelect'

const Seven = (props) => {
  const { selectedServiceTypes, spaceOptions, handleChange, handlePageChange, page } = props

  const handleBack = () => {
    // If user only selected interior design then skip last page (renovation page)
    if (!selectedServiceTypes.includes('renovation')) {
      return handlePageChange(page, 'back', 5)
    }

    handlePageChange(page, 'back')
  }

  const handleNext = () => handlePageChange(page, 'next')

  return (
    <Fragment>
      <Label text='What spaces are you planning on redesigning?' />
      <div className='row'>
        {spaceOptions.map((x, i) => (
          <CounterSelect
            key={i}
            id={x.id}
            count={x.count}
            state='spaceOptions'
            minusDisabled={x.count === 0}
            handleChange={handleChange}
          />
        ))}
      </div>
      <PageActionButtons handleBack={handleBack} handleNext={handleNext} />
    </Fragment>
  )
}

export default Seven
