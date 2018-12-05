import React from 'react'

const PageActionButtons = (props) => {
  const { handleBack, handleNext, submit, nextDisabled } = props

  const handleBackLocal = () => {
    window.scrollTo(0, 0)
    handleBack()
  }

  const handleNextLocal = () => {
    window.scrollTo(0, 0)
    handleNext()
  }

  return (
    <div className='row mt-4'>
      <div className='col-md-6 mb-2'>
        <button className='btn main-btn w-100 mt-0' onClick={() => handleBackLocal()} disabled={!handleBack}>
          back
        </button>
      </div>
      <div className='col-md-6'>
        <button
          className='btn main-btn-dark w-100 mt-0'
          onClick={() => handleNextLocal()}
          disabled={!handleNext || nextDisabled}
        >
          {submit ? 'submit' : 'next'}
        </button>
      </div>
    </div>
  )
}

export default PageActionButtons
