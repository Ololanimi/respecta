import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"
import { AiOutlineCheck } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs';
import spec from '../Images/spec.png'
import master from "../Images/master.png"
import { CgProfile } from 'react-icons/cg'
import { ImCross } from "react-icons/im"
import imga from "../Images/cont.png"
import visa from "../Images/visa.png"
import { AiOutlineYoutube } from "react-icons/ai"
import "./Settings.css"

const Settings = () => {
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
        <div className="gbos">
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
            <div className="big-setting">
                <div className="head-setting">
                    <h2>Settings</h2>
                    <div class="tabset">
                        <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
                        <label for="tab1" className='pro-set'>Profile</label>
                        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
                        <label for="tab2" id="tab2" className='pas-set'>Password</label>
                        <input type="radio" name="tabset" id="tab3" aria-controls="dunkles" />
                        <label for="tab3" id="tab3" className='pay-set'>Payment Method</label>

                        <div class="tab-panels">
                            <section id="marzen" className="tab-panel">
                                <div className="begin">
                                    <h3>Profile</h3>
                                    <p>Update your photo and personal details here</p>
                                </div>
                                <div className="wosp"></div>
                                <br />
                                <div className="input-dive">
                                    <h4>Username</h4>
                                    <input type="text" />
                                </div>
                                <div className="wosp"></div>
                                <br />
                                <div className="input-dive">
                                    <h4 className='emm'>Email</h4>
                                    <input type="email" placeholder='example@email.com' />
                                </div>
                                <div className="wosp"></div>
                                <br />
                                <div className="photo-set">
                                    <div className="ph-beg">
                                        <h4>Your Photo</h4>
                                        <p>This will be displayed on your profile</p>
                                    </div>
                                    <img src={spec} alt="" />
                                    <div className="up-del">
                                        <p>Delete</p>
                                        <p className='del'>Update</p>
                                    </div>
                                </div>
                                <div className="wosp"></div>
                                <br />
                                <div className="bio-set">
                                    <div className="bio">
                                        <h4>Your Bio</h4>
                                        <p>Write a short introduction.</p>
                                    </div>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="wosp"></div>
                                <br />
                                <div className="job-set">
                                    <div>
                                        <h4>Job title</h4>
                                    </div>
                                    <div className="in-pro">
                                        <input type="text" />
                                        <div className="show">
                                            <i class="fa-regular fa-square-check"></i>
                                            <p>Show my job title on my profile</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="rauchbier" className="tab-panel">
                                <h3>Account settings</h3>
                                <div className="account-set">
                                    <div className="account-pic">
                                        <div className="a-pic">A</div>
                                        <div className="hm-set">
                                            <div className="name-set">
                                                <p>Alexander wollis</p>
                                                <p>wollisalexander@gmail.com</p>
                                            </div>
                                            <p className='gog'>Manage your Goggle account</p>
                                        </div>
                                    </div>
                                    <div className="change-pass">
                                        <h3>Change password</h3>
                                        <div className="two-rows">
                                            <div className="first-row">
                                                <div className="old">
                                                    <p>Old password</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="new">
                                                    <p>New password</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="confirm">
                                                    <p>Confirm password</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="log-out">
                                                    <p>Log Out</p>
                                                    <i class="fa-solid fa-circle-minus"></i>
                                                </div>
                                                <div className="delete-account">
                                                    <p>Delete Account</p>
                                                    <i class="fa-solid fa-circle-xmark"></i>
                                                </div>
                                            </div>
                                            <div className="second-row">
                                                <div className="akoko">
                                                    <h3>Password requirements</h3>
                                                    <p>Your password needs to have</p>
                                                    <br />
                                                    <div className="second-akoko">
                                                        <div className="akoks">
                                                            <div className="icol">
                                                                <i class="fa-solid fa-check"></i>
                                                            </div>
                                                            <p>At least 8 characters</p>
                                                        </div>
                                                        <div className="akoks">
                                                            <div className="icol">
                                                                <i class="fa-solid fa-check"></i>
                                                            </div>
                                                            <p>At least one special character</p>
                                                        </div>
                                                        <div className="akoks">
                                                            <div className="icol">
                                                                <i class="fa-solid fa-check"></i>
                                                            </div>
                                                            <p>At least one number</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="dunkles" className="tab-panel">
                                <div className="begin">
                                    <h3>Payment method</h3>
                                    <p>Update your billings details and address</p>
                                </div>
                                <div className="woss"></div>
                                <br />
                                <div className="contact-email">
                                    <div className="word-emm">
                                        <h3>Contact email</h3>
                                        <p>Where should invoices be sent?</p>
                                    </div>
                                    <div className="radio-emm">
                                        <input type="radio" />
                                        <div className="worr">
                                            <h4>Sent to my account mail</h4>
                                            <p>examples@email.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="woss"></div>
                                <br />
                                <div className="card-details">
                                    <div className="word-emm">
                                        <h3>Card details</h3>
                                        <p>Select default payment method</p>
                                    </div>
                                    <div className="checkbox-div">
                                        <div className="visa">
                                            <div className="left-visa">
                                                <img src={visa} alt="" />
                                                <div className="left-in">
                                                    <p className='endi'>Visa ending in 1234</p>
                                                    <p>Expiry 06/3032</p>
                                                    <div className="set-default">
                                                        <p>Set as default</p>
                                                        <p className='edd'>Edit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right-visa">
                                                <div class="round">
                                                    <input type="checkbox" checked id="checkbox" />
                                                    <label for="checkbox"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="visa sep">
                                            <div className="left-master">
                                                <img src={master} alt="" />
                                                <div className="left-in">
                                                    <p className='endi'>Visa ending in 1234</p>
                                                    <p>Expiry 06/3032</p>
                                                    <div className="set-default">
                                                        <p>Set as default</p>
                                                        <p className='edd'>Edit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right-visa">
                                                <div class="round">
                                                    <input type="checkbox" checked id="checkbox" />
                                                    <label for="checkbox"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-payment">
                                            <p className='plu'>+</p>
                                            <p className='codw'>Add new payment method</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="woss"></div>
                                <br />
                                <div className="billing">
                                    <div className="word-emm">
                                        <h3>Billing and invoicing</h3>
                                        <p>Pick an account plan that fits your workflow</p>
                                    </div>
                                    <div className="button-download">
                                        <button className='buto'>
                                            <p className='doi'><BsDownload /></p>
                                            <p className='don'>Download</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="woss"></div>
                                <br />
                                <div className="billing-proper">
                                    <div className="word-emm">
                                        <h3>Billing</h3>
                                    </div>
                                    <div className="billing-history">

                                        <table>
                                            <thead>
                                                <tr className='reduc'>
                                                    <th style={{ padding: "0 50px" }} className='fix'>
                                                        <input type="checkbox" />
                                                        <p>Invoice</p>
                                                        <p className="bs"><BsArrowDown /></p>
                                                    </th>
                                                    <th className="ss">Status</th>
                                                    <th>Amount</th>
                                                    <th className='su'>Plan</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Dec</p>
                                                    </td>
                                                    <td className='move'>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Sept</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Aug</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Dec</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Dec</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>Jan</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>July</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                                <tr>
                                                    <td className='bop'>
                                                        <input type="checkbox" />
                                                        <p>April</p>
                                                    </td>
                                                    <td>
                                                        <div className="paid">
                                                            <p className='api'> <AiOutlineCheck /></p>
                                                            <p className='pa'>Paid</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>NGN #1000.00</p>
                                                    </td>
                                                    <td>Monthly plan</td>
                                                    <td className='download'>download</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings