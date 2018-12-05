import React from 'react'
import CtaLinkWrapper from '../CtaLinkWrapper'

const Apply = (props) => (
  <div id='apply-section' className='py-5 light-gray-bg'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h1>Our Designers</h1>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-lg-8 offset-lg-2 text-center'>
          <p className='mb-4'>
            Pattern represents the country's top residential and commercial interior design talent, including
            established designers and up-and-comming talent. We rigorously vet each designer and select the professional
            equipped with the taste, experience, and enthusiasm to create your space.
          </p>
          <CtaLinkWrapper link='/' text='Apply to be a Pattern designer' />
        </div>
      </div>
    </div>
  </div>
)

export default Apply
