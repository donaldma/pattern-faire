import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = (props) => (
  <div id='get-started-section' className='py-5'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h6 className='section-subheader'>GET STARTED WITH A COMPLIMENTARY CONSULTATION</h6>
          <h3>Let us select the perfect design team for you.</h3>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-lg-8 offset-lg-2 text-center'>
          <Link to='/project' className='btn main-btn mt-0'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default GetStarted
