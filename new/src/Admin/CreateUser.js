import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"
import { CgProfile } from 'react-icons/cg'
import spec from '../Images/spec.png'
import './CreateUser.css'
const CreateUser = () => {
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
        <div>
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
            {/* <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <nav className="Nav">
                    <div class="dropdown kp li-main mnop ">
                                    <input type="checkbox" id="my-dropdown" value="" name="my-checkbox" className='cjo' />
                                    <label className='lab' for="my-dropdown"
                                        data-toggle="dropdown">
                                        <p className='omo'><CgProfile /></p>
                                        <p className="need">Adeboye</p>
                                    </label>
                                    <ul>
                                        <div className="dd-menu">
                                            <div className="top">
                                                <div className="ims">
                                                    <img className='spec' src={spec} alt="" />
                                                    <div className="small-a"><h4>A</h4></div>
                                                </div>
                                                <div className="pro">
                                                    <div className="name-p">
                                                        <p className='ade'>Adeboye</p>
                                                        <p className='fems'>Oluwafemi .P</p>
                                                    </div>
                                                    <br />
                                                    <div className="profile"><Link className='ops' to="/profile">Profile</Link></div>
                                                </div>
                                            </div>
                                            <hr className="woss" />
                                            <div className="middle">
                                                <div className="tribute">
                                                    <p>Tribute for Tundegladly</p>
                                                    <div className="co-box orange">7</div>
                                                </div>
                                                <div className="tribute">
                                                    <p>Tribute for Oludaresegz</p>
                                                    <div className="co-box red">10</div>
                                                </div>
                                                <div className="tribute">
                                                    <p>Tribute for Vivainugokwu</p>
                                                    <div className="co-box orange">6</div>
                                                </div>
                                                <div className="tribute">
                                                    <p>Tribute for Olumideoguntuga</p>
                                                    <div className="co-box green">3</div>
                                                </div>
                                                <div className="tribute">
                                                    <p>Tribute for Mayomipe </p>
                                                    <div className="co-box green">3</div>
                                                </div>
                                                <div className="tribute">
                                                    <p>Tribute for Simeondavid</p>
                                                    <div className="co-box red">10</div>
                                                </div>
                                            </div>
                                            <hr className="woss" />
                                            <div className="bottom">
                                                <div className="bott">
                                                    <p>How to make a great tribute</p>
                                                </div>
                                                <div className="bott">
                                                    <Link className='no' to="/notification"><p>Notification</p></Link>
                                                </div>
                                                <div className="bott">
                                                    <p>Upgrades Package</p>
                                                </div>
                                                <div className="bott">
                                                    <Link className='no' to="/settings"><p>Settings</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>

                    </nav>
                </CSSTransition> */}
            {/* <button onClick={toggleNav} className="Burger">
                    🍔
                </button> */}
            <div className='inside-create' >
                {/* <div className={sidebar ? "admin-content admin-content--open" : "admin-content"} onClick={toggleSidebar}> */}
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
                                <Link className='mn' to="/">Add Users</Link>
                            </div>
                            <div className="creat shif">
                                <Link className='mn' to="/">Manage Users</Link>
                            </div>
                        </div>
                        <div className="content">
                            <h2 className="page-title">Create user admin</h2>
                            <div className="input-cont">
                                <form action="">
                                    <div className="form-cont">
                                        <label htmlFor="">Username</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-cont">
                                        <label htmlFor="">Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="form-cont">
                                        <label htmlFor="">Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="form-cont">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="password" />
                                    </div>
                                    <div className="form-cont">
                                        <label htmlFor="">Role</label>
                                        <select name="" id="">
                                            <option value="">Admin</option>
                                            <option value="">Admin</option>
                                        </select>
                                    </div>
                                </form>
                                <br />
                                <div className="save-users">
                                    <p>Save user</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser