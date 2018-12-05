import React, { Component, Fragment } from 'react'
import Label from '../Label'
import Select from '../Select'
import PageActionButtons from './PageActionButtons'
import { toast } from 'react-toastify'

class Five extends Component {
  componentWillMount() {
    const { selectedServiceTypes, handlePageChange, page } = this.props

    if (!selectedServiceTypes || selectedServiceTypes.length < 1) return handlePageChange(page, 'back')
  }

  handleBack = () => this.props.handlePageChange(this.props.page, 'back')

  handleNext = () => {
    const { selectedServiceTypes, selectedInteriorDesignOptions, handlePageChange, page } = this.props

    if (!selectedInteriorDesignOptions || selectedInteriorDesignOptions.length < 1)
      return toast.error('Please select at least one option')

    // If user only selected interior then skip next page (renovation page)
    if (!selectedServiceTypes.includes('renovation')) {
      return handlePageChange(page, 'next', 7)
    }

    handlePageChange(page, 'next')
  }

  render() {
    const { interiorDesignOptions, handleChange } = this.props

    return (
      <Fragment>
        <Label text='Looking for interior design?' />
        <p className='project-sublabel'>
          We’ll select a designer who fits with your scope, personality, and, most importantly, your style. Don’t like
          our selection? No problem, we’ll choose another designer for you.
        </p>
        <div className='project-sublabel mb-0'>Select all that apply:</div>
        <div className='row'>
          {interiorDesignOptions.map((x, i) => (
            <Select
              key={i}
              id={x.id}
              isSelected={x.isSelected}
              state='interiorDesignOptions'
              subText={x.subText}
              handleChange={handleChange}
            />
          ))}
        </div>
        <PageActionButtons handleBack={this.handleBack} handleNext={this.handleNext} />
      </Fragment>
    )
  }
}

export default Five
