import React, { Fragment } from 'react'
import Label from '../Label'
import Input from '../Input'
import PageActionButtons from './PageActionButtons'
import { toast } from 'react-toastify'
import * as EmailValidator from 'email-validator'

const One = (props) => {
  const { email, fullName, handleChange, handlePageChange, page } = props

  const handleNext = () => {
    if (!email || !EmailValidator.validate(email)) return toast.error('Please enter a valid email')
    if (!fullName) return toast.error('Please enter your full name')

    handlePageChange(page, 'next')
  }

  return (
    <Fragment>
      <h1 className='text-center mb-5'>Start a Project</h1>
      <Label text='email' />
      <Input state='email' value={email} handleChange={handleChange} type='email' />
      <Label text='full name' />
      <Input state='fullName' value={fullName} handleChange={handleChange} type='text' />
      <PageActionButtons handleNext={handleNext} />
    </Fragment>
  )
}

export default One
