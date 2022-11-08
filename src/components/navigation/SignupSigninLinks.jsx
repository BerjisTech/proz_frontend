import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'
import Notifications from '../Notifications'
import { LocalizationDropdown } from './LocalizationSelect'
import { UserAccountNavigationDropdown } from './UserAccountNavigation'
import MessageIcon from './MessageIcon'

const SignupSigninLinks = () => {

    return (
        <div>
            {
                window.location.href.includes('?new_user')
                    ? <span className="d-flex">
                        <a className="bg-[#ffffff] shadow-md rounded-3 mx-2 p-2 fs-5 d-flex align-items-center justify-content-center hover:shadow-green-900 hover:shadow-inner" href="/signin">
                            <BiLogIn className="me-2" />
                            Log In
                        </a>
                        <a className="shadow rounded-3 bg-[#186362] text-[#ffffff] mx-2 p-2 fs-5 d-flex align-items-center justify-content-center hover:text-[#186362] hover:bg-[#ffffff]" href="/signup">
                            <FiKey className="me-2" />
                            Get Started
                        </a>
                    </span>
                    : <span className="d-flex align-items-center justify-content-between gap-2">
                        <LocalizationDropdown />
                        <MessageIcon />
                        <Notifications />
                        <UserAccountNavigationDropdown />
                    </span>
            }
        </div>
    )
}

export default SignupSigninLinks
