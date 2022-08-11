import React from 'react'
import { useState } from "react"
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AiOutlineGoogle } from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillApple} from "react-icons/ai"
import axios from 'axios';

const Login = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [err, setErr] = useState("")
    // const navigate = useNavigate()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const res = await axios.post("https://jobs-api-06-v1.herokuapp.com/api/v1/auth/login", {email, password})
    //         if (res.data.success === true){
    //             await localStorage.setItem("userData", JSON.stringify(res.data.user))
    //             navigate("/friend")
    //         } else {
    //             setErr(res.data.message)
    //         }
    //     } catch (error) {
    //         setErr(error.message)
    //     }
    // }
    
    // const [firstName, setFirstName] = useState("Ololanimi")
    // const [lastName, setLastName] = useState("Money")
    // const [email, setEmail] = useState("olola1@gmail.com")
    // const [password, setPassword] = useState("Ololanimi123")
    const navigate = useNavigate()
    const appToken = process.env.REACT_APP_RESPECTA_APP_TOKEN
    const [profileData, setProfileData] = useState({
        appToken,
        email: "",
        password: ""
    })
    const [err, setErr] = useState("")
    
    console.log(appToken)


    const handleData =(e)=>{
        console.log(e.target.name);
        setProfileData({...profileData, [e.target.name]: e.target.value})
    }


    console.log(profileData)
    console.table(profileData)

    const handleSubmit = async (e) => {
        e.preventDefault()
           axios.post("https://bac.respecta.xyz.fireswitch.com.ng/register", JSON.stringify(profileData),
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
    <br />
    <div className="form-part">
        <h3>Sign in to Respecta</h3>
        <br />
        <p>please login to continue</p>
        <div className="do">
            <div className="real" onSubmit={handleSubmit}>
                <TextField
                    id="fullWidth"
                    label="Email address"
                    type="email"
                    style={{ width: "100%", marginTop:"60px" }}
                    className='textfie'
                    value={profileData.email}
                    onChange={handleData}
                />
                <br />
                <TextField
                    id="fullWidth"
                    label="Password"
                    type="password"
                    style={{ width: "100%", marginTop:"15px"}}
                    className='textfie'
                    value={profileData.password}
                    onChange={handleData}
                />
                {err && <span>{err}</span>}
               <Link className="forgot" to="/password"><p>Forgot Password?</p></Link> 
                <button onSubmit={handleSubmit} className='sep textfie'>Sign in</button>
                <h6 className='sep oiv'><span className='textfi'>OR</span></h6>
                <div  className="social textfie">
                    <div className="goggle">
                        <AiOutlineGoogle style={{color:"red", fontSize:"25px", marginLeft:"30px"}} />
                        <p>Sign in with Goggle</p>
                    </div>
                    <div className="sign-in">
                        <AiFillFacebook style={{color:"rgb(39, 39, 116)", fontSize:"25px", marginLeft:"30px"}}/>
                        <p>Sign in with Facebook</p>
                    </div>
                    <div className="apple">
                        <AiFillApple style={{color:"black",fontSize:"25px", marginLeft:"30px"}}/>
                        <p>Sign in with Apple</p>
                    </div>
                </div>
            </div>
            <div className="las">
            <Link to="/join" className='bb oo'><p>Don't have an account? <span>Register</span></p></Link>
                <p className='by'>By signing up, you agree to the <span>Terms of Service</span> and <span> Privacy Policy</span></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login