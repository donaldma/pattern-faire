import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { postActivity } from '../actions'
import Home from '../components/home/Home'
import Portfolio from '../components/portfolio/Portfolio'
import Referral from './Referral'
import ToastWrapper from '../components/ToastWrapper'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Project from './Project'

class App extends Component {
  componentWillMount() {
    this.props.postActivity()
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Nav />
          <div className='main-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/referral' component={Referral} />
              <Route exact path='/project' component={Project} />
              <Route component={Home} />
            </Switch>
            <Footer />
            <ToastWrapper />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  postActivity
}

export default connect(null, mapDispatchToProps)(App)
