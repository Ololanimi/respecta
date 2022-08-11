import React from 'react'
import './Password.css'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillApple } from "react-icons/ai"

const Password = () => {
    return (
        <div>
            <div className="cont">
                <Link className='needed' to="/"><h4>Respecta</h4></Link>
                <br />
                <div className="pass-part">
                    <h3>Password Reset</h3>
                    <br />
                    <p>Forgot your password? Enter your e-mail address below and we'll send you an e-mail allowing you to reset it.</p>
                    <form action="">
                    <TextField
                        id="fullWidth"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{ width: "80%", marginTop: "45px",marginLeft:"42px" }}
                        className="pass-text"
                    />
                    <br />
                     <button className='pass-butt' required>Reset my password</button>
                     </form>
                </div>
            </div>
        </div>
    )
}

export default Password