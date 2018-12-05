import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Slider = (props) => {
  return (
    <Carousel
      dynamicHeight
      useKeyboardArrows
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
      showArrows={false}
      interval={5000}
      className='presentation-mode'
    >
      {props.images.map((x) => (
        <div key={x}>
          <img src={`/img/slider/${x}.jpg`} alt={`house${x}`} />
        </div>
      ))}
    </Carousel>
  )
}

export default Slider
