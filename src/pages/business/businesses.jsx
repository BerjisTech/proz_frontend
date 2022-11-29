import React from 'react'
import { BusinessList } from '../../components'
import { Breadcrumb } from 'react-bootstrap'

const businesses = () => {
  localStorage.setItem('active_sidebar', 'businesses')
  return (
    <div>
      <Breadcrumb
        listProps={{
          className: 'bg-white'
        }}
      >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="//businesses">
          Businesses
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <BusinessList />
    </div>
  )
}

export default businesses
