import React, {useState, useEffect} from 'react'
import "./Notification.css"
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom'

const Notification = () => {
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
  return (
    <div>
                <header className="Header">
              <Link to="/" className="needed">  <p className="logo">Respecta</p></Link>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <nav className="Nav">
                        <Link to="/memory" className="needed">Memories</Link>
                        <Link to="/blog" className="needed">Blog</Link>
                        <Link to="/pricing" className="needed">Pricing</Link>
                        <Link to="/" className="needed"><div><i class="fa-regular fa-user">Adeboye</i></div></Link>
                    </nav>
                </CSSTransition>
                <button onClick={toggleNav} className="Burger">
                    🍔
                </button>
            </header>
            <div className="notifications">
                <p>Notifications</p>
            </div>
    </div>
  )
}

export default Notification