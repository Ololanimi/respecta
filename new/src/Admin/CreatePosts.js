import React, { useState, useEffect } from 'react'
import { CSSTransition } from "react-transition-group";
import ckeditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { Link } from "react-router-dom"
import { CgProfile } from 'react-icons/cg'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import spec from '../Images/spec.png'
// import ReactHtmlParser from 'react-html-parser'
const CreatePosts = () => {
    const [addData, setVal] = useState("");
    const [addedData, showData] = useState(0);
    const handleChange = (e, editor) => {
        const data = editor.getData();
        setVal(data);
    }
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
                    <div className="nb">
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
                        <div className="create-po pupu">
                            <div className={sidebar ? "admin-content" : "admin-content admin-content--open"} onClick={toggleSidebar}>
                                <div className="button-group pl">
                                    <div className="creat">
                                        <Link className='mn' to="/createpost">Add Posts</Link>
                                    </div>
                                    <div className="creat shif">
                                        <Link className='mn' to="/">Manage Posts</Link>
                                    </div>
                                </div>
                                <div className="content poli">
                                    <h2 className="page-title pol">Create Posts</h2>
                                    <br />
                                    <div className="input-cont">
                                        <form action="">
                                            <div className="form-cont">
                                                <label htmlFor="">Name</label>
                                                <input type="text" />
                                            </div>
                                            <br />
                                            <div className="form-cont edic">
                                                <label htmlFor="">Message</label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    onInit={editor => {
                                                        //this triggers our applicaton
                                                    }}
                                                />
                                            </div>
                                            <br />
                                            <div className="form-cont">
                                                <label htmlFor="">Topics</label>
                                                <select name="" id="">
                                                    <option value="">Select</option>
                                                    <option value="">Family</option>
                                                    <option value="">Work</option>
                                                </select>
                                            </div>
                                        </form>
                                        <br />
                                        <div className="save-users">
                                            <p>Save Posts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePosts