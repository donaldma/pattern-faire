import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postReferral } from '../actions'
import Slider from '../components/Slider'
import ValueProps from '../components/referral/ValueProps'
import ReferralCta from '../components/referral/ReferralCta'
import HowItWorks from '../components/referral/HowItWorks'
import { toast } from 'react-toastify'

class Referral extends Component {
  state = {
    height: 0,
    ghostDivDisplay: 'block',
    referrerEmail: '',
    clientEmail: ''
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight })
    setTimeout(() => this.setState({ ghostDivDisplay: 'none' }), 1000)
  }

  handleChange = (state, val) => {
    this.setState({ [state]: val })
  }

  handleReferralSubmit = async (e) => {
    e.preventDefault()
    await this.props.postReferral({
      referrerEmail: this.state.referrerEmail,
      clientEmail: this.state.clientEmail
    })

    if (this.props.postReferralReducer.error) {
      return toast.error(this.props.postReferralReducer.error)
    }

    await this.setState({
      referrerEmail: '',
      clientEmail: ''
    })
    return toast.success('A team member will be in touch with you shortly.', {
      autoClose: 5000
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
              <h1 className='home-header'>Empower your clients with the perfect design and buildout team.</h1>
              <h3 className='home-subheader'>Give your clients peace of mind that they're working with the best.</h3>
              <a href='#referral-cta' className='btn main-btn'>
                Refer a Client
              </a>
            </div>
          </div>
        </div>
        <div id='ghostDiv' style={{ display: ghostDivDisplay, height: height }} />
        <ValueProps />
        <ReferralCta
          handleReferralSubmit={this.handleReferralSubmit}
          handleChange={this.handleChange}
          referrerEmail={this.state.referrerEmail}
          clientEmail={this.state.clientEmail}
        />
        <HowItWorks />
      </div>
    )
  }
}

const mapDispatchToProps = {
  postReferral
}

const mapStateToProps = ({ postReferralReducer }) => ({
  postReferralReducer
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Referral)
