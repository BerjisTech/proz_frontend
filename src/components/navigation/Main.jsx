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
    Business,
    BlueboardList,
    UserProfile,
    Hire,
    Jobs,
    FreelancerProfile,
    BusinessProfile,
    Events
} from "../../pages";

const Main = () => {
    return (
        <Routes>
            {/* User facing pages links */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/applications/*" element={<Applications />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/find-work/*" element={<FindWork />} />
            <Route path="/find_work/*" element={<FindWork />} />
            <Route path="/findwork/*" element={<FindWork />} />
            <Route path="/kudoz/*" element={<Kudoz />} />
            <Route path="/messages/*" element={<Messages />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/billing/*" element={<Billing />} />
            <Route path="/businesses/*" element={<Businesses />} />
            <Route path="/business/:business_id" element={<Business />} />
            <Route path="/blueboards" element={<BlueboardList />} />
            <Route path="/profile/:profile_id" element={<UserProfile/>} />
            <Route path="/hire/:translator_type" element={<Hire />} />
            <Route path="/freelancer/:freelancer_id" element={<FreelancerProfile />} />
            <Route path="/business/:business_id" element={<BusinessProfile />} />
            <Route path="/jobs/*" element={<Jobs />} />
            <Route path="/courses/*" element={<Courses />} />
            {/* Dashboard links */}
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
            <Route path="/dashboard/business/:business_id" element={<Business />} />
        </Routes>
    )
}

export default Main
