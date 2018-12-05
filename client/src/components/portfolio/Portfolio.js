import React, { Component } from 'react'
import portfolioData from '../../config/portfolioData'
import Sidebar from './Sidebar'
import ListItem from './ListItem'

class Portfolio extends Component {
  state = {
    selected: 'bedrooms'
  }

  handleChange = id => {
    this.setState({ selected: id })
  }

  render() {
    const selectedPortfolioType = portfolioData.find(x => x.id === this.state.selected)
    return (
      <div className='container padding-top-container'>
        <div className='row my-5'>
          <div className='col-lg-12 text-center'>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className='row my-5'>
          <Sidebar portfolioData={portfolioData} selected={this.state.selected} handleChange={this.handleChange} />
          <ListItem item={selectedPortfolioType} />
        </div>

      </div>
    )
  }
}

export default (Portfolio)

