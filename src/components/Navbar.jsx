import './Navbar.css'
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <header className='navbar'>
            <div className="navbar-container">
                <a href="#" className='logo'>Creative Studio</a>
                <nav>
                    <ul className='nav-links'>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                {/* 3. Add onClick and conditionally render the icon */}
                <div className="theme-icon" onClick={toggleTheme}>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}

                </div>
            </div>
        </header>
    )
}
export default Navbar;
