import React from 'react'
import { FiKey, FiMail } from 'react-icons/fi'
import { LandingPageNav, ClearStrikeThrough, Spacer, Partner, MembershipModel, Integrations, AddressCards } from '../../components'
import { Button } from 'react-bootstrap'
import { BiBookAlt, BiBriefcase, BiLaptop, BiTargetLock, BiUserPin } from 'react-icons/bi'
import { GiBullseye, GiChatBubble, GiGraduateCap, GiPapers, GiPresent } from 'react-icons/gi'

const LandingPage = () => {
  return (
    <div>
      <LandingPageNav />
      <div className="bg-blue-50 pb-[100px]">
        <div className="row m-0 p-0">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Spacer spacing='[4, 0, 0, 0]' />
            <ClearStrikeThrough striked_text={`WE ARE SO MUCH MORE THAN A FREELANCE SITE`} font_size="12px" text_color="#3A727F" />
            <div className="text-4xl font-[800] text-center mt-5">
              Online Community and Workplace<br />
              for <span className="text-[#A1DDCB]">Language Professionals</span>
            </div>
            <Spacer spacing='[5, 0, 0, 0]' />
            <div className="d-flex align-items-center justify-content-center">
              <a href="/jobs" >
                <span className="fw-bolder d-flex align-items-center justify-content-center w-auto bg-[#386E7A] text-white px-3 py-2 mx-2 rounded">
                  <BiTargetLock className="me-2" /> Find Work
                </span>
              </a>
              <span className="inline-block mx-3"></span>
              <a href="/transaltors" >
                <span className="fw-bolder d-flex align-items-center justify-content-center w-auto bg-inherit text-[#386E7A] border-[#386E7A] border-2 px-3 py-2 mx-2 rounded">
                  <BiUserPin className="me-2" /> Hire A Pro
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <Spacer spacing='[4, 0, 0, 0]' />
        <div className="row m-0 p-0">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img src='/images/proz_services_banner.png' alt="ProZ Services Box" />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="mt-[-50px]">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 p-0 m-0">
            <div className="d-flex shadow rounded bg-white p-3">
              <div className="d-flex align-items-center justify-content-start w-[100%]">
                <p className="m-0 me-1 fw-bolder">They trust us...</p>
                <div className="row d-flex align-items-center justify-content-between flex-fill">
                  <Partner main_style="col-2" card_style="d-flex align-items-center justify-content-center h-full" logo_size="30px" partner_logo="/images/logos/google.png" alt="slide 1" />
                  <Partner main_style="col-2" card_style="d-flex align-items-center justify-content-center h-full" logo_size="30px" partner_logo="/images/logos/nikon.png" alt="slide 1" />
                  <Partner main_style="col-2" card_style="d-flex align-items-center justify-content-center h-full" logo_size="30px" partner_logo="/images/logos/netflix.png" alt="slide 1" />
                  <Partner main_style="col-2" card_style="d-flex align-items-center justify-content-center h-full" logo_size="30px" partner_logo="/images/logos/target.png" alt="slide 1" />
                  <Partner main_style="col-2" card_style="d-flex align-items-center justify-content-center h-full" logo_size="30px" partner_logo="/images/logos/microsoft.png" alt="slide 1" />
                </div>
              </div >
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <div className="my-[150px]">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex flex-column">
                  <span className="text-[#A1DDCB] text-[12px]">BECAUSE PROZ.COM HAS A DIFFERENT MISSION</span>
                  <span className="fs-3 fw-bolder">Use ProZ.com to expand your business</span>
                  <Spacer spacing='[3, 0, 0, 0]' />
                  <span className="text-[12px]">
                    ProZ.com's mission is to empower language industry professionals to achieve their business objectives and realize their full potential. ProZ.com does this by: being committed to member success, providing access to state-of-the-art tools, educating and inspiring, and fostering collaboration among positive, like-minded professionals.
                  </span>
                  <Spacer spacing='[3, 0, 0, 0]' />
                  <span className="text-[12px]">
                    Focusing on the people and the work they do makes ProZ.com a uniquely effective place for outsourcers to meet capable freelancers and translation companies. Many other sites consist of little more than static profiles in a directory.
                  </span>
                  <Spacer spacing='[4, 0, 0, 0]' />
                  <a href="/signup" className="d-flex">
                    <span className="py-1 px-3 bg-[#186362] border-[#186362] border-2 rounded-2 text-[#ffffff] d-flex align-items-center justify-content-center hover:bg-white hover:text-[#186362] hover:border-[#186362]">
                      <FiKey className="text-white me-2" />
                      GET STARTED
                    </span>
                  </a>
                </div>
                <Spacer spacing='[5, 0, 0, 0]' />
                <Spacer spacing='[5, 0, 0, 0]' />
              </div>
              <div className="col-md-5 h-100 d-flex flex-column align-items-center justify-content-center">
                <img src='/images/screens_dashboard.png' alt="ProZ is 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-[#A1DDCB]">
        <div className="col-md-6">
          <div className="row py-5">
            <div className="col-md-4"></div>
            <div className="col-md-8 py-5 my-5">
              <div className="d-flex flex-column">
                <Spacer spacing='[5, 0, 0, 0]' />
                <span className="text-[12px] text-[#186362]">FIND THE BEST TALENT WORLDWIDE</span>
                <span className="fs-1 fw-bolder">FIND THE BEST TALENT WORLDWIDE</span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>Find the best talent worldwide
                  For Employers
                  Search our freelancer listings for rated and reviewed experts in every skill imaginable — One discovery could change your business forever.
                </span>
                <Spacer spacing='[3, 0, 0, 0]' />
                <span>
                  Refine your search by skill, location or hourly rate. Contact freelancers and request a proposal for your project.
                  register for free
                  post a job
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <div className="d-flex align-items-center justify-content-start">
                  <a href="signup" className="d-flex">
                    <span className="py-2 px-3 text-[#ffffff] me-3 bg-[#186362] border-[#186362] border-[3px] fw-bold rounded-2 text-white-600 d-flex align-items-center justify-content-center hover:bg-inherit hover:text-[#186362] hover:border-[#186362]">
                      REGISTER FOR FREE
                    </span>
                  </a>
                  <Spacer spacing='[5, 0, 0, 0]' />
                  <a href="/signup" className="d-flex">
                    <span className="py-2 px-3 bg-inherit border-[#186362] border-[3px] fw-bold rounded-2 text-[#186362] d-flex align-items-center justify-content-center hover:bg-[#186362] hover:text-white hover:border-[#186362]">
                      <BiBriefcase className="me-2" color="#186362" />
                      POST A JOB
                    </span>
                  </a>
                </div>
                <Spacer spacing='[5, 0, 0, 0]' />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 m-0 p-0">
          <div className="d-flex m-0 p-0 flex-column w-[100%] min-h-[100%] align-items-start justify-content-center">
            <div className="w-[100%] py-[70px] px-4 bg-[#73CCB1] h-[60%] rounded-tl-[50px] rounded-bl-[50px]">
              <div className="row m-0 p-0 min-h-[100%]">
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-4 py-4 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <BiBriefcase className="text-[#3A727F] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#3A727F] my-3">Post Jobs<br /> For Free</span>
                    <span className="text-[12px]">
                      We have a huge database. Find the best talent for your full-time, part-time, contract, internship, or freelance jobs in any location.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-4 py-4 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <GiPapers className="text-[#3A727F] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#3A727F] my-3">Browse our Directories</span>
                    <span className="text-[12px]">
                      We have a huge database. Find the best talent for your full-time, part-time, contract, internship, or freelance jobs in any location.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-4 py-4 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <BiLaptop className="text-[#3A727F] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#3A727F] my-3">Discover APIs & CAT tools</span>
                    <span className="text-[12px]">
                      Whether you are developing a CAT tool, or a language-related application - integrating ProZ.com's API will help you power and enhance it.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-4 py-4 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <BiBookAlt className="text-[#3A727F] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#3A727F] my-3">Easy & Fast management</span>
                    <span className="text-[12px]">
                      Project streams bring together everything needed to produce great work: messages, attachments, feedback, payment and a lot more — all in one place.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 mb-5">
          <div className="d-flex flex-column w-[100%] min-h-[100%] align-items-start justify-content-center mb-5">
            <Spacer spacing='[5, 0, 0, 0]' />
            <span className="fs-6 text-green-200">WHAT MAKES PROZ.COM UNIQUE</span>
            <span className="fs-1 text-black fw-bolder">Membership Model</span>
            <Spacer spacing='[5, 0, 0, 0]' />
            <div className="d-flex align-items-start justify-content-between h-full w-100">
              <MembershipModel
                identifier='[true, 1, "bg-[#254856] p-4 rounded-3 h-[100px] w-[100px] mt-[-60px] ml-[-70px] relative text-white fs-1 fw-bolder d-flex align-items-center justify-content-center"]'
                details='[true, ["Enhanced Tools and Services", "Membership buys enhanced tools and services, specifically created to improve business and kickstart careers", "All of the services on ProZ.com offer access to more benefits for paying members. For example, priority placement in the directories or unrestricted access to the risk management information available in full Blue Board records."], "h-full shadow rounded-3 bg-white p-4 mx-[60px]"]' />
              <MembershipModel
                identifier='[true, 2, "bg-[#254856] p-4 rounded-3 h-[100px] w-[100px] mt-[-60px] ml-[-70px] relative text-white fs-1 fw-bolder d-flex align-items-center justify-content-center"]'
                details='[true, ["Commission-free Access", "Membership allows for direct, commission-free access to translators and translation companies", "ProZ.coms unique membership model means that when outsourcers and service providers connect via ProZ.com, neither side is charged any commissions or fees. Meet a client or provider, and the relationship is yours, unencumbered, forever."], "h-full shadow rounded-3 bg-white p-4 mx-[60px]"]' />
              <MembershipModel
                identifier='[true, 3, "bg-[#254856] p-4 rounded-3 h-[100px] w-[100px] mt-[-60px] ml-[-70px] relative text-white fs-1 fw-bolder d-flex align-items-center justify-content-center"]'
                details='[true, ["Trust and Growth", "Everyone benefits, resulting in continued trust and growth for the community within the language industry", "The benefits passed to both members and translation buyers continue to play a direct role in the ongoing success of ProZ.com as the largest, most trusted online community where language professionals can freely form transparent and open working relationships."], "h-full shadow rounded-3 bg-white p-4 mx-[60px]"]' />
            </div>
            <Spacer spacing='[5, 0, 0, 0]' />
            <Spacer spacing='[5, 0, 0, 0]' />
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row bg-[#FFEDD9]">
        <div className="col-md-6 m-0 p-0">
          <div className="d-flex m-0 p-0 flex-column w-[100%] min-h-[100%] align-items-start justify-content-center">
            <div className="w-[100%] py-[70px] px-4 bg-[#FFE7CC] h-[80%] rounded-tr-[50px] rounded-br-[50px]">
              <div className="row m-0 p-0 min-h-[100%]">
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-3 py-5 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <BiBriefcase className="text-[#E7A354] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#E7A354] my-4">Easy & Fast management</span>
                    <span className="text-[12px]">
                      Project streams bring together everything needed to produce great work: messages, attachments, feedback, payment and a lot more — all in one place.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-3 py-5 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <GiGraduateCap className="text-[#E7A354] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#E7A354] my-4">Professional development</span>
                    <span className="text-[12px]">
                      We help you to improve your abilities. Find specialized Training, Workshops, Conferences, Courses and resources to development your career.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-3 py-5 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <GiPresent className="text-[#E7A354] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#E7A354] my-4">Certified PRO<br /> Network</span>
                    <span className="text-[12px]">
                      Open discussion on topics related to translation, interpreting and localization. Forums, Blogs, Events, Contests
                    </span>
                  </div>
                </div>
                <div className="col-md-3 h-100 my-auto">
                  <div className="min-h-[100%] px-3 py-5 d-flex flex-column align-items-center justify-content-start bg-white rounded-4">
                    <GiChatBubble className="text-[#E7A354] fs-3" />
                    <span className="fw-bolder w-full text-center text-[#E7A354] my-4">Easy & Fast management</span>
                    <span className="text-[12px]">
                      It will provide a powerful new means for top professionals to distinguish themselves as such. Build your professional profile and find connections.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex flex-column">
                <Spacer spacing='[5, 0, 0, 0]' />
                <span className="fs-6 text-[#E7A354]">FIND THE BEST TALENT WORLDWIDE</span>
                <span className="fs-2 fw-bolder">FIND THE BEST TALENT WORLDWIDE</span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>
                  Find the best talent worldwide For Employers Search our freelancer listings for rated and reviewed experts in every skill imaginable — One discovery could change your business forever.
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <span>
                  Refine your search by skill, location or hourly rate. Contact freelancers and request a proposal for your project. Register for free post a job
                </span>
                <Spacer spacing='[5, 0, 0, 0]' />
                <div className="d-flex align-items-center justify-content-start">
                  <Button className="me-3 py-2 bg-[#E7A354] border-[#E7A354] border-[3px] fw-bold rounded-2 text-white-600 d-flex align-items-center justify-content-center hover:bg-white hover:text-[#E7A354] hover:border-[#E7A354]">
                    REGISTER FOR FREE
                  </Button>
                  <Spacer spacing='[5, 0, 0, 0]' />
                  <Button className="py-2 bg-inherit border-[#E7A354] border-[3px] fw-bold rounded-2 text-[#E7A354] d-flex align-items-center justify-content-center hover:bg-white hover:text-[#E7A354] hover:border-[#E7A354]">
                    <GiBullseye className="me-2" />
                    FIND WORK
                  </Button>
                </div>
                <Spacer spacing='[5, 0, 0, 0]' />
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 py-5">
          <div className="row">
            <div className="col-md-3">
              <img src="/images/white_mobile.png" alt="Proz App" />
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-column justify-content-center h-full">
                <span className="fs-6 text-[#B9E6D8]">FOR YOUR APPS & WEBSITES</span>
                <span className="fs-1 text-black fw-bolder">Plug-and-play integrations</span>
                <div className="items-center justify-start d-flex flex-wrap">
                  <Integrations main_style="inline-table w-[150px] h-[150px] p-3" card_style="d-flex h-[150px] shadow p-3 rounded-4" icon_path="/images/logos/tm-town.jpg" app_name="TM Town" />
                  <Integrations main_style="inline-table w-[150px] h-[150px] p-3" card_style="d-flex h-[150px] shadow p-3 rounded-4" icon_path="/images/logos/google.png" app_name="TM Town" />
                  <Integrations main_style="inline-table w-[150px] h-[150px] p-3" card_style="d-flex h-[150px] shadow p-3 rounded-4" icon_path="/images/logos/tm-town.jpg" app_name="TM Town" />
                  <Integrations main_style="inline-table w-[150px] h-[150px] p-3" card_style="d-flex h-[150px] shadow p-3 rounded-4" icon_path="/images/logos/tm-town.jpg" app_name="TM Town" />
                  <Integrations main_style="inline-table w-[150px] h-[150px] p-3" card_style="d-flex h-[150px] shadow p-3 rounded-4 bg-[#A1DDCB] border-[#3A727F] border-1 text-[#3A727F]" icon_path="/images/icons/plus_square.png" app_name="See More" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row bg-[#ECF5FA]">
        <Spacer spacing='[5, 0, 0, 0]' />
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-7">
              <div className="row h-full">
                <AddressCards main_style="col-md-4 h-full" card_style="bg-[#ECF5FA] shadow-lg rounded-2 h-full" office_location="ProZ.com Headquaters" office_phone="+1-315-463-7323" office_address="235 Harrison Street Suite 202 Syracuse, NY 13202. USA" />
                <AddressCards main_style="col-md-4 h-full" card_style="bg-[#ECF5FA] shadow-lg rounded-2 h-full" office_location="ProZ.com Argentina" office_phone="+54-221-425-1266" office_address="Calle 14 nro. 622 1/2 entre 44 y 45 La Plata (B1900AND), Buenos Aires Argentina" />
                <AddressCards main_style="col-md-4 h-full" card_style="bg-[#ECF5FA] shadow-lg rounded-2 h-full" office_location="ProZ.com Ukraine" office_phone="+380 57 7281624" office_address="6 Karazina St. Kharkiv, 61002. Ukraine" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column">
                <span className="text-md fw-bolder">Newsletter</span>
                <span className="text-sm my-2">Be ther first to know about discounts, offers and events. Unsubscribe whenever you like.</span>
                <div className="d-flex align-items-center justify-content-start bg-white rounded-full p-2">
                  <FiMail className="ms-3" />
                  <input type="text" className="flex-fill mx-3 focus:outline-none" placeholder="Enter your email" />
                  <Button className="text-xs bg-[#3A727F] border-[#3A727F] border-[3px] fw-bold rounded-full d-flex align-items-center justify-content-center hover:bg-white hover:text-[#3A727F] hover:border-[#3A727F]">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <Spacer spacing='[5, 0, 0, 0]' />
      </div>
    </div >
  )
}

export default LandingPage
