import React from 'react'
import { Routes, Route } from "react-router";
import {
    Applications,
    Courses,
    Dashboard,
    FindWork,
    Kudoz,
    Messages,
    Search,
    Settings,
} from "../pages";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/applications/*" element={<Applications />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/findwork/*" element={<FindWork />} />
            <Route path="/kudoz/*" element={<Kudoz />} />
            <Route path="/messages/*" element={<Messages />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/settings/*" element={<Settings />} />
        </Routes>
    )
}

export default Main
