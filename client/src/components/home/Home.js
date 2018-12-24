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
    ghostDivDisplay: 'block',
    email: ''
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight })
    setTimeout(() => this.setState({ ghostDivDisplay: 'none' }), 1000)
  }

  handleChange = (state, val) => {
    this.setState({ [state]: val })
  }

  handleNext = () => {
    this.props.history.push({
      pathname: '/project',
      state: { email: this.state.email }
    })
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
              <input
                type='email'
                className='referral-form__field'
                placeholder='Your Email'
                onChange={(e) => this.handleChange('email', e.target.value)}
                value={this.state.email}
              />
              <button onClick={() => this.handleNext()} className='btn home-btn__primary home-btn__inside'>
                Next
              </button>
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
