    import React from 'react';
    import { Link, Navigate, useNavigate } from 'react-router-dom';
    import { useState } from 'react';
    import Validation from '../LoginValidate';
    import axios from 'axios';






    export const Login = () => {

        const [values, setValues] = useState({
            email: "",
            password: ""
        })
        
        const navigate = useNavigate();

        const [errors, setErrors] = useState({})

        const handleSubmit = (event) =>{
            event.preventDefault();
            setErrors(Validation(values)) 
            axios.post('http://localhost:8080/login', values)
            .then(res => {
                if(res.data === "success"){
                   navigate('/dashboard') 
                }else{
                    alert("no record found for the info provided")
                }
            })
            .catch(err => console.log(err))

            setValues({email: "", password: ""})
            
            
        }

        
        const handleInput = (event) => {
            setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
        }
        
        const container = {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.5rem',
        }
    return (
        <div >
        <form onSubmit={handleSubmit}>
            <div className={container}>
            <div style={{display:'flex',justifyContent:'center'}} id='signInDiv'>

            </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    width: '360px',
                    margin: 'auto'
                }}>
                    <h1 style={{textAlign:'center',margin:'1rem'}}>Sign-In</h1>
                    <label htmlFor='username'><strong>Email</strong></label>
                    <input 
                        style={{
                            padding: '1.2rem .2rem',
                            borderRadius: '5px',
                            margin: '1rem 0'
                        }}
                        id='username'
                        name='email'
                        value={values.email}
                        type='text' 
                        placeholder='johndoe@gmail.com'
                        onChange={handleInput} 

                    />
                    {errors.email && <span style={{color: 'red',margin:'.5rem 0 1rem 0',fontSize:'.8rem'}}>{errors.email}</span>}
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input 
                        style={{
                            padding: '1.2rem .2rem',
                            borderRadius: '5px',
                            margin: '1rem 0'
                        }}
                        id='password'
                        value={values.password}
                        type='password' 
                        name='password'
                        placeholder='Password'
                        onChange={handleInput}  
                        
                    />
                    {errors.password && <span style={{color: 'red',margin:'.5rem 0',fontSize:'.8rem'}}>{errors.password}</span>}
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
                        type='submit'
                    >login</button>
                </div>
                <p style={{margin: '1rem'}}>Dont have an account?</p>
                <Link style={{color:"#ff3831"}} to="/signup" >Sign up</Link>
            </div>
        </form>
        </div>
    )
    }
