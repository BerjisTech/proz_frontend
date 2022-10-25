//  RAFCE
import React from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar, UserFacingTopNavigation, LandingPageNav } from './components'
// Import pages
import { Dashboard, LandingPage } from './pages'

const LandingPagesLayout = () => {
    return (<BrowserRouter>
        {window.location.pathname === '/' ? <LandingPageNav /> : <UserFacingTopNavigation />}
        <Main>
            <LandingPage />
        </Main>
    </BrowserRouter >)
}

const DashboardLayout = () => {
    return (<BrowserRouter>
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
    </BrowserRouter >)
}

const App = () => {
    let location = window.location.href

    if (location.includes('dashboard')) {
        return (
            <DashboardLayout />
        )
    }

    return (
        <LandingPagesLayout />
    )

}

export default App
