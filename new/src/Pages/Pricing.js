import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"
import { GiCheckMark } from "react-icons/gi"
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { ImCross } from "react-icons/im"
import { CgProfile } from 'react-icons/cg'
import spec from '../Images/spec.png'
import { AiOutlineYoutube } from "react-icons/ai"
import "./Pricing.css"

const Pricing = () => {
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
    const showSidebar = () => setSidebar(!sidebar)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='gbos'>
            <div className="media reck">
                <div>
                    <p className="pp">Respecta</p>
                </div>
                {sidebar === true ?
                    (<>
                        <ImCross className='cross' onClick={showSidebar} /></>)
                    : (<><i onClick={showSidebar} className="fas fa-bars"></i></>)}
            </div>
            <header className='akoba' id={sidebar === true ? "newBlog" : "blog"}>
                <div>
                    <p className="logo ol">Respecta</p>
                </div>
                <nav className='nao'>
                    <ul className="nav-links flexo">
                        <li><Link className='ohp' to='/memory'>Memories</Link></li>
                        <li><Link className='ohp' to='/blog'>Blog</Link></li>
                        <li><Link className='ohp' to='/pricing'>Pricing</Link></li>
                        <li className='kp ohp li-main'>
                            <div class="dropdown">
                                <input type="checkbox" id="my-dropdown" value="" name="my-checkbox" className='cjo' />
                                <label className='lao' for="my-dropdown"
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

                        </li>
                    </ul>
                </nav>

            </header>
            <div className="pricing">
                <h1>Get unlimited access to <br /> everything on Respecta</h1>
                <div className="celebrate">
                    <p className='pops'> <GiCheckMark style={{ color: " #FB8C00" }} /> Celebrate loved ones without limits</p>
                    <p> <GiCheckMark style={{ color: " #FB8C00" }} /> No ads</p>
                    <p> <GiCheckMark style={{ color: " #FB8C00" }} /> Cancel at anytime</p>
                </div>
                <br />
                <br />
                <form action="">
                    <button className="radio-part">
                        <input type="radio" value="a" name="options" />
                        <div className="first-radio">
                            <p className='hund'>#500/month</p>
                            <p className='crr'>Create respecta for 300 persons per month</p>
                        </div>
                    </button>
                    <br />
                    <button className="radio-part">
                        <input className='onm' name="option" value="b" style={{ backgroundColor: "#FB8C00" }} type="radio" />
                        <div className="first-radio mmo">
                            <p className='hund'>#50,000/year</p>
                            <p className='cro'>Create respecta for unlimited number of persons per year</p>
                        </div>
                    </button>
                </form>
            </div>
            <br />
            <br />
            <br />
            <footer>
                <div className="main-content">
                    <div className="respect">
                        <div className="name"><h2>Respecta</h2></div>
                        <div className="mname">
                            <div className="sname">
                                <Link className='wo' to="">About</Link>
                                <Link className='wo' to="">Help & FAQ</Link>
                                <Link className='wo' to="">Contact Us</Link>
                                <Link className='wo' to="/pricing">Pricing</Link>
                                <Link className='wo' to="/blog">Blog</Link>
                            </div>
                            <div className="tname">
                                <Link className='wo' to="/memory">My memories</Link>
                                <Link className='wo' to="/memory">My memories</Link>
                                <Link className='wo' to="/memory">My memories</Link>
                                <Link className='wo' to="/memory">My memories</Link>
                                <Link className='wo' to="/memory">My memories</Link>
                            </div>
                        </div>
                    </div>
                    <div className="social-part">
                        <div className="buttons">
                            <button className='wot'><Link className='needed' to="/login"><p> Log In</p></Link> </button>
                            <button className='woto'><Link className='needed' to="/join"><p>Sign Up</p></Link> </button>
                        </div>
                        <br />
                        <div className="iconn">
                            <Link className='tom' to=""><GrFacebook /></Link>
                            <Link className='tom' to=""><FaInstagram /></Link>
                            <Link className='tom' to=""><BsLinkedin /></Link>
                            <Link className='tom' to=""><AiOutlineYoutube /></Link>
                        </div>
                    </div>
                </div>
                <div className="last-part">
                    <div className='repo'>
                        <p>Respecta 2022, made with love in Nigeria, Ibadan city</p>
                    </div>
                    <div className="unexp">
                        <p>Terms & Conditions</p>
                        <p className='wop'>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Pricing