import { Button } from 'react-bootstrap'
import React from 'react'
import "react-icons/fi"
import AddressCards from '../AddressCards'
import Spacer from '../extra_ui_tools/Spacer'

export const UserFacingFooter = () => {
    return (
        <div>
            <div className="row bg-[#DFEDEB]">
                <Spacer spacing='[5, 0, 0, 0]' />
                <div className="col-md-4">
                    <div className='row'>
                        <div className="col-md-6">
                            <span className='nav-items'>
                                <a href="/#/jobs-and-directory" className="nav-item nav-link text-primary text-[14px] font-bold">Jobs & Directory</a>
                                <a href="/#/member-activities" className="nav-item nav-link text-primary text-[14px] font-bold">Member Activities</a>
                                <a href="/#/education" className="nav-item nav-link text-primary text-[14px] font-bold">Education</a>
                                <a href="/#/tools" className="nav-item nav-link text-primary text-[14px] font-bold">Tools</a>
                                <a href="/#/basics" className="nav-item nav-link text-primary text-[14px] font-bold">ProZ basics</a>
                            </span>
                        </div>
                        <div className="col-md-6">
                            <span className='nav-items'>
                                <a href="about-us" className="nav-item nav-link text-primary text-[14px] font-bold">About Us</a>
                                <a href="/#/advertising" className="nav-item nav-link text-primary text-[14px] font-bold">Advertising</a>
                                <a href="/#/support" className="nav-item nav-link text-primary text-[14px] font-bold">Support</a>
                                <a href="/#/faq" className="nav-item nav-link text-primary text-[14px] font-bold">FAQ</a>
                                <a href="/#/terms-of-use" className="nav-item nav-link text-primary text-[14px] font-bold">Terms Of Use</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row h-full">
                                <AddressCards main_style="col-md-4 h-full" card_style="h-full" office_location="ProZ.com Headquaters" office_phone="+1-315-463-7323" office_address="235 Harrison Street Suite 202 Syracuse, NY 13202. USA" />
                                <AddressCards main_style="col-md-4 h-full" card_style="h-full" office_location="ProZ.com Argentina" office_phone="+54-221-425-1266" office_address="Calle 14 nro. 622 1/2 entre 44 y 45 La Plata (B1900AND), Buenos Aires Argentina" />
                                <AddressCards main_style="col-md-4 h-full" card_style="h-full" office_location="ProZ.com Ukraine" office_phone="+380 57 7281624" office_address="6 Karazina St. Kharkiv, 61002. Ukraine" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <span className="text-md fw-bolder">Newsletter</span>
                                <span className="text-sm my-2">Be ther first to know about discounts, offers and events. Unsubscribe whenever you like.</span>
                                <div className="d-flex align-items-center justify-content-start bg-white rounded-full p-2">
                                    <input type="text" className="flex-fill mx-2 focus:outline-none" placeholder="Enter your email" />
                                    <Button className="text-xs bg-[#3A727F] border-[#3A727F] border-[3px] fw-bold rounded-full d-flex align-items-center justify-content-center hover:bg-white hover:text-[#3A727F] hover:border-[#3A727F]">
                                        SUBSCRIBE
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer spacing='[5, 0, 0, 0]' />
            </div>
            <Copyright />
        </div >
    )
}

export const Copyright = () => {
    return (
        <div className="bg-[#254856] text-[10px] w-full py-3 d-flex align-items-center justify-content-center">
            <span className="text-white px-2">&copy; 1999 - {new Date().getFullYear()}, All Rights Reserved. Designed By OpusCreation</span>
            <span className="text-[#A1DDCB] px-2">
                <a href="/#/privacy-policy">Privacy Policy</a>
            </span>
            <span className="text-[#A1DDCB] px-2">
                <a href="/#/terms-of-use">Terms Of Use</a>
            </span>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="text-end fs-6 text-gray p-2 position-fixed bottom-0 end-0">
            Copyright &copy; {new Date().getFullYear()} Proz.com
        </div>
    )
}

export default Footer
