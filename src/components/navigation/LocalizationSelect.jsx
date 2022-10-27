import React from 'react'
import { setLocale } from '../Helpers'

export function LocalizationSelectButton({ locale, locale_name, locale_flag }) {
    return (
        <span className='setNewLocale' data-bs-dismiss="modal">
            <a className="dropdown-item d-flex align-items-center justify-content-start" href="/" onClick={(e) => {
                e.preventDefault()
                setLocale(locale)
            }}>
                <img src={`/images/flags/${locale_flag}.svg`} alt="flag" className="me-2 h-[10px]" />
                <span className="text-[12px]">{locale_name}</span>
            </a>
        </span>
    )
}

export function LocalizationDropdown() {
    return (
        <ul>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle bg-inherit mx-2 text-green-400 d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="ms-2">En</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
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
    )
}

const LocalizationSelect = () => {

    return (
        <div className="fixed rounded-[0px] w-screen h-screen top-0 border-none modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog d-flex align-items-start justify-content-start absolute top-0 m-0 rounded-[0px] border-none">
                <div className="modal-content w-[auto] rounded-[0px] bg-white shadow h-screen border-none">
                    <ul className="rounded-[0px] modal-body border-none">
                        <li>
                            <LocalizationSelectButton locale="sw" locale_name="Kiswahili (Sanifu)" locale_flag="ke" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="sw" locale_name="Kiswahili (Mufti)" locale_flag="tz" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="pt" locale_name="Portugese" locale_flag="pt" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="fr" locale_name="French" locale_flag="fr" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="ru" locale_name="Russian" locale_flag="ru" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="ua" locale_name="Ukranian" locale_flag="ua" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="cn" locale_name="Mandarin" locale_flag="cn" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="cn" locale_name="Cantonese" locale_flag="cn" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="tw" locale_name="Taiwanese" locale_flag="tw" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="jp" locale_name="Japanese" locale_flag="jp" />
                        </li>
                        <li>
                            <LocalizationSelectButton locale="kr" locale_name="Korean" locale_flag="kr" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocalizationSelect
