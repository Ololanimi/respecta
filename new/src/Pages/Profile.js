import "./Profile.css"
import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { ImCross } from "react-icons/im"
import { CgProfile } from 'react-icons/cg'
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import belle from "../Images/belle.png"
import cake from "../Images/cake.png"
import earpod from "../Images/earpod.png"
import friends from "../Images/friends.png"
import hug from "../Images/hug.png"
import sit from "../Images/sit.png"
import study from "../Images/study.png"
import wed from "../Images/wed.png"
import spec from "../Images/spec.png"
import prof from "../Images/prof.png"
import locate from "../Images/locate.png"
import hobbby from "../Images/hobby.png"
import heart from "../Images/heart.png"
import { AiOutlineYoutube } from "react-icons/ai"
import { Pagination, Space } from "antd"

function Profile() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

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

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    // const Pagination = props => {
    //     const {
    //         onPageChange,
    //         totalCount,
    //         siblingCount = 1,
    //         currentPage,
    //         pageSize,
    //         className
    //     } = props;

    //     const paginationRange = usePagination({
    //         currentPage,
    //         totalCount,
    //         siblingCount,
    //         pageSize
    //     })
    //     if (currentPage ===0 || paginationRange.length < 2){
    //         return null;
    //     }
    //     const onNext = () => {
    //         onPageChange(currentPage + 1);
    //     }
    //     const onPrevious = () => {
    //         onPageChange(currentPage - 1)
    //     }
    //     let lastPage = paginationRange[paginationRange.length - 1];
    // }

    return (
        <div className="gbos">
            {backToTopButton && (
                <button className='upo' style={{
                    position: "fixed",
                    bottom: "45px",
                    right: "45px",
                    height: "45px",
                    width: "45px",
                    fontSize: "30px",
                    borderRadius: "50%",
                    background: "#FB8C00",
                    color: "#fff",
                    border: "#fff",
                    paddingTop: "2px"
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
            <div className="profile-div">
                <div className="first-profile">
                    <div className="left-side">
                        <div className="picture">
                            <img src={spec} alt="" />
                        </div>
                        <div className="name-left">
                            <h1>Olu Samuel</h1>
                            <div className="ic-img">
                                <img src={prof} alt="" />
                                <p className="poli">Politician . Engineer</p>
                            </div>
                            <div className="ic-img">
                                <img src={locate} alt="" />
                                <p className="apats">Apata Ibadan, Oyo State</p>
                            </div>
                            <div className="ic-img">
                                <img src={hobbby} alt="" />
                                <p className="foot">Football, Art, Photography</p>
                            </div>
                            <div className="ic-im">
                                <img src={heart} alt="" />
                                <p className="sing">Single</p>
                            </div>
                            <div className="edit-profile">
                                <i class="fa-regular fa-pen-to-square"></i>
                                <Link className="edip" to="/edit"><p>Edit Profile</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="second-profile">
                    <div className="bf-img">
                        <div className="oplay"></div>
                        <div className="speco">
                            <img src={spec} alt="" />
                        </div>
                    </div>
                    <br />
                    <div className="wordings">
                        <p className="mk">My Memories</p>
                    </div>
                    <div className="grid-img">
                        <div className="first-imm">
                            <img src={hug} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={friends} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={sit} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={study} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={belle} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={earpod} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={cake} alt="" />
                            <p className="hum">2019</p>
                        </div>
                        <div className="first-imm">
                            <img src={wed} alt="" />
                            <p className="hum">2019</p>
                        </div>
                    </div>

                    <br />
                    <div className="view-more">
                        <p>View more...</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <footer className="plb">
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
                                <Link className='wo' to="/memories">My memories</Link>
                                <Link className='wo' to="/memories">My memories</Link>
                                <Link className='wo' to="/memories">My memories</Link>
                                <Link className='wo' to="/memories">My memories</Link>
                                <Link className='wo' to="/memories">My memories</Link>
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
                    <div className="repo">
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

export default Profile