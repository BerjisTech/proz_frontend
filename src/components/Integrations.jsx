import React from 'react'

const Integrations = ({ main_style, icon_path, card_style, app_name }) => {
  return (
    <div className={main_style}>
      <div className={`${card_style} d-flex flex-column align-items-center justify-content-between`}>
        <div className="flex-fill align-items-center justify-content-center d-flex">
          <img src={icon_path} alt={app_name} />
        </div>
        <span className="fw-bold mt-3">{app_name}</span>
      </div>
    </div>
  )
}

export default Integrations
