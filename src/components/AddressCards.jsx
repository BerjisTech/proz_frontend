import React from 'react'
import { BiMapPin } from 'react-icons/bi'
import { FiMapPin, FiPhone } from 'react-icons/fi'

const AddressCards = ({ column, background, shadow, border_radius, office_location, office_phone, office_address }) => {
    return (
        <div className={`col-sm-${column} h-100`}>
            <div className={`bg-${background} shadow-${shadow} rounded-${border_radius}`}>
                <div className="d-flex flex-column align-items-start justify-content-center p-2 h-full">
                    <span className="text-lg fw-bold mb-3">{office_location}</span>
                    <span className="text-wrap d-flex flex-row align-items-center justify-content-start">
                        <FiPhone className="text-[16x]" />
                        <span className="text-[12px]">
                            {office_phone}
                        </span>
                    </span>
                    <span className="whitespace-pre-wrap d-flex flex-row align-items-center justify-content-start">
                        <FiMapPin className="text-[16x] flex-fill" />
                        <span className="text-[12px]">
                            {office_address}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AddressCards
