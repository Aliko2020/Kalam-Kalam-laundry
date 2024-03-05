import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export const Footer = () => {
const footerstyles = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  bottom: "1rem"
}


  return (
    <div style={footerstyles} className='footer-container'>
      <div>
        
        <div style={{display:"flex",gap:"5px", margin: ".7rem 0",justifyContent: "center", alignItems:"center"}}>
          {/* <div><MdOutlineMailOutline /></div> */}
          <div><p style={{color:"#ff3831"}}>suport.kalam@gmail.com</p></div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
