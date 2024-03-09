import React from 'react';
import { useEffect,useState } from 'react';
import { jwtDecode } from 'jwt-decode' 
import { Spinner } from './Spinner';
import { Dashboard } from './Dashboard';




export const Login = (props) => {

    
    const [userData,setUserData] = useState()

    function handleCallbackRequest(response){
        
        const r_data = jwtDecode(response.credential)
        setUserData(r_data)
        

    }
    
    useEffect(()=>{
      /* global google */
      google.accounts.id.initialize({
        client_id: "143512455333-tfp65lehblgu0lbn5f95ep58mqte42cf.apps.googleusercontent.com",
        callback: handleCallbackRequest
      });
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: "outline", size: "large"}
      );
    },[])

    const container = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem',
        
    }
    const handleClick =(event)=>{
        
        
    }
    const handSubmit = (event)=>{
        event.preventDefault();
        event.target.value = ""
    }
     
  return (
    <div >
       {userData ? <Dashboard userData={userData} /> :  <form style={{}}>
        
        <div className={container}>
        <div style={{display:'flex',justifyContent:'center'}} id='signInDiv'>

        </div>
            <p>OR</p>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0.5rem 0 1rem 0',
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
    </form>}
    
    </div>
  )
}
