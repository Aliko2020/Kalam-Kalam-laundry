    import React from 'react'
    import { useState } from 'react'
    import { Link } from 'react-router-dom'
    import ValidationSignup from '../LoginValidate'



    export const SignUp = () => {
      
      const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(ValidationSignup(values)) 
        console.log(values);
    }


    const handleInput =(event)=>{
      setValues(prev=>({...prev,[event.target.name] : [event.target.value]}))

    }
      
      const container = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.5rem',
    }
      return (
        <div>
          <form onSubmit={handleSubmit}>
            
            <div className={container}>
            <div style={{display:'flex',justifyContent:'center'}} id='signInDiv'>

            </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    margin: '0.5rem 0 1rem 0',
                    width: '360px',
                    margin: 'auto'
                }}>
                    <h1 style={{textAlign:'center',margin:'1rem'}}>Sign-Up</h1>
                    <label htmlFor='username'><strong>Username</strong></label>
                    <input 
                        style={{
                            padding: '1.2rem .2rem',
                            borderRadius: '5px',
                            margin: '1rem 0'
                        }}
                        name='username'
                        type='text' 
                        placeholder='John Doe'
                        onChange={handleInput} 
                    />
                    {errors.name && <span style={{color: 'red',margin:'.5rem 0 1rem 0'}}>{errors.name}</span>}
                    
                    <label htmlFor='username'><strong>Email</strong></label>
                        <input 
                            style={{
                                padding: '1.2rem .2rem',
                                borderRadius: '5px',
                                margin: '1rem 0'
                            }}
                            name='email'
                            type='text' 
                            placeholder='johndoe@gmail.com'
                            onChange={handleInput} 

                        />
                    {errors.email && <span style={{color: 'red',margin:'.5rem 0 1rem 0'}}>{errors.email}</span>}
                    
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input 
                        style={{
                            padding: '1.2rem .2rem',
                            borderRadius: '5px',
                            margin: '1rem 0'
                        }}
                        type='password' 
                        name='password'
                        placeholder='Password'
                        onChange={handleInput}  
                        
                    />
                    {errors.password && <span style={{color: 'red',margin:'.5rem 0 1rem 0'}}>{errors.password}</span>}
                    <button
                        type='submit'
                        style={{
                            padding: '1.2rem',
                            borderRadius: '5px',
                            margin: '1rem 0',
                            background: '#ff3831',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.5rem'
                        }}
                    >Sign Up</button>
                </div>
                <p style={{margin: '1rem'}}>already have an account?</p>
                <Link  to="/login" >Sign in</Link>
            </div>
        </form>
        </div>
      )
    }
