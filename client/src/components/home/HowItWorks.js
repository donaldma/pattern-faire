import React from 'react'
import CtaLinkWrapper from '../CtaLinkWrapper'
import ContentWithImage from '../ContentWithImage'

const HowItWorks = (props) => (
  <div id='how-it-works-section' className='py-5 light-gray-bg'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h2>
            Pattern Faire represents Canada's top interior design talent and offers our clients a personal and seamless
            interior design experience.
          </h2>
        </div>
      </div>
      <ContentWithImage
        imgPosition='right'
        imgSrc='/img/kitchen.jpg'
        content={
          <div>
            <h6 className='section-subheader mb-4'>TO GET STARTED</h6>
            <h3 className='mb-4'>Sign up & Meet Your Designer</h3>
            <p className='mb-4'>
              Pattern interior designers are vetted professionals and real people. Fill out your details, and we’ll
              either select a designer for you or set you up with a Pattern designer you already love. Then enjoy a
              complimentary, one-on-one consultation.
            </p>
            <CtaLinkWrapper link='/project' text='Get Started' />
          </div>
        }
      />
      <ContentWithImage
        imgPosition='left'
        imgSrc='/img/living-room.jpg'
        content={
          <div>
            <h6 className='section-subheader mb-4'>AFTER YOUR CONSULTATION</h6>
            <h3 className='mb-4'>Review Your Proposal & Purchase Design Time</h3>
            <p>
              Based on your needs and project scope, your designer will create a custom proposal outlining tasks,
              products to purchase, and a recommended design fee.
            </p>
            <p>
              We work with your budget, style, and unique space. We'll even incorporate any of your existing pieces into
              the room design.
            </p>
            <p>
              <i>(price varies by designer)</i>
            </p>
          </div>
        }
      />
      <ContentWithImage
        imgPosition='right'
        imgSrc='/img/home-office.jpg'
        content={
          <div>
            <h6 className='section-subheader mb-4'>FROM START TO FINISH</h6>
            <h3 className='mb-4'>End-to-End Project Management</h3>

            <h6 className='section-subheader mb-4'>A DEDICATED ACCOUNT MANAGER</h6>
            <p>
              You’ll have our entire support team at your service, including a dedicated, on-call Account Manager who
              can answer any questions and keep your project running smoothly.
            </p>

            <h6 className='section-subheader mb-4'>PURCHASING CONCIERGE</h6>
            <p>
              Our easy-to-navigate Shopping List lets you and your designer easily collaborate on items to purchase.
              Once you’re ready, our Concierge team will place your orders across hundreds of vendors—and manage all the
              logistics.
            </p>

            <h6 className='section-subheader mb-4'>A VETTED NETWORK OF RENOVATION SPECIALISTS</h6>
            <p>
              When your project needs it, we’ll select reliable contractors and architects for you, saving you from a
              stressful bidding process, and partner with your designer to keep things moving—from contracts and billing
              to everything in between.
            </p>
          </div>
        }
      />
    </div>
  </div>
)

export default HowItWorks
