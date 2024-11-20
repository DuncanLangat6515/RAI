import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';
import Logo from '../../images/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const toggleDropdown = (e) => {
      if (document.querySelector('body').classList.contains('mobile-nav-active')) {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target;
        const submenu = target.nextElementSibling || target.parentElement?.nextElementSibling;

        if (submenu && submenu.tagName === 'UL') {
          submenu.classList.toggle('dropdown-active');
        } else {
          console.error('Dropdown submenu not found or is not a UL');
        }
      }
    };

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const dropdowns = document.querySelectorAll('.navmenu .dropdown > a');

    if (mobileNavToggleBtn) {
      const mobileNavToggle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        setIsMobile(prevState => !prevState);
      };

      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
      dropdowns.forEach(dropdown => dropdown.addEventListener('click', toggleDropdown));

      return () => {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
        dropdowns.forEach(dropdown => dropdown.removeEventListener('click', toggleDropdown));
      };
    }
  }, []);

  useEffect(() => {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const toggleScrollTop = () => {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      };

      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      return () => {
        scrollTop.removeEventListener('click', toggleScrollTop);
        window.removeEventListener('load', toggleScrollTop);
        document.removeEventListener('scroll', toggleScrollTop);
      };
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = (e) => {
    // Close the mobile navigation
    document.querySelector('body').classList.remove('mobile-nav-active');
    setIsMobile(false); // Ensure isMobile state is updated

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.remove('bi-x');
      mobileNavToggleBtn.classList.add('bi-list');
    }
  
    const isDropdownLink = e.target.closest('.dropdown') !== null;

    if (isDropdownLink) {
      const dropdown = e.target.closest('.dropdown');
      if (dropdown) {
        const submenu = dropdown.querySelector('ul');
        if (submenu) {
          submenu.classList.remove('dropdown-active');
        }
      }
    }
  };
  
  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header id="header" className="header border-slate-400 d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className={`logo d-flex align-items-center me-auto me-xl-0 ${isActive('/')}`} onClick={handleLinkClick}>
          <img src={Logo} alt='Logo' />
        </Link>

        <nav id="navmenu" className={`navmenu ${isMobile ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={handleLinkClick}>About</Link></li>
            <li className="dropdown">
              <Link to="#" onClick={handleLinkClick}>
                <span>Who we Serve</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="#">Responsible AI for Students</Link></li>
                <li><Link to="#">Responsible AI for Kids</Link></li>
                <li><Link to="#">Responsible AI for Developers</Link></li>
                <li><Link to="#">Responsible AI for Business</Link></li>
              </ul>
            </li>            <li><Link to="/courses" className={isActive('/courses')} onClick={handleLinkClick}>Courses</Link></li>
            <li><Link to="/events" className={isActive('/events')} onClick={handleLinkClick}>Events</Link></li>
            <li><Link to="/team" className={isActive('/team')} onClick={handleLinkClick}>Team</Link></li>
            <li><Link to="/blog" className={isActive('/blog')} onClick={handleLinkClick}>Blog</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')} onClick={handleLinkClick}>Gallery</Link></li>
            <li className="dropdown">
              <Link to="#" onClick={handleLinkClick}>
                <span>Resources</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link to="#" onClick={handleLinkClick}>
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={handleLinkClick}>Contact</Link></li> 
            <li><Link to="/donate" className={isActive('/donate')} onClick={handleLinkClick}>Donate</Link></li>
          </ul>
          <i className={`mobile-nav-toggle ${isMobile ? 'bi-x' : 'bi-list'}`} onClick={() => setIsMobile(!isMobile)}></i>
        </nav>
        <Link to="/login" className="btn-getstarted" onClick={handleLinkClick}>Get Started</Link>
      </div>
    </header>
  );
};

export default Navbar;
