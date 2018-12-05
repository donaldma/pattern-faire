import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../Slider'
import HowItWorks from './HowItWorks'
import PortfolioPreview from './PortfolioPreview'
import Apply from './Apply'
import GetStarted from './GetStarted'

class Home extends Component {
  state = {
    height: 0,
    ghostDivDisplay: 'block'
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight })
    setTimeout(() => this.setState({ ghostDivDisplay: 'none' }), 1000)
  }

  render() {
    const { height, ghostDivDisplay } = this.state
    return (
      <div>
        <Slider images={[1, 2, 3, 4, 5, 6]} />
        <div className='home-headers-container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='home-header'>Meet the best contractors and interiors designers.</h1>
              <h3 className='home-subheader'>
                Sign up and Pattern will select the perfect design team for your project.
              </h3>
              <Link to='/project' className='btn main-btn'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div id='ghostDiv' style={{ display: ghostDivDisplay, height: height }} />
        <HowItWorks />
        <PortfolioPreview images={[1, 2, 3, 4, 5, 6]} />
        <Apply />
        <GetStarted />
      </div>
    )
  }
}

export default Home
