import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'

const SignupSigninLinks = () => {
    let selectOtherLanguage = document.getElementsByClassName('selectOtherLanguage')[0]
    if (selectOtherLanguage) {
        selectOtherLanguage.addEventListener('click', (e) => {
            e.preventDefault()
            let localizationSelect = document.getElementsByClassName('localizationSelect')[0]
            localizationSelect.classList.toggle('d-none')
        })
    }
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
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/ke.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">Kiswahili (Sanifu)</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/tz.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">Kiswahili (Mufti)</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/gb.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">English (Standard)</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/us.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">English (Simplified)</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/ru.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">Русский</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/cn.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">Chinese (Standard)</span>
                                    </a></li>
                                    <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                        <img src="/images/flags/tw.svg" alt="flag" className="me-2 h-[10px]" />
                                        <span className="text-[12px]">Chinese (Simplified)</span>
                                    </a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item text-[14px] selectOtherLanguage cursor-pointer">Pick another alnguage</span></li>
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
