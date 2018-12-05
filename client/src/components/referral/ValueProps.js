import React from 'react'
import { Icon } from '@material-ui/core'

const ValueProps = props=> (
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 text-center mb-4'>
              <div className='vert-align'>
                <Icon className='fas fa-handshake value-props-icon'/>
                <h6 className='section-subheader font-weight-bold'>Offer more to your clients</h6>
                <p>Present your clients with a world-class design and build out firm.</p>
              </div>
            </div>
            <div className='col-lg-4 text-center mb-4'>
              <div className='vert-align'>
                <Icon className='fas fa-hand-holding-usd value-props-icon'/>
                <h6 className='section-subheader font-weight-bold'>Earn more with Pattern</h6>
                <p>Earn cash and rewards when referring a client to Pattern.</p>
              </div>
            </div>
            <div className='col-lg-4 text-center mb-4'>
              <div className='vert-align'>
                <Icon className='fas fa-users value-props-icon'/>
                <h6 className='section-subheader font-weight-bold'>Flexibility and control</h6>
                <p>Get a quote, and design build out team within hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

export default (ValueProps)


