import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => (
  <header className='cd-morph-dropdown'>
    <div className='mobile-logo'>
      <Link to='/' className='label'>
        <div className='logo'>Pattern Faire</div>
      </Link>
    </div>
    <a href='#0' className='nav-trigger'>
      Open Nav<span aria-hidden='true' />
    </a>

    <div className='container p-0'>
      <nav className='main-nav'>
        <ul className='left'>
          <li>
            <Link to='/'>
              <div className='logo'>Pattern Faire</div>
            </Link>
          </li>
        </ul>
        <ul className='right'>
          <li data-content='how-it-works'>
            <a href='/#how-it-works-section'>How it works</a>
          </li>

          <li data-content='portfolio'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>

          <li data-content='start-a-project'>
            <Link to='/project'>Start A Project</Link>
          </li>

          <li data-content='become'>
            <Link to='/'>Become A Designer</Link>
          </li>
        </ul>
      </nav>
    </div>

    <div className='morph-dropdown-wrapper'>
      <div className='dropdown-list'>
        <ul>
          <li id='how-it-works' className='dropdown links'>
            <a href='/#how-it-works-section' className='label'>
              How it works
            </a>
          </li>

          <li id='portfolio' className='dropdown links'>
            <Link to='/portfolio' className='label'>
              Portfolio
            </Link>
          </li>

          <li id='start-a-project' className='dropdown links'>
            <Link to='/project' className='label'>
              Start A Project
            </Link>
          </li>

          <li id='become' className='dropdown links'>
            <Link to='/' className='label'>
              Become A Designer
            </Link>
          </li>
        </ul>

        <div className='bg-layer' aria-hidden='true' />
      </div>
    </div>
  </header>
)

export default Nav
