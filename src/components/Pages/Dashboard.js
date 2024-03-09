import React from 'react'
import pic from '../images/pic.jpg'

export const Dashboard = (props) => {
  return (
    <div>
        <h1>Hello {props.userData.given_name}</h1>
        <div>
          <img src={props.userData.picture ? props.userData.picture : pic } alt='user image' /> 
        </div>
    </div>
  )
}
