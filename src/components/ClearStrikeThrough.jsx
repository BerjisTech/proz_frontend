import React from 'react'

const ClearStrikeThrough = ({ striked_text }) => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <span className="border-1 border-green-800 mx-4 flex-fill"></span>
            <span className="fs-4 text-gray-600">{striked_text}</span>
            <span className="border-1 border-green-800 mx-4 flex-fill"></span>
        </div>
    )
}

export default ClearStrikeThrough
