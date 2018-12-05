import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

class SliderSelect extends Component {
  render() {
    const { state, budget, handleChange } = this.props
    return (
      <div>
        <Slider min={0} max={250000} defaultValue={budget} onChange={(val) => handleChange(state, val)} />
      </div>
    )
  }
}

export default SliderSelect
