import React from 'react'

const Partner = ({ showtext, partner_logo, card_style, logo_size, main_style }) => {
    return (
        <div className={main_style}>
            <div className={card_style}>
                <img src={partner_logo} alt="logo" className={`h-[${logo_size ? logo_size : '100%'}]`} />
            </div>
        </div>
    )
}

export default Partner
