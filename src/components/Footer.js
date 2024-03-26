import React from 'react'
import './Footer.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLinkSlash } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


export const Footer = () => {

  const updateYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
};
  return (
    <div className='footer-container'>
      <div className='top-box'>
      <div className='footer-box about'>
        <h3>About</h3>
        <div className='underline'></div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a typeface 
          without relying on meaningful content.
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a typeface 
          without relying on meaningful content
          Lorem ipsum may be used as a placeholder before the final copy is available.
        </p>
      </div>
      
      <div className='footer-box'>
          <h3><FaMapLocationDot /> Locations </h3>
          <div className='underline'></div>
          <ul>
            <li><FaLocationDot /> Zuarungu</li>
            <li><FaLocationDot /> Estate</li>
            <li><FaLocationDot /> Yekeni</li>
            <li><FaLocationDot /> Zaare</li>
            <li><FaLocationDot /> Soe</li>
            
          </ul>
      </div>
      <div className='footer-box'>
        <h3><FaLinkSlash /> Links</h3>
        <div className='underline'></div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>SignUp</li>
          <li>Blog</li>
        </ul>
      </div>
      
      
      </div>
      <hr />
      <div className='bottom-box'>
        <p>© {updateYear()} kalam Savana laundry</p>
      </div>
    </div>
  )
}
