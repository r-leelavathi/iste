import React, { useState } from 'react'
import logo from '../../assets/KPT LOGO.png'
import './Header.css'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header' >
      <img src={logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div style={{
          backgroundColor: 'var(--appColor)',
          padding: '0.5rem',
          borderRadius: '5px'
        }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt=""
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }}

          /></div>
      ) : (
        <ul className='header_Menu'>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='hero-section'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='About'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              About
            </Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='programs'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Programs
            </Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='plans-section'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Fee
            </Link></li>
            <li onClick={() => setMenuOpened(false)}>
            <Link
              to='registration'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Registration</Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='link_section'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Links</Link></li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='Committee'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Commitee
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to='join-us'
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Contact</Link></li>
        </ul>)}

    </div>
  )
}

export default Header
