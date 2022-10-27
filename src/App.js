//  RAFCE
import React from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar, UserFacingTopNavigation, LandingPageNav } from './components'
import LocalizationSelect from './components/navigation/LocalizationSelect'
// Import pages
import { Dashboard, LandingPage } from './pages'

const LandingPagesLayout = () => {
    return (
        <div>
            {window.location.pathname === '/' ? <LandingPageNav /> : <UserFacingTopNavigation />}
            <Main>
                <LandingPage />
            </Main>
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
                    <section className="flex-fill m-0 p-0 overflow-auto">
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
