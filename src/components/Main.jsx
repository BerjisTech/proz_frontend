import React from 'react'
import { Routes, Route } from "react-router";
import {
    LandingPage,
    Signup,
    Applications,
    Courses,
    Dashboard,
    FindWork,
    Kudoz,
    Messages,
    Search,
    Settings,
    Billing,
    Businesses,
    Business
} from "../pages";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/dashboard/applications/*" element={<Applications />} />
            <Route path="/dashboard/courses/*" element={<Courses />} />
            <Route path="/dashboard/findwork/*" element={<FindWork />} />
            <Route path="/dashboard/kudoz/*" element={<Kudoz />} />
            <Route path="/dashboard/messages/*" element={<Messages />} />
            <Route path="/dashboard/search/*" element={<Search />} />
            <Route path="/dashboard/settings/*" element={<Settings />} />
            <Route path="/dashboard/billing/*" element={<Billing />} />
            <Route path="/dashboard/businesses/*" element={<Businesses />} />
            <Route path="/dashboard/business/*" element={<Business />} />
        </Routes>
    )
}

export default Main
