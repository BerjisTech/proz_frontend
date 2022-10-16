import React from 'react'

const Partner = ({ showtext, partner_logo, card_style, logo_size, main_style }) => {
    return (
        <div className={main_style}>
            <div className={card_style}>
                <img src={partner_logo} alt="logo" style={{height: logo_size}} />
            </div>
        </div>
    )
}

export default Partner
