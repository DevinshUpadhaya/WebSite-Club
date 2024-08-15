import logo2 from '../../assets/Logo2.png'
import search from '../../assets/search.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../Login/Login.jsx'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className='headerlist'>
        <li className='logo1'><i className="fa-brands fa-linkedin"></i></li>
        <li className='logo'><i className="fa-brands fa-square-twitter"></i></li>
        <li className='logo'><i className="fa-brands fa-google-plus"></i></li>
        <li className='logo'><i className="fa-brands fa-facebook"></i></li>
        <li className='logo'><i className="fa-brands fa-instagram"></i></li>
        <li className="right-align1 with-line">
          <a href="/Login" style={{ textDecoration: 'none', color: 'white' }}>
            <i></i> JOB SEEKERS LOGIN
          </a>
        </li>


        <li className="right-align">EMPLOYER LOGIN</li>
        <li className="right-align">PARTNERS LOGIN</li>
        <li className="right-align"><a href="mailto:business@ibasearch.com" style={{ textDecoration: 'none' }}><i className="fa-solid fa-envelope" style={{ color: 'white' }}></i>  business@ibasearch.com</a></li>
        <li className="right-align2"><a href="tel: +91 8802756666, 8802706666" style={{ textDecoration: 'none' }}><i className="fa-solid fa-phone" style={{ color: 'white' }}></i> +91 8802756666, +91 8802706666</a></li>
      </ul>
      <div className="nav-logo">
        <img src={logo2} className='nav-img' alt="Logo" />
      </div>
      <div className="filter-container">
        <span className="filter-text">Filter by:</span>
        <select className="filter-dropdown">
          <option value="job">Job</option>
          <option value="event">Event</option>
          <option value="Editorial">Editorial</option>
          <option value="Courses">Courses</option>
        </select>
      </div>


      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search Item......" />
        <button className='searchbtn' id="search-button">
          <a><i className="fa-solid fa-magnifying-glass"></i></a>
        </button>
      </div>


      <ul className="nav-menu">

        <li class="dropdown-parent">ABOUT US
          <ul className="dropdown">
            <li>CHAIRMAN</li>
            <li>BOARD OF DIRECTORS</li>
            <li>BOARD OF ADVISORS</li>
            <li>PANEL OF CONSULTANTS</li>
            <li>STRATEGIC BUSINESS PARTNERS</li>
            <li>FRANCHISE PARTNER</li>
          </ul>
        </li>
        <li class="dropdown-parent">GLOBAL SEARCH COMPANY
          <ul className="dropdown">
            <li>ADVISORY & CONSULTING</li>
            <li>COACHING & MENTORSHIP</li>
            <li>ASSESSMENT & REPORTS</li>
          </ul>
        </li>
        <li class="dropdown-parent">VRK ELITE CLUB
          <ul className="dropdown">
            <li>WHO WE ARE?</li>
            <li>WHAT IS UNIQUE ABOUT US?</li>
            <li>HOW DO YOU BENEFIT?	</li>
            <li>HOW DO WE OFFER?</li>
            <li>WHO SHOULD JOIN US?</li>
          </ul>
        </li>
        <li class="dropdown-parent">CXO CLUB
          <ul className="dropdown">
            <li>WHO WE ARE?</li>
            <li>WHAT IS UNIQUE ABOUT US?</li>
            <li>HOW DO YOU BENEFIT?	</li>
            <li>HOW DO WE OFFER?</li>
            <li>WHO SHOULD JOIN US?</li>
          </ul>
        </li>
        <li class="dropdown-parent">DIVERSITY CLUB
          <ul className="dropdown">
            <li>WHO WE ARE?</li>
            <li>WHAT IS UNIQUE ABOUT US?</li>
            <li>HOW DO YOU BENEFIT?	</li>
            <li>HOW DO WE OFFER?</li>
            <li>WHO SHOULD JOIN US?</li>
          </ul>
        </li>
        <li class="dropdown-parent">EVENTS & ENTERTAINMENT
          <ul className="dropdown">
            <li>SPORTS</li>
            <li>MUSIC CONCERTS</li>
            <li>WORKSHOPS</li>
            <li>FORUMS</li>
            <li>AUCTIONS & ART FAIRS</li>
          </ul>
        </li>
        <li class="dropdown-parent">BUSINESS OPPORTUNITIES
        </li>
        <li class="dropdown-parent">MARKETPLACE
          <ul className="dropdown">
            <li>LUXURY HOSPITALITY, TRAVEL & HOLIDAYS</li>
            <li>LUXURY BUSINESS TRADING</li>
            <li>LUXURY REAL ESTATE TRADING</li>
            <li>HEALTHCARE & WELLNESS</li>
          </ul>
        </li>

        <li class="dropdown-parent">MANAGEMENT SERVICES
          <ul className="dropdown">
            <li>GLOBAL RETAINED SEARCH</li>
            <li>ADVISORY & CONSULTING</li>
            <li>STRATEGIC CORPORATE GOVERNANCE ADVISORY</li>
            <li>MEDIA ADVERTISING & PRODUCTION</li>
            <li>BRANDING,PR & IMAGE CONSULTING</li>
            <li>LEGAL ADVISORY</li>
            <li>HR TRANSFORMATIONAL CONSULTING</li>

          </ul>

        </li>
        <li class="dropdown-parent">COACHING & MENTORSHIP
          <ul className="dropdown">
            <li>ENTERPRENEURIAL MENTORSHIP</li>
            <li>SUCESSION COACHING & TEAM MENTORSHIP</li>
            <li>TEAM DEVELOPMENT & TEAM BUILDING</li>
            <li>ASSESSMENTS & REPORTS</li>


          </ul>

        </li>
        <li>BUSINESS TIE UPS</li>
        <li>NEWS ROOM</li>
        <li>CAREER WITH US</li>
        <li>CONTACT</li>
      </ul>



    </div>
  )
}

export default Navbar