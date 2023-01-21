import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const rootDirectory = useRouter().basePath
  return (
    <>
      <header className="bg">
      <Link href="https://asianliftbd.com/"><Image className="logo" src="/ALBw.svg" alt="Logo" width={200} height={0}/></Link>
        <nav>
          <ul>
            <li><Link href={`${rootDirectory}/`}>Home</Link></li>
            <li className="submenu">Products
              <ul>
                <li><Link href={`${rootDirectory}/product/passenger-lift`}>Passenger Lift</Link></li>
                <li><Link href={`${rootDirectory}/product/cargo-lift`}>Cargo Lift</Link></li>
                <li><Link href={`${rootDirectory}/product/hospital-lift`}>Hospital Lift</Link></li>
                <li><Link href={`${rootDirectory}/product/capsule-lift`}>Capsule Lift</Link></li>
                <li><Link href={`${rootDirectory}/product/escalator`}>Escalator</Link></li>
                <li><Link href={`${rootDirectory}/product/dumbwaiter`}>Dumbwaiter</Link></li>
                <li><Link href={`${rootDirectory}/product/generator`}>Generator</Link></li>
                <li><Link href={`${rootDirectory}/product/lift-accessories`}>Lift Accessories</Link></li>
              </ul>
            </li>
            <li><Link href={`${rootDirectory}/projects`}>Projects</Link></li>
            <li><Link href={`${rootDirectory}/services`}>Services</Link></li>
            <li><Link href={`${rootDirectory}/about`}>About</Link></li>
            <li><Link href={`${rootDirectory}/contact`}>Contact</Link></li>
          </ul>
        </nav>
        <div className="nav-toggler">
        <span className="toggle-icon"><span></span><span></span><span></span></span>
      </div>      
      </header>
    </>
  )
}
export default Header