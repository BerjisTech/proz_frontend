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
            <Route path="/dashboard/applications/*" element={<Applications />} />
            <Route path="/dashboard/courses/*" element={<Courses />} />
            <Route path="/dashboard/findwork/*" element={<FindWork />} />
            <Route path="/dashboard/kudoz/*" element={<Kudoz />} />
            <Route path="/dashboard/messages/*" element={<Messages />} />
            <Route path="/dashboard/search/*" element={<Search />} />
            <Route path="/dashboard/settings/*" element={<Settings />} />
            <Route path="/dashboard/billing/*" element={<Billing />} />
        </Routes>
    )
}

export default Main
