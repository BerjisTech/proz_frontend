//  RAFCE
import React from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar, UserFacingTopNavigation, LandingPageNav, LeftSideBars } from './components'
import { UserFacingFooter } from './components/general_ui_components/Footer'
import LocalizationSelect from './components/navigation/LocalizationSelect'
// Import pages
import { Dashboard, LandingPage } from './pages'

const TwoSideBars = () => {
    return (
        <div className='row bg-gray-100'>
            <div className='col-sm-2 min-h-screen col-xs-none border-end-1'>
                <LeftSideBars />
            </div>
            <div className='col-sm-8 m-0 p-0'>
                <Main className='m-0 p-0'>
                    <LandingPage />
                </Main>
            </div>
            <div className='col-sm-2 min-h-screen col-xs-none border-start-1'></div>
        </div>
    )
}

const LeftSideBarPages = () => {
    return (
        <div className='row bg-gray-100'>
            <div className='col-sm-2 min-h-screen col-xs-none border-end-1'>
                <LeftSideBars />
            </div>
            <div className='col-sm-10 m-0 p-0'>
                <Main className='m-0 p-0'>
                    <Dashboard />
                </Main>
            </div>
        </div>
    )
}

const RightSideBarPages = () => {
    return (
        <div className='row bg-gray-100'>
            <div className='col-sm-10 m-0 p-0'>
                <Main className='m-0 p-0'>
                    <Dashboard />
                </Main>
            </div>
            <div className='col-sm-2 min-h-screen col-xs-none border-start-1'></div>
        </div>
    )
}


const LandingPagesLayout = () => {
    const page_selectors = {
        'landing-page': <LandingPage />,
        'two-side-bars': <TwoSideBars />,
        'left-side-bar': <LeftSideBarPages />,
        'right-side-bar': <RightSideBarPages />
    }

    const right_side_bar_pages = ['/courses', '/about/', '/contact/']
    const left_side_bar_pages = ['/employer/', '/about/', '/contact/']
    const two_side_bar_pages = ['/profile/', '/freelancer/', '/about/', '/contact/']

    let location = window.location.href
    let page = 'landing-page'
    if (right_side_bar_pages.some(path_selector => location.indexOf(path_selector) !== -1)) {
        page = 'right-side-bar'
    } else if (left_side_bar_pages.some(path_selector => location.indexOf(path_selector) !== -1)) {
        page = 'left-side-bar'
    } else if (two_side_bar_pages.some(path_selector => location.indexOf(path_selector) !== -1)) {
        page = 'two-side-bars'
    }

    return (
        <div>
            {window.location.pathname === '/' ? <LandingPageNav /> : <UserFacingTopNavigation />}
            {page_selectors[page]}
            <UserFacingFooter />
        </div>
    )
}

const DashboardLayout = () => {
    return (
        <div className="d-flex align-items-start justify-content-start p-0 m-0">
            <div className="p-0 m-0">
                <Navbar />
            </div>
            <div className="flex-fill p-0 m-0">
                <div className="flex-fill d-flex flex-column h-screen">
                    <Header />
                    <section className="flex-fill m-0 p-0 overflow-auto bg-[#FAFAFA]">
                        <Main>
                            <Dashboard />
                        </Main>
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

const App = () => {
    let location = window.location.href
    return (<BrowserRouter>
        <LocalizationSelect />
        {location.includes('dashboard') ? <DashboardLayout /> : <LandingPagesLayout />}
    </BrowserRouter>)
}

export default App
