import React,{ useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
//scroll đến phần mình muốn

const Header = () => {
  const mb = window.innerWidth<=768?true:false
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        {(menuOpen===false && mb ===true) 
        ? 
          <div
            style={{  backgroundColor:'var(--appColor)',
                      padding: '0.5rem',
                      borderRadius:'5px'
                    }}
            onClick={() => setMenuOpen(true)}
          >
              <img 
                  src={bars} 
                  alt="" 
                  style={{width:'1.5rem',height:'1.5rem'}}
              />
          </div>
        :
          <ul className='header-menu'>
              <li>
                  <Link
                      onClick={() => setMenuOpen(false)}
                      activeClass='active'
                      to = 'header'
                      spy={true}
                      smooth={true}
                  >
                    Home
                  </Link>
              </li>
              <li>
                  <Link
                      onClick={() => setMenuOpen(false)}
                      to = 'programs'
                      spy={true}
                      smooth={true}
                  >
                    Programs
                  </Link>
              </li>
              <li>
                  <Link
                      onClick={() => setMenuOpen(false)}
                      to = 'reasons'
                      spy={true}
                      smooth={true}
                  >Why us</Link>
              </li>
              <li>
                  <Link
                      onClick={() => setMenuOpen(false)}
                      to = 'plans'
                      spy={true}
                      smooth={true}
                  >Plans</Link>
              </li>
              <li >
                <Link
                    onClick={() => setMenuOpen(false)}
                    to = 'testimonials'
                    spy={true}
                    smooth={true}
                >
                      Testimonials
                </Link>
              </li>
          </ul>
        }
    </div>
  )
}

export default Header
