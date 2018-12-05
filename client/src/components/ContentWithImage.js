import React from 'react'

const ContentWithImage = (props) => {
  const { content, imgPosition, imgSrc } = props
  const imgClassName =
    imgPosition === 'left' ? 'col-lg-6 text-lg-left text-center' : 'order-lg-2 col-lg-6 text-lg-right text-center'

  return (
    <div className='row my-5'>
      <div className={imgClassName}>
        <img src={imgSrc} alt='' className='section-img' />
      </div>

      <div className='col-lg-6 text-lg-left text-center'>
        <div className='vert-align'>{content}</div>
      </div>
    </div>
  )
}

export default ContentWithImage
