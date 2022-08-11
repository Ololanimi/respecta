import react, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);

    const activation = () => {
        setNavActive(true)
    }

    const deActivation = () => {
        setNavActive(false)
    }

    return (
        <div className="nav-cont">
{navActive ? (<>            <button onClick={() => deActivation()}>=</button>
</>):(<>            <button onClick={() => activation()}>x</button>
</>)}

            <nav className={navActive ? "topnav" : " mobile "}>

                <div className="logo">
                    <p>7//</p>
                </div>
                <div className="links">
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar