import React from 'react'
import { FiKey } from 'react-icons/fi'
import { LandingPageNav, ClearStrikeThrough, Spacer, FindProButton, FindWorkButton, Partner, MembershipModel, Integrations, AddressCards } from '../../components'
import { Button } from 'react-bootstrap'

const LandingPage = () => {

  return (
    <div>
      <div className="bg-blue-100 h-screen">
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
      <div className="mt-[-50px]">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="d-flex shadow rounded bg-white p-3">
              <Partner showtext={true} />
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="d-flex flex-column">
                <Spacer spacing='[5, 0, 0, 0]' />
                <Spacer spacing='[5, 0, 0, 0]' />
                <Spacer spacing='[5, 0, 0, 0]' />
                <span className="text-teal-400">BECAUSE PROZ.COM HAS A DIFFERENT MISSION</span>
                <span className="fs-1 fw-bolder">Use ProZ.com to expand your business</span>
                <Spacer spacing='[3, 0, 0, 0]' />
                <span className="">
                  ProZ.com's mission is to empower language industry professionals to achieve their business objectives and realize their full potential. ProZ.com does this by: being committed to member success, providing access to state-of-the-art tools, educating and inspiring, and fostering collaboration among positive, like-minded professionals.
                </span>
                <Spacer spacing='[3, 0, 0, 0]' />
                <span className="">
                  Focusing on the people and the work they do makes ProZ.com a uniquely effective place for outsourcers to meet capable freelancers and translation companies. Many other sites consist of little more than static profiles in a directory.
                </span>
                <Spacer spacing='[3, 0, 0, 0]' />
                <Button className="col-sm-5 py-2 bg-[#186362] border-[#186362] rounded-4 text-white-600 d-flex align-items-center justify-content-center hover:bg-white hover:text-black hover:border-[#186362]">
                  <FiKey className="me-2" />
                  GET STARTED
                </Button>
              </div>
              <Spacer spacing='[5, 0, 0, 0]' />
              <Spacer spacing='[5, 0, 0, 0]' />
            </div>
          </div>
        </div>
        <div className="">
          <div className="col-sm-6">
            <div className="col-sm-6"></div>
            <div className="col-sm-6"></div>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </div>
      <div className="row bg-green-200">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="d-flex flex-column">
                <Spacer spacing='[5, 0, 0, 0]' />
                <span className="fs-6">FIND THE BEST TALENT WORLDWIDE</span>
                <span className="fs-1 fw-bolder">FIND THE BEST TALENT WORLDWIDE</span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>Find the best talent worldwide
                  For Employers
                  Search our freelancer listings for rated and reviewed experts in every skill imaginable — One discovery could change your business forever.
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>
                  Refine your search by skill, location or hourly rate. Contact freelancers and request a proposal for your project.
                  register for free
                  post a job
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <Spacer spacing='[5, 0, 0, 0]' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 m-0 p-0">
          <div className="d-flex flex-column w-[100%] h-[100%] align-items-end justify-content-center">
            <div className="w-[80%] bg-green-400 h-[60%] rounded-tl-[50px] rounded-bl-[50px]">

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="d-flex flex-column w-[100%] h-[100%] align-items-start justify-content-center">
            <Spacer spacing='[5, 0, 0, 0]' />
            <span className="fs-6 text-green-200">WHAT MAKES PROZ.COM UNIQUE</span>
            <span className="fs-1 text-black fw-bolder">Membership Model</span>
            <Spacer spacing='[5, 0, 0, 0]' />
            <Spacer spacing='[5, 0, 0, 0]' />
            <MembershipModel />
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row bg-orange-100">
        <div className="col-sm-6 m-0 p-0">
          <div className="d-flex flex-column w-[100%] h-[100%] align-items-start justify-content-center">
            <div className="w-[80%] bg-orange-200 h-[60%] rounded-tr-[50px] rounded-br-[50px]">

            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex flex-column">
                <Spacer spacing='[5, 0, 0, 0]' />
                <span className="fs-6">FIND THE BEST TALENT WORLDWIDE</span>
                <span className="fs-2 fw-bolder">FIND THE BEST TALENT WORLDWIDE</span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>Find the best talent worldwide
                  For Employers
                  Search our freelancer listings for rated and reviewed experts in every skill imaginable — One discovery could change your business forever.
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>
                  Refine your search by skill, location or hourly rate. Contact freelancers and request a proposal for your project.
                  register for free
                  post a job
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <Spacer spacing='[5, 0, 0, 0]' />
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <div className="d-flex flex-column">
                <span className="fs-6 text-green-200">FOR YOUR APPS & WEBSITES</span>
                <span className="fs-1 text-black fw-bolder">Plug-andplay integrations</span>
                <div className="">
                  <Integrations />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row bg-blue-100">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <Spacer spacing='[5, 0, 0, 0]' />
              <div className="row">
                <AddressCards column="4" background="blue-300" shadow="lg" border_radius="2" office_location="ProZ.com Headquaters" office_phone="+1-315-463-7323" office_address="235 Harrison Street Suite 202 Syracuse, NY 13202. USA" />
                <AddressCards column="4" background="blue-300" shadow="lg" border_radius="2" office_location="ProZ.com Argentina" office_phone="+54-221-425-1266" office_address="Calle 14 nro. 622 1/2 entre 44 y 45 La Plata (B1900AND), Buenos Aires Argentina" />
                <AddressCards column="4" background="blue-300" shadow="lg" border_radius="2" office_location="ProZ.com Ukraine" office_phone="+380 57 7281624" office_address="6 Karazina St. Kharkiv, 61002. Ukraine" />
              </div>
              <Spacer spacing='[5, 0, 0, 0]' />
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  )
}

export default LandingPage
