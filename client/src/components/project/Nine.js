import React, { Fragment } from 'react'
import Label from '../Label'
import PageActionButtons from './PageActionButtons'
import SliderSelect from '../SliderSelect'

const Nine = (props) => {
  const { nextDisabled, budget, handleChange, handlePageChange, handleProjectSubmit, page } = props

  const handleBack = () => handlePageChange(page, 'back')

  const handleNext = () => handleProjectSubmit()

  return (
    <Fragment>
      <Label text="The budget I'm planning for this project" />
      <div className='project-sublabel'>
        Provide us with your best estimate (we can adjust later) so we can select the right plan for you. Your budget
        should represent the full scope of your project, including design and renovation services, furniture, and decor.
      </div>
      <div className='text-center budget-text'>${budget}</div>
      <SliderSelect budget={budget} handleChange={handleChange} state='budget' />
      <div className='row budget-label'>
        <div className='col-6'>0</div>
        <div className='col-6 text-right'>250K</div>
      </div>
      <PageActionButtons handleBack={handleBack} handleNext={handleNext} submit nextDisabled={nextDisabled}/>
    </Fragment>
  )
}

export default Nine
