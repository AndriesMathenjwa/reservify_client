import { useContext } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { user} =useContext(AuthContext);

  return (
    <div className="navbar">
            <FontAwesomeIcon className="navIcon" icon={faBars} />
      <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Reservify</span>
        </Link> 
       { user ? user.username : ( <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>

        </div>
        )}
                  
      </div>
    </div>
  )
}

export default Navbar