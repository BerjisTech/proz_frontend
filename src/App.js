//  RAFCE
import React, { useEffect } from 'react'
//  Routes
import { BrowserRouter } from 'react-router-dom'

import './App.css'

// Import components
import { Footer, Header, Main, Navbar } from './components'
// Import pages
import { Dashboard } from './pages'

const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter >
    )
}

export default App
