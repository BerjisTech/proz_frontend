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
        <div className="flex w-full h-screen flex-wrap content-center">
            <Navbar />
            <div className="flex-1 flex flex-col h-screen">
                <Header />
                <section className="flex-1 p-5 overflow-auto">
                    <Main>
                        <Dashboard />
                    </Main>
                </section>
                <Footer />
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
