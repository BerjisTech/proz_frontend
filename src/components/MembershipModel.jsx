import React from 'react'

const MembershipModel = ({ identifier, details }) => {
  console.log(details)
  let id = JSON.parse(identifier)
  let det = JSON.parse(details)
  return (
    <div>
      <div className={`${det[2] ? det[2] : ''}`}>
        {id[0] === true ? <div className={`${id[2] ? id[2] : ''}`}>{id[1]}</div> : null}
        {det[0] === true ? <div className="col">{det[1].map((listOpts, l) => <li key={l}>{listOpts}</li>)}</div> : null}
      </div>
    </div>
  )
}

export default MembershipModel
