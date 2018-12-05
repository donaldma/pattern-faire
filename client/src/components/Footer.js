import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'

const Footer = (props) => (
  <footer className='footer-lg'>
    <div className='container footer-body'>
      <div className='row'>
        <div className='col-lg-8 offset-lg-2'>
          <div className='row text-center text-sm-left'>
            <div className='col-sm-8'>
              <Link to='/'>
                <div className='footer-logo mb-2 mb-sm-4'>Pattern Faire</div>
              </Link>
              <p className='mb-1 mb-sm-3'>
                <Icon className='align-icons'>phone</Icon>
                <a href='tel:6048897532' className='cta-link'>
                  (604) 889-7532
                </a>
              </p>
              <p>
                <Icon className='align-icons'>email</Icon>
                <a href='mailto:w@crossventuregroup.com' className='cta-link'>
                  w@crossventuregroup.com
                </a>
              </p>
            </div>

            <div className='col-sm-4 footer-column'>
              <ul>
                <li>
                  <a href='/#how-it-works-section'>How it works</a>
                </li>

                <li>
                  <Link to='/portfolio'>Portfolio</Link>
                </li>

                <li>
                  <Link to='/project'>Start A Project</Link>
                </li>

                <li>
                  <Link to='/'>Become A Designer</Link>
                </li>

                <li>
                  <Link to='/referral'>Refer Us A Client</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
