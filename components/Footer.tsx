import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const rootDirectory = useRouter().basePath
  return(
    <>
      <footer className="bg">
        <div className="container">
          <div className="row">
            
            <div className="col-md-12 col-lg-4 mt-2">
              <Image className="ft_logo" src="/ALBw.svg" alt="Asian Lift Bangladesh Logo" width={0} height={0}/>
              <p>Elevator (Lift), Escalator, Generator and all other lifting equipments Supplier, Installation and Maintenance Provider</p>
              <h3 className="ft_title">Stay in touch</h3>
              <ul className="social">
                <Link href="https://www.facebook.com/asianliftbangladesh" className="fb" target="_blank" rel="noopener"><i className="fi ic-fb"></i></Link>
                <Link href="https://www.linkedin.com/company/asian-lift-bangladesh/" className="li" target="_blank" rel="noopener"><i className="fi ic-li"></i></Link>
                <Link href="https://www.youtube.com/channel/UCDS_06KrmN5TRu5RksfwJLw" className="yt" target="_blank" rel="noopener"><i className="fi ic-yt"></i></Link>
              </ul>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <h3 className="ft_title">Explore</h3>
              <ul>
                <li><Link className="white" href={`${rootDirectory}/projects`}> Our Projects</Link></li>
                <li><Link className="white" href={`${rootDirectory}/services`}> Our Services</Link></li>
                <li><Link className="white" href={`${rootDirectory}/about`}> Our Team</Link></li>
                <li><Link className="white" href={`${rootDirectory}/product/lift-accessories`}>Spare Parts</Link></li>
                <li><Link className="white" href="https://ahsanenterprise.business.site/" target="_blank" rel="noopener">C&amp;F Agent</Link></li>
              </ul>
            </div>
            
            <div className="col-md-6 col-lg-4 text-left">
              <h3 className="ft_title">Contact Us</h3>
              <div className="ft_ad">
              <ul>
                <li><i className="fi ic-map"></i>
                  <address>Noor Mohal, Anandipur Gate, P.C. Road, Halishahar, Chittagong-4224, Bangladesh</address>
                </li>
                <li><i className="fi ic-mail"></i>contact@asianliftbd.com</li>
              </ul> 
              </div>               
            </div>

          </div>      
        </div>
      </footer>
      <div className="ft-copyright bgl">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              Copyright © 2010-2023 Asian Lift Bangladesh<br/>All Rights Reserved
            </div>
            <div className="col-md-12 col-lg-6 links">
              <ul>
                <li><Link className="white" href={`${rootDirectory}/terms-of-use`}>Terms of Use</Link></li>
                <li><Link className="white" href={`${rootDirectory}/privacy-policy`}>Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>      
      </div>
    </>
  )
}
export default Footer