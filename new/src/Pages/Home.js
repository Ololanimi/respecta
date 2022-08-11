import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faM } from "@fortawesome/free-solid-svg-icons"
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import { CgProfile } from 'react-icons/cg'
import spec from '../Images/spec.png'
import fm from "../Images/fm.png"
import elu from "../Images/elu.png"
import comment from "../Images/comment.png"
import like from "../Images/like.png"
import forward from "../Images/forward.png"
import shine from "../Images/shine.png"
import orange from "../Images/orange.png"
import vic from "../Images/vic.png"
import tolu from "../Images/tolu.png"
import laugh from "../Images/laugh.png"
import blue from "../Images/blue.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { borderRadius } from '@mui/system'

const Home = () => {
    // const [open, setOpen] = useState(false)
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
    const [open, setOpen] = useState(false)

    const posts = [
        {
            img: fm,
            title1: "Michael Jones",
            title2: "5h",
            title3: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img2: elu,
            img3: comment,
            img7: like,
            img8: forward,
            title4: " 456 comments",
            title5: " 1256 likes",
            title6: "3 share",
            img4: shine,
            title7: "Rachael Ubong",
            title8: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img5: vic,
            title9: "John Williams",
            title10: "You have been a blessing Sir! Thank you.",
            img6: tolu,
            title11: "Peter Stella",
            title12: "This is a beautiful work. Well done guys.",
            im: fm
        },
        {
            img: orange,
            title1: "Michael Jones",
            title2: "5h",
            title3: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img2: laugh,
            img3: comment,
            img7: like,
            img8: forward,
            title4: " 456 comments",
            title5: " 1256 likes",
            title6: "3 share",
            img4: shine,
            title7: "Rachael Ubong",
            title8: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img5: vic,
            title9: "John Williams",
            title10: "You have been a blessing Sir! Thank you.",
            img6: tolu,
            title11: "Peter Stella",
            title12: "This is a beautiful work. Well done guys.",
            im: blue
        },
        {
            img: orange,
            title1: "Michael Jones",
            title2: "5h",
            title3: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img2: elu,
            img3: comment,
            img7: like,
            img8: forward,
            title4: " 456 comments",
            title5: " 1256 likes",
            title6: "3 share",
            img4: shine,
            title7: "Rachael Ubong",
            title8: "Thank you guys for this great gift. I wasn't expecting this at all, but I really appreciate this guys, am so grateful. Thank you guys.",
            img5: vic,
            title9: "John Williams",
            title10: "You have been a blessing Sir! Thank you.",
            img6: tolu,
            title11: "Peter Stella",
            title12: "This is a beautiful work. Well done guys.",
            im: blue
        },

    ]
    return (
        <div className='gbos'>
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
            <div className="bg-img">
                <div className="media">
                    <div>
                        <p className="pp">Respecta</p>
                    </div>
                    {sidebar === true ?
                        (<>
                            <ImCross className='cross' onClick={showSidebar} /></>)
                        : (<><i onClick={showSidebar} className="fas fa-bars"></i></>)}
                </div>
                <header id={sidebar === true ? "newHeader" : "header"}>
                    <div className='crsp'>
                        <p className="logo">Respecta</p>
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li><Link className='needed' to='/pricing'>Pricing</Link></li>
                            <li><Link className='needed' to='/'>About</Link></li>
                            <li><Link className='needed' to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="right">
                        <ul className="nav-link">
                            <li><Link className='needed' to=""> <AiOutlineSearch /></Link></li>
                            <li> <Link to="/blog" className="needed"> <p className="needed">Blog</p></Link></li>
                            <li className='kp li-main'>
                                <div class="dropdown">
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

                            </li>
                        </ul>
                    </div>
                </header>
                <div className="overlay">
                    <div className="home-page-content overlay">
                        <h1 className="text-center home-page-text h1-responsive">Create  beautiful moments <br /><span> for your loved ones.</span></h1>
                        <div className="home-button text-center fadeIn">
                            <Link to='/respecta' className="btn homepage-btn-1 btn-lg mt-2">+ Start a Respecta</Link>
                            <Link to='/how' className="btn homepage-btn-2 btn-lg mt-2">See how it works</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center home-loved-text h1-responsive">See how others have honored their loved <br /><span>ones with Memories.</span> </p>
            <div className="loved-ones" id="loved-ones">
                {posts.map(post => {
                    return (
                        <div className="write-post-container">
                    <div className="user-profile">
                        <img src={post.img} alt="" />
                        <div>
                            <h4>{post.title1}</h4>
                            <small>{post.title2}</small>
                            <p className="pyank">{post.title3}</p>
                        </div>
                    </div>
                    <div className="ov">
                        <img src={post.img2} alt="" className='post-img' />
                    </div>
                    <div className='di'></div>
                    <div className="post-row">
                        <div className="activity-icons">
                            <div>
                                <img src={post.img3} alt="" />
                                456 comments
                            </div>
                            <div>
                                <img src={post.img7} alt="" />
                                1256 likes
                            </div>
                            <div>
                                <img src={post.img8} alt="" />
                                3 share
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="messages-part">
                        <div className="post-profile-icon">
                            <img src={post.img4} alt="" />
                            <div className="messagee">
                                <h4>{post.title7}</h4>
                                <p>{post.title8}</p>
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src={post.img5} alt="" />
                            <div className="messagee">
                                <h4>{post.title9}</h4>
                                <p>{post.title10}</p>
                            </div>
                        </div>
                        <div className="post-profile-icon">
                            <img src={post.img6} alt="" />
                            <div className="messagee">
                                <h4>{post.title11}</h4>
                                <p>{post.title12}</p>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className="post-profile-icon">
                            <img src={post.im} alt="" />
                            <div className="messag">
                                <input type="text" placeholder="Comment ...." />
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
                }
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
    );
}

export default Home