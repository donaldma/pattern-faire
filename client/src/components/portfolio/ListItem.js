import React from 'react'

const ListItem = (props) => {
  const { item } = props
  return (
    <div id={item.id} className='col-md-9'>
      <div className='ml-lg-5 mb-5'>
        <h4>{item.type}</h4>
        <div className='row'>
          {item.data.map((x, i) => (
            <div key={i} className='col-md-4 mb-4'>
              <img className='portfolio-preview-img' src={`/img/portfolio/${x}`} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListItem
