import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"
import { CgProfile } from 'react-icons/cg'
import spec from '../Images/spec.png'

const CreateTopics = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }
    return (
        <div className='gbos'>
            <div className="Head">
                <div className="mol">
                    <div>
                        <Link to="/" className="needed">  <p className="logo res">Respecta</p></Link>
                    </div>
                    <div onClick={toggleSidebar}>
                        <i className="fas fa-bars" />
                    </div>

                </div>
            </div>
            <div className="inside-create">
                <div className="admin-wrapper">
                    {/* left side bar */}
                    <div className={sidebar ? "left-sidebar sidebar--open" : "left-sidebar"}>
                        <div className="manage-para">
                            <Link className='mang' to="/manageposts">Manage Posts</Link>
                        </div>
                        <div className="manage-para">
                            <Link className='mang' to="/manageusers">Manage Users</Link>
                        </div>
                        <div className="manage-para">
                            <Link className='mang' to="/managetopics">Manage Topics</Link>
                        </div>
                    </div>
                    <div className={sidebar ? "admin-content" : "admin-content admin-content--open"} onClick={toggleSidebar}>
                        <div className="button-group">
                            <div className="creat">
                                <Link className='mn' to="/">Add Topics</Link>
                            </div>
                            <div className="creat shif">
                                <Link className='mn' to="/">Manage Topics</Link>
                            </div>
                        </div>
                        <div className="content">
                            <h2 className="page-title topp">Create Topics</h2>
                            <div className="input-cont">
                                <form action="">
                                    <div className="form-cont">
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-cont">
                                        <label htmlFor="">Description</label>
                                        <input type="text" />
                                    </div>
                                </form>
                                <br />
                                <div className="save-users">
                                    <p>Save Topics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTopics