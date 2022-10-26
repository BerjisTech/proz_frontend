import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'
import { LocalizationSelectButton } from './LocalizationSelect'

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
                        <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle bg-white shadow rounded-full mx-2 p-2 fs-5 text-green-400 d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="ms-2">En</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <LocalizationSelectButton locale="sw" locale_name="Kiswahili (Sanifu)" locale_flag="ke" />
                                    </li>
                                    <li>
                                        <LocalizationSelectButton locale="sw" locale_name="Kiswahili (Mufti)" locale_flag="tz" />
                                    </li>
                                    <li>
                                        <LocalizationSelectButton locale="en-gb" locale_name="English (UK)" locale_flag="gb" />
                                    </li>
                                    <li>
                                        <LocalizationSelectButton locale="en-us" locale_name="Kiswahili (US)" locale_flag="us" />
                                    </li>
                                    <li>
                                        <LocalizationSelectButton locale="sw" locale_name="Kiswahili (Sanifu)" locale_flag="ke" />
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item text-[14px] selectOtherLanguage cursor-pointer" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Pick another alnguage</span></li>
                                </ul>
                            </li>
                        </ul>

                        <a className="text-green-800 bg-white shadow rounded-full mx-2 p-2 fs-5 d-flex align-items-center justify-content-center" href="/dashboard/*">
                            <FiKey className='me-2' /> Account
                        </a>
                    </span>
            }
        </div>
    )
}

export default SignupSigninLinks
