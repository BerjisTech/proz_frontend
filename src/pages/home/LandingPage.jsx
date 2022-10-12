import React from 'react'
import { LandingPageNav, ClearStrikeThrough, Spacer, FindProButton, FindWorkButton } from '../../components'
const LandingPage = () => {

  return (
    <div>
      <div className="bg-blue-100 w-screen h-screen m-0 p-0">
        <LandingPageNav />
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <Spacer spacing='[5, 0, 0, 0]' />
            <ClearStrikeThrough striked_text={`We are so much more than a freelancing site`} />
            <div className="text-7xl fw-bolder text-center mt-5 leading-normal tracking-wider">
              Online Community and Workplace
              for <span className="text-teal-400">Language Professionals</span>
            </div>
            <Spacer spacing='[5, 0, 0, 0]' />
            <div className="text-center">
              <FindWorkButton />
              <span className="inline-block mx-3"></span>
              <FindProButton />
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
