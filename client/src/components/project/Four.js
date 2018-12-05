import React, { Fragment } from 'react'
import Label from '../Label'
import Select from '../Select'
import PageActionButtons from './PageActionButtons'
import { toast } from 'react-toastify'

const Four = (props) => {
  const { selectedServiceTypes, serviceTypes, handleChange, handlePageChange, page } = props

  const handleBack = () => handlePageChange(page, 'back')

  const handleNext = () => {
    if (!selectedServiceTypes || selectedServiceTypes.length < 1)
      return toast.error('Please select at least one service')

    // If user only selected renovation then skip next page (interior design page)
    if (!selectedServiceTypes.includes('interior design') && selectedServiceTypes.includes('renovation')) {
      return handlePageChange(page, 'next', 6)
    }

    handlePageChange(page, 'next')
  }

  return (
    <Fragment>
      <Label text='Select one or both of the services we can provide for your project' />
      <div className='row'>
        {serviceTypes.map((x, i) => (
          <Select
            key={i}
            id={x.id}
            isSelected={x.isSelected}
            state='serviceTypes'
            handleChange={handleChange}
          />
        ))}
      </div>
      <PageActionButtons handleBack={handleBack} handleNext={handleNext} />
    </Fragment>
  )
}

export default Four
