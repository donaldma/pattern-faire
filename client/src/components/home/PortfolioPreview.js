import React from 'react'
import CtaLinkWrapper from '../CtaLinkWrapper'

const PortfolioPreview = (props) => (
  <div id='portfolio-preview-section' className='py-5'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h1>View Our Portfolio</h1>
        </div>
      </div>
      <div className='row my-4'>
        {props.images.map((x, i) => {
          return (
            <div className='col-lg-4 mb-4 text-center' key={i}>
              <img src={`/img/portfolio-preview/${x}.jpg`} alt={i} className='portfolio-preview-img' />
            </div>
          )
        })}

        <div className='col-lg-12 text-center'>
          <CtaLinkWrapper link='/portfolio' text='See More' />
        </div>
      </div>
    </div>
  </div>
)

export default PortfolioPreview
