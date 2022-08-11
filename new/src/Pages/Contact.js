import React from 'react'
import "./Contact.css"
import { Link } from "react-router-dom"
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
const Contact = () => {
    return (
        <div>
            <div className="cover">
                <Link to="/" className="needed"><p className="logos">Respecta</p></Link>
                <div className="contact-grid">
                    <div className="words">
                        <h4 className='chai'>Get in touch with Us. Fill up the form and our team will get back to you within 24 hours.</h4>
                        <br /><br /><br />
                        <div className="icone">
                            <div className="inu-icons">
                                <i className="fa fa-phone"></i>
                                <p>+234 814 536 3728</p>
                            </div>
                            <div className="inu-icons">
                            <i class="fa-solid fa-envelope"></i>
                                <p>ItSpilleet@gmail.com</p>
                            </div>
                            <div className="inu-icons">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>102 Orogun Street, Ibadan</p>
                            </div>
                        </div>
                        <br />
                        <div className="icono">
                            <Link className='tomo' to=""><GrFacebook /></Link>
                            <Link className='tomo' to=""><FaInstagram /></Link>
                            <Link className='tomo' to=""><BsLinkedin /></Link>
                            <Link className='tomo' to=""><AiOutlineYoutube /></Link>
                        </div>
                    </div>
                    <div className="formm">
                        <form action="">
                            <div class="form-groupo">
                                <label for="exampleFormControlInput1">Your name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <br />
                            <div class="form-groupo">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <br />
                            <div class="form-groupo">
                                <label for="exampleFormControlInput1">Message</label>
                                <textarea name="message" placeholder='Write message' id="" cols="30" rows="10"></textarea>
                            </div>
                            <button className='sub' id="submit">Send message</button>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact