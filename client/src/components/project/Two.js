import React, { Fragment } from 'react'
import Label from '../Label'
import Select from '../Select'
import Constants from '../../config/Constants'
import PageActionButtons from './PageActionButtons'
import { toast } from 'react-toastify'

const Two = (props) => {
  const { locationType, handleChange, handlePageChange, page } = props

  const handleBack = () => handlePageChange(page, 'back')

  const handleNext = () => {
    if (!locationType) return toast.error('Please select a location type')

    handlePageChange(page, 'next')
  }

  return (
    <Fragment>
      <Label text='The location I am designing is a' />
      <div className='row'>
        {Constants.locationTypes.map((x, i) => (
          <Select
            key={i}
            id={x}
            isSelected={locationType === x}
            state='locationType'
            handleChange={handleChange}
          />
        ))}
      </div>
      <PageActionButtons handleBack={handleBack} handleNext={handleNext} />
    </Fragment>
  )
}

export default Two
