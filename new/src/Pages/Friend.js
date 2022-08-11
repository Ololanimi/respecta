import React, { useEffect, useRef, useState } from 'react'
import "./Friend.css"
import { Link } from 'react-router-dom'
import cheat from '../Images/cheat.png'
import { IoMdVideocam } from 'react-icons/io'
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import { CgProfile } from 'react-icons/cg'
import spec from '../Images/spec.png'



const Friend = () => {
    // const Buffer = require('buffer/').Buffer
    // const file = e.target.value
    // const reader = newwindow.FileReader()
    // reader.readAsArrayBuffer(file)
    // reader.onloadend = () => {
    //   const fileBuffer = (Buffer(reader.result))
    // }
    let buffer = ""
    const onChange = (e) => {
        const files = e.target.files
        const file = files[0]
        getbuffer(file)
    }
    const onLoad = (fileString) => {
        this.buffer= fileString
    }
    const getbuffer = (file) =>{
        let reader = new FileReader()
        reader.readerAsDataURL(file)
        reader.onload = () => {
            onLoad(reader.result)
        }
    }

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date("August 30, 2022 00:00:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current)
            } else {
                // update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }
    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    });
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='gbos'>
            <div className="ff-image">
                <div className="media reck">
                    <div>
                        <p className="pp">Respecta</p>
                    </div>
                    {sidebar === true ?
                        (<>
                            <ImCross className='cross' onClick={showSidebar} /></>)
                        : (<><i onClick={showSidebar} className="fas fa-bars"></i></>)}
                </div>
                <header className='akoba fle' id={sidebar === true ? "newBlog" : "blog"}>
                    <div>
                        <p className="logo ol">Respecta</p>
                    </div>
                    <nav className='nao'>
                        <ul className="nav-links flexo">
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

                <div className="oferlay">
                    <div className="adeola">
                        <h1 className="text-center h1-responsive">BIRTHDAY TRIBUTE FOR ADEOLA</h1>
                    </div>
                </div>
            </div>
            <br />
            <div className="second-adeola">
                <h3>SUBMIT YOUR TRIBUTE FOR ADEOLA</h3>
                <div className="woos">
                    <form className="record-video" action="/action_page.php">
                        <label class="custom-file-upload" >
                            <input onChange={onChange} className='foli' type="file" />
                            <IoMdVideocam className='go' />
                        </label>
                        <label htmlFor="">
                            <input type="submit" placeholder='UPLOAD' />
                            <p className='recor'>RECORD / UPLOAD <br /> YOUR VIDEOS</p>
                        </label>
                    </form>
                    
                    <div className="img-sitting">
                        <div className="sito">
                            <img src={cheat} alt="" />
                            <img src={cheat} alt="" />
                            <img src={cheat} alt="" />
                        </div>
                        <div className="js-countdown">
                            <p>TRIBUTE DUE DATE 10/27/21</p>
                            <div className="timer">
                                <div className="days">
                                    <p>{timerDays}</p>
                                    <p><small>DAYS</small></p>
                                </div>
                                <div className="days">
                                    <p>{timerHours}</p>
                                    <p><small>HOURS</small></p>
                                </div>
                                <div className="days">
                                    <p>{timerMinutes}</p>
                                    <p><small>MINS</small></p>
                                </div>
                                <div className="days">
                                    <p>{timerSeconds}</p>
                                    <p><small>SECS</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="remid">
                        <div className="reminder-part">
                            <div className="reminder1">
                                <p className='remin'>REMINDERS</p>
                                <div className="digits">
                                    <h4>4</h4>
                                    <div className="subb">
                                        <p>SENT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="stroke"></div>
                            <div className="reminder2">
                                <p className='vid'>VIDEOS</p>
                                <div className="digits pls">
                                    <h4>6</h4>
                                    <div className="subb">
                                        <p className='se'>SUBMITTED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="what-know">
                            <p className='wap'>WHAT YOU NEED TO KNOW</p>
                            <div className="content-know">
                                <p> <i>ORGANIZED BY OMISAKIN OLAWOLE</i> </p>
                                <div className="this-for">
                                    <p><b>Who is this for?</b></p>
                                    <p className='second-p'>Adeola</p>
                                </div>
                                <div className="this-for">
                                    <p><b>What are we doing?</b></p>
                                    <p className='second-p hav'>We are creating a video montage (or "Tribute") for Iniolu. It will only take you a minute to film and submit yur video.It should make for an unforgettable gift that shares our collective love and appreciation. Don't be the fast to submit!</p>
                                </div>
                                <div className="this-for">
                                    <p><b>Questions to answer in your video</b></p>
                                    <ul>
                                        <li>What is your favourite thing about Adeola?</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="last-friend">
                            <div className="copy">
                                <i className="fas fa-phone"></i>
                                <p>Copy Link</p>
                            </div>
                            <div className="copyy">
                                <p>Publish & Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Friend