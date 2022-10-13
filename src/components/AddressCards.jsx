import React from 'react'
import { BiMapPin } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'

const AddressCards = ({ column, background, shadow, border_radius, office_location, office_phone, office_address }) => {
    return (
        <div className={`col-sm-${column} h-100`}>
            <div className={`bg-${background} shadow-${shadow} rounded-${border_radius}`}>
                <div className="d-flex flex-column align-items-start justify-content-center p-2">
                    <span className="text-lg fw-bold mb-3">{office_location}</span>
                    <span className="text-[10px] text-wrap d-flex flex-row align-items-center justify-content-center">
                        <FiPhone />
                        {office_phone}
                    </span>
                    <span className="text-[10px] whitespace-pre-wrap d-flex flex-row align-items-center justify-content-center">
                        <BiMapPin />
                        {office_address}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AddressCards
