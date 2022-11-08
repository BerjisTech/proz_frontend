import React from 'react'

const ServicesCards = ({ card_column, card_extra_style, title, icon, description, link }) => {
    return (
        <div className={`${card_column} ${card_extra_style}`}>
            <div className="p-2" onClick={(e) => { window.location.href = link }}>
                <div className="cursor-pointer shadow rounded-2 p-3 bg-white">
                    <div className="row">
                        <div className="col-lg-3 text-center px-2">
                            {icon}
                        </div>
                        <div className="col-lg-9">
                            <h5 className="fw-bold fs-4">{title}</h5>
                            <p className="mt-3">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards
