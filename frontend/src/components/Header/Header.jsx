import React, { useRef, useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import logo1 from '../../assets/images/logo-removebg-preview.png'
import './Header.css'
const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {

  const headerRef = useRef(null);

  const stickyHeader = () => {
    if (window.pageYOffset > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => window.removeEventListener('scroll', stickyHeader);
  }, []);

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          <div className="logo">
            <img src={logo1} alt="" />
          </div>

          <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5'>
              {nav_links.map((item, index) => (
                <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : " "}>{item.display}</NavLink>
                </li>
              ))
              }
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap 4">
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className='btn secondary__btn' >
                <Link to='/login'>Login</Link>
              </Button>
              <Button className='btn primary__btn'>
                <Link to='/register'>Register</Link>
              </Button>
            </div>

            <span className='mobile_menu'>
              <i className='ri-menu-line'></i>
            </span>

          </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header
