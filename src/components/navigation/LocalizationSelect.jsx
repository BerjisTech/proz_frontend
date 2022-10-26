import React from 'react'

const LocalizationSelect = () => {
    let hideLocalizationSelect = document.getElementsByClassName('hideLocalizationSelect')[0]

    if (hideLocalizationSelect) {
        hideLocalizationSelect.addEventListener('click', (e) => {
            let localizationSelect = document.getElementsByClassName('localizationSelect')[0]
            localizationSelect.classList.toggle('d-none')
        })
    }

    return (
        <div className="fixed w-screen h-screen bg-transparent top-0 z-[500] localizationSelect d-none">
            <div className="d-flex align-items-start justify-content-start">
                <div className="w-[200px] bg-white shadow h-screen">
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
                </div>
                <div className="flex-fill h-screen hideLocalizationSelect"></div>
            </div>
        </div>
    )
}

export default LocalizationSelect
