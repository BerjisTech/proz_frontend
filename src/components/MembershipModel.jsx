import React from 'react'

const MembershipModel = ({ identifier, details }) => {
  console.log(details)
  let id = JSON.parse(identifier)
  let det = JSON.parse(details)
  return (
    <div className="h-[100%]">
      <div className={`h-[100%] ${det[2] ? det[2] : ''}`}>
        {id[0] === true ? <div className={`${id[2] ? id[2] : ''}`}>{id[1]}</div> : null}
        {det[0] === true ? <div className="d-flex h-[100%] flex-column align-items-start justify-content-start">
          <span className="text-[16px] fw-bolder w-full text-center">{det[1][0]}</span>
          <span className="text-[12px] fw-semibold my-4 text-gray-400">{det[1][1]}</span>
          <span className="text-[12px] fw-semibold">{det[1][2]}</span>
        </div> : null}
      </div>
    </div>
  )
}

export default MembershipModel
