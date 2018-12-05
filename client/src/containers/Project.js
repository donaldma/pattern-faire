import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postProject } from '../actions'
import { toast } from 'react-toastify'
import Constants from '../config/Constants'
import One from '../components/project/One'
import Two from '../components/project/Two'
import Three from '../components/project/Three'
import Four from '../components/project/Four'
import Five from '../components/project/Five'
import Six from '../components/project/Six'
import Seven from '../components/project/Seven'
import Eight from '../components/project/Eight'
import Nine from '../components/project/Nine'

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: props.email || '',
      fullName: '',
      locationType: undefined,
      businessName: '',
      businessAddress: '',
      residenceAddress: '',
      interiorDesignOptions: Constants.interiorDesignOptions,
      renovationLevel: undefined,
      spaceOptions: Constants.spaceOptions,
      notes: '',
      budget: 125000,
      serviceTypes: Constants.serviceTypes,
      page: 1
    }
  }

  handleChange = (state, val) => {
    let stateToSet = { [state]: val }
    if (state === 'locationType' && this.state.locationType !== val) {
      stateToSet = { ...stateToSet, businessName: '', businessAddress: '', residenceAddress: '' }
    }

    this.setState(stateToSet)
  }

  handleOptionsChange = (state, id, val) => {
    const option = this.state[state].find((x) => x.id === id)
    const optionIndex = this.state[state].findIndex((x) => x.id === id)
    const modifiedOption = {
      ...option,
      ...val
    }

    let stateToSet = {
      [state]: [
        ...this.state[state].slice(0, optionIndex),
        modifiedOption,
        ...this.state[state].slice(optionIndex + 1, this.state[state].length)
      ]
    }

    if (state === 'serviceTypes') {
      stateToSet = { ...stateToSet, interiorDesignOptions: Constants.interiorDesignOptions, renovationLevel: undefined }
    }

    this.setState(stateToSet)
  }

  handleProjectSubmit = async () => {
    const {
      email,
      fullName,
      locationType,
      businessName,
      businessAddress,
      residenceAddress,
      interiorDesignOptions,
      renovationLevel,
      spaceOptions,
      notes,
      budget
    } = this.state
    const interiorDesignOptionsReq = interiorDesignOptions
      .filter((x) => x.isSelected)
      .map((x) => {
        return {
          name: x.id
        }
      })

    const spaceOptionsReq = spaceOptions.map((x) => {
      return {
        ...x,
        name: x.id
      }
    })
    const postProjectReq = {
      email,
      fullName,
      locationType,
      businessName,
      businessAddress,
      residenceAddress,
      renovationLevel,
      notes,
      budget,
      interiorDesignOptions: interiorDesignOptionsReq,
      spaceOptions: spaceOptionsReq
    }
    await this.props.postProject(postProjectReq)

    if (this.props.postProjectReducer.error) {
      return toast.error(this.props.postProjectReducer.error)
    }

    this.props.history.push('/')
    return toast.success('A team member will be in touch with you shortly.', {
      autoClose: 5000
    })
  }

  handlePageChange = (page, action, manualPush) => {
    if (action === 'back') this.setState({ page: page - 1 })
    if (action === 'next') this.setState({ page: page + 1 })
    if (manualPush) this.setState({ page: manualPush })
  }

  renderContent = () => {
    const {
      email,
      fullName,
      locationType,
      businessName,
      businessAddress,
      residenceAddress,
      serviceTypes,
      interiorDesignOptions,
      renovationLevel,
      spaceOptions,
      notes,
      budget
    } = this.state

    const selectedServiceTypes = serviceTypes.filter((x) => x.isSelected).map((x) => x.id)
    const selectedInteriorDesignOptions = interiorDesignOptions.filter((x) => x.isSelected).map((x) => x.id)

    const OneComponent = (
      <One
        email={email}
        fullName={fullName}
        handleChange={this.handleChange}
        handlePageChange={this.handlePageChange}
        page={1}
      />
    )

    const TwoComponent = (
      <Two
        locationType={locationType}
        handleChange={this.handleChange}
        handlePageChange={this.handlePageChange}
        page={2}
      />
    )

    const ThreeComponent = (
      <Three
        locationType={locationType}
        businessName={businessName}
        businessAddress={businessAddress}
        residenceAddress={residenceAddress}
        handleChange={this.handleChange}
        handlePageChange={this.handlePageChange}
        page={3}
      />
    )

    const FourComponent = (
      <Four
        serviceTypes={serviceTypes}
        selectedServiceTypes={selectedServiceTypes}
        handleChange={this.handleOptionsChange}
        handlePageChange={this.handlePageChange}
        page={4}
      />
    )

    const FiveComponent = (
      <Five
        selectedServiceTypes={selectedServiceTypes}
        selectedInteriorDesignOptions={selectedInteriorDesignOptions}
        interiorDesignOptions={interiorDesignOptions}
        handleChange={this.handleOptionsChange}
        handlePageChange={this.handlePageChange}
        page={5}
      />
    )

    const SixComponent = (
      <Six
        selectedServiceTypes={selectedServiceTypes}
        renovationLevel={renovationLevel}
        handleChange={this.handleChange}
        handlePageChange={this.handlePageChange}
        page={6}
      />
    )

    const SevenComponent = (
      <Seven
        serviceTypes={serviceTypes}
        selectedServiceTypes={selectedServiceTypes}
        spaceOptions={spaceOptions}
        handleChange={this.handleOptionsChange}
        handlePageChange={this.handlePageChange}
        page={7}
      />
    )

    const EightComponent = (
      <Eight notes={notes} handleChange={this.handleChange} handlePageChange={this.handlePageChange} page={8} />
    )

    const NineComponent = (
      <Nine
        budget={budget}
        handleChange={this.handleChange}
        handlePageChange={this.handlePageChange}
        handleProjectSubmit={this.handleProjectSubmit}
        nextDisabled={this.props.postProjectReducer.isFetching}
        page={8}
      />
    )

    switch (this.state.page) {
      case 1:
        return OneComponent
      case 2:
        return TwoComponent
      case 3:
        return ThreeComponent
      case 4:
        return FourComponent
      case 5:
        return FiveComponent
      case 6:
        return SixComponent
      case 7:
        return SevenComponent
      case 8:
        return EightComponent
      case 9:
        return NineComponent
      default:
        return OneComponent
    }
  }

  render() {
    return (
      <div className='project-container padding-top-container'>
        <div className='container project-content'>
          <div className='row py-4'>
            <div className='col-lg-6 offset-lg-3'>{this.renderContent()}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  postProject
}

const mapStateToProps = ({ postProjectReducer }) => ({
  postProjectReducer
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
