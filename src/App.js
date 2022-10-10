//  RAFCE
import React, { useEffect } from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar } from './components'
// Import pages
import { Dashboard, Search } from './pages'

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex w-full h-screen flex-wrap content-center">
                <Navbar />
                <div className="flex-1 p-5">
                    <Header />
                    <Main>
                        <Dashboard />
                    </Main>
                    <Footer />
                </div>
            </div>
        </BrowserRouter >
    )
}

export default App
