import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import { CgProfile } from 'react-icons/cg'
import imga from "../Images/cont.png"
import globe from "../Images/globe.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import spec from '../Images/spec.png'
import ibk from "../Images/ibk.png"
import "./Blog.css"

const Blog = () => {
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
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        window.scrollTo(0, 0);
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
    return (
        <div className='gbos'>
              {backToTopButton && (
                <button className='upo'  style={{
                    position: "fixed",
                    bottom: "45px",
                    right: "45px",
                    height: "45px",
                    width: "45px",
                    fontSize: "30px",
                    borderRadius:"50%",
                    background:"#FB8C00",
                    color:"#fff",
                    border:"#fff",
                    paddingTop:"2px"
                }}
                    onClick={scrollUp}>
                          <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                    </button>
            )}
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
                        <li className='kp pk ohp li-main'>
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
            <p className="blog">Blog</p>
            <div className="bo">
                <div className="blog-content">
                    <div className="word-part">
                        <h2>Why Respecta is the bigger social app from Africa.</h2>
                        <br />
                        <p>Social media app from Africa is the next big thing.</p>
                        <br />
                        <br />
                        <div className="new-f">
                            <div>
                                <h5 className='october'>5 Oct.</h5>
                            </div>
                            <div>
                                <h5 className='four'> 4 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className="imga">
                        <img src={imga} alt="" />
                    </div>
                </div>
                <br />
                <div className="blog-content">
                    <div className="word-part">
                        <h2>Why Respecta is the bigger social app from Africa.</h2>
                        <br />
                        <p>Social media app from Africa is the next big thing.</p>
                        <br />
                        <br />
                        <div className="new-f">
                            <div>
                                <h5 className='october'>5 Oct.</h5>
                            </div>
                            <div>
                                <h5 className='four'> 4 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className="imga">
                        <img src={globe} alt="" />
                    </div>
                </div>
                <br />
                <div className="blog-content">
                    <div className="word-part">
                        <h2>Why Respecta is the bigger social app from Africa.</h2>
                        <br />
                        <p>Social media app from Africa is the next big thing.</p>
                        <br />
                        <br />
                        <div className="new-f">
                            <div>
                                <h5 className='october'>5 Oct.</h5>
                            </div>
                            <div>
                                <h5 className='four'> 4 min read</h5>
                            </div>
                        </div>
                    </div>
                    <div className="imga">
                        <img src={ibk} alt="" />
                    </div>
                </div>
                <br />
                <div className="buttonn">
                    <button className="see-more">See more ...</button>
                </div>
            </div>
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

export default Blog