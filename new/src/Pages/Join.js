import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillApple } from "react-icons/ai"
import "./Join.css"
import axios from 'axios';


const Join = () => {

const navigate = useNavigate()

    // const [firstName, setFirstName] = useState("Ololanimi")
    // const [lastName, setLastName] = useState("Money")
    // const [email, setEmail] = useState("olola1@gmail.com")
    // const [password, setPassword] = useState("Ololanimi123")
    const appToken = process.env.REACT_APP_RESPECTA_APP_TOKEN
    const [profileData, setProfileData] = useState({
        appToken,
        firstName:"",
        lastName:"",
        password: "",
        email: ""
    
    })
    const [err, setErr] = useState("")
    
    console.log(appToken)


    const handleData =(e)=>{
        console.log(e.target.name);
        setProfileData({...profileData, [e.target.name]: e.target.value})
    }

    console.log(profileData)
    // console.table(profileData)

    const handleSubmit = async (e) => {
        e.preventDefault()
           axios.post("https://bac.respecta.xyz.fireswitch.com.ng/r", JSON.stringify(profileData),
            {
                headers: {
                    "content-type": "application/JSON"
                }
            }
            
           )
           .then((res) =>{
            if (res.data.success === true) {
                localStorage.setItem("userData", JSON.stringify(res.data.user))
               navigate("/respecta")
                
            } else {
                setErr(res.data.message)
            }
           })
            
           
        }

    return (
        <div className='container'>

            <Link className='needed' to="/"><h4>Respecta</h4></Link>
           <bor />
           <div className="form-part">
                <h3>Join Respecta</h3>

                <br />
                <p>please login to continue</p>
                <div className="do">
                    <div className="real">
                        <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': { m: 0.5, width: '20ch' },
                            }}
                            noValidate
                            autoComplete="on"
                            className="Box"
                            onSubmit={handleSubmit}
                        >
                            <br />
                            <TextField
                                id="outlined-password-input"
                                label="First Name"
                                type="name"
                                autoComplete="current-password"
                                size="small"
                                className='textfield'
                                name='firstName'
                                value={profileData.firstName}
                                onChange={handleData}
                            />
                            <TextField
                             id="outlined-password-input"
                             label="Second Name"
                                type="name"
                                autoComplete="current-password"
                                size="small"
                                className='textfield'
                                name='lastName'
                                value={profileData.lastName}
                                onChange={handleData}
                            />
                        </Box>
                        <TextField
                       id="fullWidth"
                            label="Email address"
                            type="email"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%" }}
                            className='textfiel'
                            name='email'
                            value={profileData.email}
                            onChange={handleData}
                        />
                        <br />
                        <TextField
                            id="fullWidth"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%" }}
                            className='textfiel'
                            name='password'
                            value={profileData.password}
                            onChange={handleData}
                        />
                        {err && <span>{err}</span>}
                        <button type="submit" onClick={handleSubmit} className='textfiel'>Register</button>
                        <h6 className='textfiel'><span>OR</span></h6>
                        <div className="social textfiel">
                            <div className="goggle">
                                <AiOutlineGoogle style={{ color: "red", fontSize: "25px", marginLeft: "30px" }} />
                                <p>Sign in with Goggle</p>
                            </div>
                            <div className="sign-in">
                                <AiFillFacebook style={{ color: "rgb(39, 39, 116)", fontSize: "25px", marginLeft: "30px" }} />
                                <p>Sign in with Facebook</p>
                            </div>
                            <div className="apple">
                                <AiFillApple style={{ color: "black", fontSize: "25px", marginLeft: "30px" }} />
                                <p>Sign in with Apple</p>
                            </div>
                        </div>
                    </div>
                    <div className="las">
                        <p>By signing up, you agree to the <span>Terms of Service</span> and <span> Privacy Policy</span></p>
                        <Link className='bb' to="/login"><p>Already have an account? <span>Sign In</span></p></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Join  