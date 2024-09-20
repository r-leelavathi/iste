import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import Logo from '../../assets/KPT LOGO.png'

const Footer = () => {
    return (
        <div className='Footer-container'>
            <hr />
            <div className='logo-f'>
                <img src={Logo} alt="" />
            </div>

            <div className="footer">

                <h2>Karnataka (Govt.) Polytechnic, Mangaluru</h2>
                <p>Kadri hills, Mangaluru-575 004,
                    Dakshina Kannada District, Karnataka</p>
                <p>Ph. # 0824-2211636</p>
                <p> Email: kptiste@gmail.com</p>
                {/* <div className="social-links">
                    <img src={github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div> */}

                <div className='copyright-text'>
                    <p>&copy; 2024 KPT MANGALURU</p>
                </div>
            </div>

            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer
