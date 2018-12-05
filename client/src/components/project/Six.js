import React, { Component, Fragment } from 'react'
import Label from '../Label'
import Select from '../Select'
import Constants from '../../config/Constants'
import PageActionButtons from './PageActionButtons'
import { toast } from 'react-toastify'

class Six extends Component {
  componentWillMount() {
    const { selectedServiceTypes, handlePageChange, page } = this.props

    if (!selectedServiceTypes || selectedServiceTypes.length < 1) return handlePageChange(page, 'back', 4)
  }

  handleBack = () => {
    const { selectedServiceTypes, handlePageChange, page } = this.props

    // If user only selected renovation then skip last page (interior page)
    if (!selectedServiceTypes.includes('interior design')) {
      return handlePageChange(page, 'back', 4)
    }

    handlePageChange(page, 'back')
  }

  handleNext = () => {
    const { renovationLevel, handlePageChange, page } = this.props

    if (!renovationLevel) return toast.error('Please select a renovation level')

    handlePageChange(page, 'next')
  }

  render() {
    const { renovationLevel, handleChange } = this.props

    return (
      <Fragment>
        <Label text='Looking to Build and Renovate?' />
        <div className='project-sublabel'>
          We’ll select the necessary construction specialists for your project’s level of renovation and then handle the
          hard parts, from sourcing bids to signing the last check.
        </div>
        <div className='row'>
          {Constants.renovationLevels.map((x, i) => (
            <Select
              key={i}
              id={x.id}
              isSelected={x.id === renovationLevel}
              state='renovationLevel'
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

export default Six
