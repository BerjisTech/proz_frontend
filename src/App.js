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
        <div className="row p-0 m-0">
            <div className="col-md-2 p-0 m-0">
                <Navbar />
            </div>
            <div className="col-md-10 p-0 m-0">
                <div className="flex-fill d-flex flex-column h-screen">
                    <Header />
                    <section className="flex-fill p-5 overflow-auto">
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
