import React from 'react'
import { Link } from 'react-router-dom'

const CtaLinkWrapper = (props) => {
  const { link, text } = props
  return (
    <Link to={link} className='cta-link mt-0'>
      <span className='cta-link-text'>{text}</span>
    </Link>
  )
}

export default CtaLinkWrapper
