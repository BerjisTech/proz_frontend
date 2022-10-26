import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'
import { LocalizationDropdown } from './LocalizationSelect'

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
                    : <span className="d-flex">
                        <LocalizationDropdown />

                        <a className="text-green-800 bg-white shadow rounded-full mx-2 p-2 fs-5 d-flex align-items-center justify-content-center" href="/dashboard/*">
                            <FiKey className='me-2' /> Account
                        </a>
                    </span>
            }
        </div>
    )
}

export default SignupSigninLinks
