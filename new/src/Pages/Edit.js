import React from 'react'
import "./Edit.css"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import spec from "../Images/spec.png"

const Edit = () => {
    return (
        <div className="gbos">
            <div className="edit-container">
                <Link to="/" className="needed"><p className="logop">Respecta</p></Link>
                <br />
                <div className="form-edit">
                    <p>Edit profile</p>
                    <div className="inside-edit">
                        <div className="img-edit">
                            <img src={spec} alt="" />
                            <div className="icon-edit">
                                <i className="fas fa-pen"></i>
                            </div>
                        </div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 0.5, width: '20ch' },
                            }}
                            noValidate
                            autoComplete="on"
                            style={{ width: "100%"}}
                            className="Boxx"
                        >
                            <br />
                            <TextField
                                id="outlined-password-input"
                                label="First name"
                                type="name"
                                autoComplete="current-password"
                                size="small"
                                style={{ width: "47.7%", fontFamily: "Montserrat"}}
                                className="mola"
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Last name"
                                type="name"
                                autoComplete="current-password"
                                size="small"
                                style={{ width: "47.7%", fontFamily: "Montserrat"}}
                                className="mola"
                            />
                               <TextField
                                id="outlined-password-input"
                                label="Middle name"
                                type="name"
                                autoComplete="current-password"
                                size="small"
                                style={{ width: "47.7%", fontFamily: "Montserrat"}}
                                className="mola"
                            />
                        </Box>
                        <TextField
                            id="fullWidth"
                            label="Bio"
                            type="text"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%", marginTop: "10px", fontFamily: "Montserrat" }}
                            className="meeow"
                        />
                         <TextField
                            id="fullWidth"
                            label="Address"
                            type="text"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%", marginTop: "10px", fontFamily: "Montserrat" }}
                            className="meeow"
                        />
                         <TextField
                            id="fullWidth"
                            label="Email address"
                            type="email"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%", marginTop: "10px", fontFamily: "Montserrat"}}
                            className="meeow"
                        />
                         <TextField
                            id="fullWidth"
                            label="Status"
                            type="text"
                            autoComplete="current-password"
                            size="small"
                            style={{ width: "100%", marginTop: "10px", fontFamily: "Montserrat"}}
                            className="meeow"
                        />
                        <div className="button-edit">Save</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit