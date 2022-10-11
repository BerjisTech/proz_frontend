import React from 'react'
import { Routes, Route } from "react-router";
import {
    LandingPage,
    Applications,
    Courses,
    Dashboard,
    FindWork,
    Kudoz,
    Messages,
    Search,
    Settings,
    Billing
} from "../pages";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/applications/*" element={<Applications />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/findwork/*" element={<FindWork />} />
            <Route path="/kudoz/*" element={<Kudoz />} />
            <Route path="/messages/*" element={<Messages />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/billing/*" element={<Billing />} />
        </Routes>
    )
}

export default Main
