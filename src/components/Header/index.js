// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="head-container">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img-logo"
      />
      <h1 className="title-header">Wave</h1>
    </div>
    <ul className="items-list">
      <li className="link-route">
        <Link to="/" className="navigator">
          Home
        </Link>
      </li>
      <li className="link-route">
        <Link to="/about" className="navigator">
          About
        </Link>
      </li>
      <li className="link-route">
        <Link to="/contact" className="navigator">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
