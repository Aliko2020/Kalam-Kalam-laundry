import React from 'react'
import googleimg from '../images/icons8-google-48.png'
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'



export const Login = (props) => {

    const container = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem',
        
    }
    const handleClick =(event)=>{
        setUserInput(event.target.value)
        
    }
    const handSubmit = (event)=>{
        event.preventDefault();
        event.target.value = ""
    }
     
  return (
    <div >
        <form style={{}}>
        <div className={container}>
            <h1 style={{margin: '2rem 0'}}
            >Log in</h1>
            <div style={{
                display: "flex",
                justifyContent: 'center',
                margin: '1rem 0',
                }}>
                <p style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems : 'center',
                        gap: '5px',
                        width: '350px',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '.1rem'
                        
                    }
                }><img src={googleimg} alt='google' /> Google</p>
            </div>
            <p>OR</p>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0.5rem 0 1rem 0',
                padding: '1rem',
                width: '360px',
                margin: 'auto'
            }}>
                <input 
                    style={{
                        padding: '1.2rem',
                        borderRadius: '5px',
                    }}
                    type='text' 
                    placeholder='Email or username'
                    onChange={handleClick} 

                />
                <input 
                    style={{
                        padding: '1.2rem',
                        borderRadius: '5px',
                        margin: '1.5rem 0'
                    }}
                    type='password' 
                    placeholder='Password'
                    onChange={handleClick}  
                    
                />
                <button
                    style={{
                        padding: '1.2rem',
                        borderRadius: '5px',
                        margin: '1rem 0',
                        background: '#ff3831',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem'
                    }}
                    onClick={handSubmit}
                >login</button>
            </div>
            <p>Dont have an account? Sign up</p>
        </div>
    </form>
    
    </div>
  )
}
