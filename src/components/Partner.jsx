import React from 'react'

const Partner = ({ showtext }) => {
    return (
        <div className="d-flex">
            {showtext === true ? <p className="m-0 me-1">Partner with</p> : "Nope"}
            <img className="d-block img img-responsive rounded-3 mx-1" width="50" height="50" src="https://picsum.photos/500/300?random=1" alt="slide 1" />
            <img className="d-block img img-responsive rounded-3 mx-1" width="50" height="50" src="https://picsum.photos/500/300?random=2" alt="slide 2" />
            <img className="d-block img img-responsive rounded-3 mx-1" width="50" height="50" src="https://picsum.photos/500/300?random=3" alt="slide 3" />
        </div >
    )
}

export default Partner
