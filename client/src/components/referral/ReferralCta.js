import React from 'react'

const ReferralCta = (props) => (
  <div id='referral-cta' className='py-5 light-gray-bg'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h3>Get early access to our preferred agent partnership</h3>
          <form className='referral-form' onSubmit={(e) => props.handleReferralSubmit(e)}>
            <div className='row'>
              <div className='col-lg-6 mb-3'>
                <input
                  type='email'
                  className='referral-form__field'
                  placeholder='Enter your email address'
                  onChange={(e) => props.handleChange('referrerEmail', e.target.value)}
                  value={props.referrerEmail}
                />
              </div>
              <div className='col-lg-6 mb-3'>
                <input
                  type='email'
                  className='referral-form__field'
                  placeholder="Enter your client's email address"
                  onChange={(e) => props.handleChange('clientEmail', e.target.value)}
                  value={props.clientEmail}
                />
                <button type='submit' className='btn btn-desktop referral-btn__primary referral-btn__inside'>
                  Send
                </button>
              </div>
              <div className='col-12 text-center'>
                <button type='submit' className='btn btn-mobile referral-btn__primary'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default ReferralCta
