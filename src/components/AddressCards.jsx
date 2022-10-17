import React from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi'

const AddressCards = ({ main_style, card_style, office_location, office_phone, office_address }) => {
    return (
        <div className={main_style}>
            <div className={card_style}>
                <div className="d-flex flex-column align-items-start justify-content-start p-2 h-full">
                    <span className="fw-bold mb-3">{office_location}</span>
                    <table>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    <FiPhone className="text-[16x] mx-2" />
                                </td>
                                <td className="align-middle">
                                    <span className="text-[12px]">
                                        {office_phone}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <FiMapPin className="text-[16x] mx-2" />
                                </td>
                                <td className="align-middle">
                                    <span className="text-[12px]">
                                        {office_address}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default AddressCards
