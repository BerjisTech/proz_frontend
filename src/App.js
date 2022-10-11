//  RAFCE
import React from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar } from './components'
// Import pages
import { Dashboard, LandingPage } from './pages'

const LandingPagesLayout = () => {
    return (<BrowserRouter>
        <Main>
            <LandingPage />
        </Main>
    </BrowserRouter >)
}

const DashboardLayout = () => {
    return (<BrowserRouter>
        <div className="row">
            <div className="col-md-3">
                <Navbar />
            </div>
            <div className="col-md-9">
                <div className="d-flex-grow d-flex flex-column h-screen">
                    <Header />
                    <section className="d-flex-grow p-5 overflow-auto">
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
    let location = window.location.href.split('/')

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
