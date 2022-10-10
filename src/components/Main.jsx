import React from 'react'
import { Routes, Route } from "react-router";
import { Dashboard } from "../pages";

const Main = () => {
    return (
        <main className="app__main flex">
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </main>
    )
}

export default Main
