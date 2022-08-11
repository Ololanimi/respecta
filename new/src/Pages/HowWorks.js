import React, { useState, useEffect } from 'react'
import "./HowWorks.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CgProfile } from 'react-icons/cg'
import { faArrowUp} from "@fortawesome/free-solid-svg-icons"
import fm from "../Images/fm.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { ImCross } from "react-icons/im"
import spec from '../Images/spec.png'
import { GrFacebook } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"

const HowWorks = () => {
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
                                    <input type="checkbox" id="my-dropdown" value="" name="my-checkbox" />
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
                        <h1 className="text-center cc how-page-text h1-responsive">How it works.</h1>
                        <div className="home-button text-center fadeIn">
                            <Link to='/memory' className="btn homepage-btn-1 btn-lg mt-2">+ Create a memory</Link>
                            <Link to='/createuser' className="btn homepage-btn-2 btn-lg mt-2">See how it works</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center home-loved-text p-responsive">See how others have honored their loved <br /><span>ones with Memories.</span> </p>
            <div className="loved-ones">
                <div className="write-post-container">
                    <div className="user-profil">
                        <div className="img-koko">
                            <img src={fm} alt="" />
                        </div>
                        <div className='michael'>
                            <h4>Michael Jones</h4>
                            <small>5h</small>
                        </div>
                    </div>
                    <p className="h5-responsive loop text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis id dolore et atque temporibus numquam tenetur suscipit, soluta quaerat delectus aut eum possimus dolor dolorum facere modi unde tempore.
                        Consequatur, ut quas! Dolorum unde ullam et recusandae perferendis repellat dolorem ratione reprehenderit, tempora in, optio provident modi porro labore rerum? Animi unde deserunt et, consectetur nihil natus accusamus architecto?
                        Ipsam ipsa eligendi error alias. Deleniti hic saepe nemo exercitationem ab dolorum quae, dolor necessitatibus sapiente esse error a doloremque veniam, cupiditate voluptates. Odio explicabo adipisci aspernatur, sequi reiciendis ipsa? <br /> <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque facere, dolores labore culpa unde ducimus quam molestiae fuga porro voluptatibus ut reiciendis quasi commodi tempora soluta a repellendus itaque. Sint!
                        Esse delectus doloremque quidem officia quo nulla ipsa possimus! Consequatur nam ab soluta consectetur sapiente ut, repudiandae minus doloremque illo repellat optio sed quae ipsum ad nesciunt? Earum, alias illum.
                        Nulla omnis beatae veritatis enim expedita similique adipisci iusto, fugiat ab debitis, magnam rerum corrupti quasi at soluta ad optio nam asperiores odit. Voluptates, vero? Aliquid tempore facere doloribus accusamus? <br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore numquam atque quidem, eos magnam modi! Maiores quos accusantium repellendus iste illum architecto exercitationem reprehenderit placeat? Amet, architecto. Dolor, dolorem?
                        Vitae atque qui adipisci doloremque alias delectus nulla iusto commodi, debitis sapiente aspernatur culpa? Dolorum nobis deserunt fugit dignissimos vero! Cum, officiis quo repellendus quaerat libero sunt voluptatum molestiae quas?
                        Ratione ducimus nobis reprehenderit vero quidem id incidunt fuga architecto, placeat eveniet culpa optio nostrum in. Explicabo architecto nam molestiae veniam, non perspiciatis nesciunt quasi provident laborum iste vero cupiditate.
                        Omnis molestiae voluptatibus placeat dolorem harum optio quasi amet non est laborum nesciunt delectus, ad, suscipit beatae eligendi ea quod voluptas odit mollitia ullam eaque! Tempore dolor nam aliquid voluptas.</p>
                    <br />
                    <hr />
                    <div className="post-profile-icon">
                        <img src={fm} alt="" />
                        <div className="messag">
                            <input type="text" placeholder="Comment ...." />
                        </div>
                    </div>
                </div>
                <br />
                <div className="write-post-container">
                    <div className="user-profil">
                        <div className="img-koko">
                            <img src={fm} alt="" />
                        </div>
                        <div className='michael'>
                            <h4>Michael Jones</h4>
                            <small>5h</small>
                        </div>
                    </div>
                    <p className="h5-responsive loop text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis id dolore et atque temporibus numquam tenetur suscipit, soluta quaerat delectus aut eum possimus dolor dolorum facere modi unde tempore.
                        Consequatur, ut quas! Dolorum unde ullam et recusandae perferendis repellat dolorem ratione reprehenderit, tempora in, optio provident modi porro labore rerum? Animi unde deserunt et, consectetur nihil natus accusamus architecto?
                        Ipsam ipsa eligendi error alias. Deleniti hic saepe nemo exercitationem ab dolorum quae, dolor necessitatibus sapiente esse error a doloremque veniam, cupiditate voluptates. Odio explicabo adipisci aspernatur, sequi reiciendis ipsa? <br /> <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque facere, dolores labore culpa unde ducimus quam molestiae fuga porro voluptatibus ut reiciendis quasi commodi tempora soluta a repellendus itaque. Sint!
                        Esse delectus doloremque quidem officia quo nulla ipsa possimus! Consequatur nam ab soluta consectetur sapiente ut, repudiandae minus doloremque illo repellat optio sed quae ipsum ad nesciunt? Earum, alias illum.
                        Nulla omnis beatae veritatis enim expedita similique adipisci iusto, fugiat ab debitis, magnam rerum corrupti quasi at soluta ad optio nam asperiores odit. Voluptates, vero? Aliquid tempore facere doloribus accusamus? <br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore numquam atque quidem, eos magnam modi! Maiores quos accusantium repellendus iste illum architecto exercitationem reprehenderit placeat? Amet, architecto. Dolor, dolorem?
                        Vitae atque qui adipisci doloremque alias delectus nulla iusto commodi, debitis sapiente aspernatur culpa? Dolorum nobis deserunt fugit dignissimos vero! Cum, officiis quo repellendus quaerat libero sunt voluptatum molestiae quas?
                        Ratione ducimus nobis reprehenderit vero quidem id incidunt fuga architecto, placeat eveniet culpa optio nostrum in. Explicabo architecto nam molestiae veniam, non perspiciatis nesciunt quasi provident laborum iste vero cupiditate.
                        Omnis molestiae voluptatibus placeat dolorem harum optio quasi amet non est laborum nesciunt delectus, ad, suscipit beatae eligendi ea quod voluptas odit mollitia ullam eaque! Tempore dolor nam aliquid voluptas.</p>
                    <br />
                    <hr />
                    <div className="post-profile-icon">
                        <img src={fm} alt="" />
                        <div className="messag">
                            <input type="text" placeholder="Comment ...." />
                        </div>
                    </div>
                </div>
                <br />
                <div className="write-post-container">
                    <div className="user-profil">
                        <div className="img-koko">
                            <img src={fm} alt="" />
                        </div>
                        <div className='michael'>
                            <h4>Michael Jones</h4>
                            <small>5h</small>
                        </div>
                    </div>
                    <p className="h5-responsive loop text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis id dolore et atque temporibus numquam tenetur suscipit, soluta quaerat delectus aut eum possimus dolor dolorum facere modi unde tempore.
                        Consequatur, ut quas! Dolorum unde ullam et recusandae perferendis repellat dolorem ratione reprehenderit, tempora in, optio provident modi porro labore rerum? Animi unde deserunt et, consectetur nihil natus accusamus architecto?
                        Ipsam ipsa eligendi error alias. Deleniti hic saepe nemo exercitationem ab dolorum quae, dolor necessitatibus sapiente esse error a doloremque veniam, cupiditate voluptates. Odio explicabo adipisci aspernatur, sequi reiciendis ipsa? <br /> <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque facere, dolores labore culpa unde ducimus quam molestiae fuga porro voluptatibus ut reiciendis quasi commodi tempora soluta a repellendus itaque. Sint!
                        Esse delectus doloremque quidem officia quo nulla ipsa possimus! Consequatur nam ab soluta consectetur sapiente ut, repudiandae minus doloremque illo repellat optio sed quae ipsum ad nesciunt? Earum, alias illum.
                        Nulla omnis beatae veritatis enim expedita similique adipisci iusto, fugiat ab debitis, magnam rerum corrupti quasi at soluta ad optio nam asperiores odit. Voluptates, vero? Aliquid tempore facere doloribus accusamus? <br /><br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore numquam atque quidem, eos magnam modi! Maiores quos accusantium repellendus iste illum architecto exercitationem reprehenderit placeat? Amet, architecto. Dolor, dolorem?
                        Vitae atque qui adipisci doloremque alias delectus nulla iusto commodi, debitis sapiente aspernatur culpa? Dolorum nobis deserunt fugit dignissimos vero! Cum, officiis quo repellendus quaerat libero sunt voluptatum molestiae quas?
                        Ratione ducimus nobis reprehenderit vero quidem id incidunt fuga architecto, placeat eveniet culpa optio nostrum in. Explicabo architecto nam molestiae veniam, non perspiciatis nesciunt quasi provident laborum iste vero cupiditate.
                        Omnis molestiae voluptatibus placeat dolorem harum optio quasi amet non est laborum nesciunt delectus, ad, suscipit beatae eligendi ea quod voluptas odit mollitia ullam eaque! Tempore dolor nam aliquid voluptas.</p>
                    <br />
                    <hr />
                    <div className="post-profile-icon">
                        <img src={fm} alt="" />
                        <div className="messag">
                            <input type="text" placeholder="Comment ...." />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <footer className='ffo'>
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
                    <div className="repo">
                        <p>Respecta 2022, made with love in Nigeria, Ibadan city</p>
                    </div>                   <div className="unexp">
                        <p>Terms & Conditions</p>
                        <p className='wop'>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HowWorks