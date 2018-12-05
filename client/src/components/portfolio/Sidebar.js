import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  const { portfolioData, selected, handleChange } = props
  return (
    <div className='col-md-3 sidebar'>
      <ul>
        <li className='sidebar-header mx-2 my-4'>Browse by room</li>
        {portfolioData.map((x, i) => {
          return (
            <li key={i} className='mx-2 my-4'>
              <Link
                to={`#${x.id}`}
                className='cta-link sidebar-item'
                style={{ opacity: selected === x.id && 1 }}
                onClick={() => handleChange(x.id)}
              >
                {x.type}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
