import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const rootDirectory = useRouter().basePath

  const [navActive, setNavActive] = useState(false)
  const navToggle = () => {
    setNavActive(!navActive);
    setSubMenuActive(false)
  }

  const [subMenuActive, setSubMenuActive] = useState(false)
  const subMenuToggle = () => {
    setSubMenuActive(!subMenuActive);
  }

  const closeNavBar = () => {
    setNavActive(false);
    setSubMenuActive(false)
  }
  
  return (
    <>
      <header className="bg">
      <Link href="https://asianliftbd.com/"><Image className="logo" src="/ALBw.svg" alt="Logo" width={200} height={0}/></Link>
        <nav className={navActive ? "active" : ""}>
          <ul>
            <li onClick={closeNavBar}><Link href={`${rootDirectory}/`}>Home</Link></li>
            <li onClick={subMenuToggle} className={subMenuActive ? "submenu active" : "submenu"}>Products
              <ul>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/passenger-lift`}>Passenger Lift</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/cargo-lift`}>Cargo Lift</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/hospital-lift`}>Hospital Lift</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/capsule-lift`}>Capsule Lift</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/escalator`}>Escalator</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/dumbwaiter`}>Dumbwaiter</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/generator`}>Generator</Link></li>
                <li onClick={closeNavBar}><Link href={`${rootDirectory}/product/lift-accessories`}>Lift Accessories</Link></li>
              </ul>
            </li>
            <li onClick={closeNavBar}><Link href={`${rootDirectory}/projects`}>Projects</Link></li>
            <li onClick={closeNavBar}><Link href={`${rootDirectory}/services`}>Services</Link></li>
            <li onClick={closeNavBar}><Link href={`${rootDirectory}/about`}>About</Link></li>
            <li onClick={closeNavBar}><Link href={`${rootDirectory}/contact`}>Contact</Link></li>
          </ul>
        </nav>
        <div className="nav-toggler" onClick={navToggle}>
          <span className={navActive ? "toggle-icon active" : "toggle-icon"}><span></span><span></span><span></span></span>
        </div>      
      </header>
    </>
  )
}
export default Header