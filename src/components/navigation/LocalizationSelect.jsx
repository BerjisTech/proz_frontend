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

const LocalizationSelect = () => {

    return (
        <div className="fixed rounded-[0px] w-screen h-screen top-0 border-none modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog d-flex align-items-start justify-content-start absolute top-0 m-0 rounded-[0px] border-none">
                <div className="modal-content w-[200px] rounded-[0px] bg-white shadow h-screen border-none">
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
