import React, { Fragment } from 'react'
import Label from '../Label'
import PageActionButtons from './PageActionButtons'
import TextField from '../TextField'

const Eight = (props) => {
  const { notes, handleChange, handlePageChange, page } = props

  const handleBack = () => handlePageChange(page, 'back')

  const handleNext = () => handlePageChange(page, 'next')

  return (
    <Fragment>
      <Label text='Additional notes about me or my project' />
      <div className='project-sublabel'>
        Tell us anything that could be helpful - any plans, details, or style preferences you have (including links to
        Pinterest boards). The more we know, the more we can plan and personalize the perfect Pattern Faire experience for
        you.
      </div>
      <TextField state='notes' value={notes} handleChange={handleChange} type='text' />
      <PageActionButtons handleBack={handleBack} handleNext={handleNext} />
    </Fragment>
  )
}

export default Eight
