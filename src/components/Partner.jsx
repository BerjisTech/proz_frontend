import React from 'react'

const Partner = ({ showtext }) => {
    return (
        <div className="d-flex align-items-center justify-content-between w-[100%]">
            {showtext === true ? <p className="m-0 me-1 fw-bolder">They trust us...</p> : "Nope"}
            <img className="d-block mx-3 h-[30px]" src="/images/logos/google.png" alt="slide 1" />
            <img className="d-block mx-3 h-[30px]" src="/images/logos/nikon.png" alt="slide 1" />
            <img className="d-block mx-3 h-[30px]" src="/images/logos/netflix.png" alt="slide 1" />
            <img className="d-block mx-3 h-[30px]" src="/images/logos/target.png" alt="slide 1" />
            <img className="d-block mx-3 h-[30px]" src="/images/logos/microsoft.png" alt="slide 1" />
        </div >
    )
}

export default Partner
