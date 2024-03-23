import React from 'react'
import './Footer.css'

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
          <h3>Locations</h3>
          <ul>
            <li>Zuarungu</li>
            <li>Estate</li>
            <li>Yekeni</li>
            <li>Zaare</li>
            <li>Soe</li>
            
          </ul>
      </div>
      <div className='footer-box'>
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>SignUp</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='footer-box'>
        <h3>Get in Touch</h3> 
        <textarea>
          
        </textarea>
      </div>
      <div className='bottom-box'>
        <p>© {updateYear()} kalam Savana laundry</p>
      </div>
      </div>
      <hr />
      
    </div>
  )
}
