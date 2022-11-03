import React from 'react'

const ClearStrikeThrough = ({ striked_text, font_size, text_color }) => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <span className="border-1 border-[#336667] mx-4 flex-fill"></span>
            <span className={`text-[${text_color}] text-[${font_size}]`}>{striked_text}</span>
            <span className="border-1 border-[#336667] mx-4 flex-fill"></span>
        </div>
    )
}

export default ClearStrikeThrough
