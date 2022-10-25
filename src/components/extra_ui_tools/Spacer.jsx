import React from 'react'

const Spacer = ({spacing}) => {
  return (
    <div className={`mt-${JSON.parse(spacing)[0]} ms-${JSON.parse(spacing)[1]} me-${JSON.parse(spacing)[2]} mb-${JSON.parse(spacing)[3]}`}></div>
  )
}

export default Spacer
