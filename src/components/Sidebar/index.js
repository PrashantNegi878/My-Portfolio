import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {Link,NavLink} from 'react-router-dom'
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons'

const Sidebar =()=>
{
    return (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={LogoS} alt="logo"></img>
    <img className="sub-logo" src={LogoSubtitle} alt="Logo-Subtitle"></img>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink> 
        <NavLink className="about-link" exact="true" activeclassname="active" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink> 
        <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
            <FontAwesomeIcon icon={faReact} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>  
    </nav>
    <ul>
        <li>
          <a target="_blank" rel="noreferrer" 
          href="https://www.linkedin.com/in/prashant-negi-4b4850153/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>  
        </li>
        <li>
          <a target="_blank" rel="noreferrer" 
          href="https://github.com/PrashantNegi878">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>  
        </li>
    </ul>
    </div>
    )
}

export default Sidebar