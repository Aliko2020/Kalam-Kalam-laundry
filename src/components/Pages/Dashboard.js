import React from 'react'

export const Dashboard = (props) => {
  return (
    <div>
        <h1>Hello {props.userData.given_name}</h1>
    </div>
  )
}
