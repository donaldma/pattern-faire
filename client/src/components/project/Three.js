import React, { Component, Fragment } from 'react'
import Label from '../Label'
import Input from '../Input'
import { toast } from 'react-toastify'
import PageActionButtons from './PageActionButtons'
import GeosuggestWrapper from '../GeosuggestWrapper'

class Three extends Component {
  componentWillMount() {
    const { locationType, handlePageChange, page } = this.props

    if (!locationType) return handlePageChange(page, 'back')
  }

  handleBack = () => this.props.handlePageChange(this.props.page, 'back')

  handleNext = () => {
    const { locationType, residenceAddress, businessName, businessAddress, handlePageChange, page } = this.props

    if (locationType === 'retail' || locationType === 'restaurant' || locationType === 'commercial') {
      if (!businessName) return toast.error('Please enter a business name')
      if (!businessAddress) return toast.error('Please enter a business address')
    }

    if (locationType === 'residential') {
      if (!residenceAddress) return toast.error('Please enter a resisdence address')
    }

    handlePageChange(page, 'next')
  }

  onResisdenceSuggestSelect = (location) => {
    this.props.handleChange('residenceAddress', location ? location.label : '')
  }

  onBusinessSuggestSelect = (location) => {
    this.props.handleChange('businessAddress', location ? location.label : '')
  }

  render() {
    const { locationType, residenceAddress, businessName, businessAddress, handleChange } = this.props

    return (
      <Fragment>
        {locationType === 'residential' && (
          <Fragment>
            <Label text='residence address' />
            <GeosuggestWrapper onSuggestSelect={this.onResisdenceSuggestSelect} value={residenceAddress} />
          </Fragment>
        )}
        {(locationType === 'retail' || locationType === 'restaurant' || locationType === 'commercial') && (
          <Fragment>
            <Label text='business name' />
            <Input state='businessName' value={businessName} handleChange={handleChange} type='text' />
            <Label text='business address' />
            <GeosuggestWrapper onSuggestSelect={this.onBusinessSuggestSelect} value={businessAddress} />
          </Fragment>
        )}
        <PageActionButtons handleBack={this.handleBack} handleNext={this.handleNext} />
      </Fragment>
    )
  }
}

export default Three
