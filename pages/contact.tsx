import type { NextPage } from 'next'
import style from '@/styles/Contact.module.css'
import Meta   from '@/components/Meta'
import Banner from '@/components/Banner';
import Link from 'next/link';
import Image from 'next/image';

const Contact: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Contact | Asian Lift Bangladesh'
          description='Contact us for any lift or generator realted enquiries, we will get back to you with our best answer and option available.'
          keywords='Contact Asian Lift, Contact Bangladesh Lift Company, elevator servicing contact, bangladesh lift contact, lift servicing chittagong, passenger elevator servicing, lift phone number, contact info of bangladesh lift company, lift maintenance company'
          canonical='https://asianliftbd.com/contact'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-60">
          <div className="banner-area">
            <h1>Contact Us</h1>
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='bgw2'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="card card2">
                <h3><span>Chittagong</span></h3>
                <p>NOOR MOHAL (1st Floor),<br/>Anandipur Gate, P.C. Road, Halishahar, Chittagong-4224</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="card card2">
                <Image src="ALB.svg" alt="" width={250} height={80}/>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mb-2">
              <div className="card card2">
                <h2>Contact Info</h2>
                <p><span><big>(+880) 1613 748836</big></span></p>
                  <p>contact@asianliftbd.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bgl'>
        <div className='container'>
          <div className='row'>
            <div className='col--md-12 col-lg-6 mb-2'>
              <div className='card cardBlack'>
                <h2>Form Info</h2>
                <h3>Appointment</h3>
                <p>To set an appointment, just let us know time and details in the form and we will take it from there and follow-up with you.</p>
                <h3>Have Questions?</h3>
                <p>Feel free to ask about your any enquiry or info you need. We will try our expertise to provide you the best answer.</p>
                <h3>Working Hours</h3>
                <p>Saturday - Thursday<br/>09:00 am - 7:00 pm</p>
                <h3>Mail Us</h3>
                <p>If our form is not good enough for you, you may use our mail to contact us. We are as active in our mail as our form here. <a href="mailto:contact@asianliftbd.com">contact@asianliftbd.com</a></p>
              </div>
            </div>
            <div className='col--md-12 col-lg-6 mb-2'>
              <div className='card cardBlack'>
                <h2>Contact Form</h2>
                <form action="https://formsubmit.co/922dbab3b23b04485d971c05d8df9292" method="POST">
                  <label>Name*</label>
                  <input id='name' required autoComplete='name'/>
                  <label>Phone No</label>
                  <input id='phone' typeof='tel' autoComplete="phone" minLength={11}/>
                  <label>Email Address*</label>
                  <input id="email" typeof='email' required autoComplete="email"/>
                  <label>Subject*</label>
                  <input id="subject" required/>
                  <label>Message*</label>
                  <textarea id="message" typeof='text' autoComplete="off" minLength={10} maxLength={500} required></textarea>
                  <button className='btn btnPrimary w-100'>Submit</button>
                  <small>By submitting you agree with our <Link href='/terms-of-use'>Terms of Use</Link> and <Link href='/privacy-policy'>Privacy Policy</Link>.</small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='bgw1'>
        <h2 className='heading'>Our <span>Social</span> Links</h2>
          <Link className={style.btnSocial} href="https://www.facebook.com/asianliftbangladesh" target="_blank" rel="noopener"><i className="fi ic-fb"></i></Link>
          <Link className={style.btnSocial} href="https://www.linkedin.com/company/asian-lift-bangladesh/" target="_blank" rel="noopener"><i className="fi ic-li"></i></Link>
          <Link className={style.btnSocial} href="https://www.youtube.com/channel/UCDS_06KrmN5TRu5RksfwJLw" target="_blank" rel="noopener"><i className="fi ic-yt"></i></Link>
      </section>
      
      <section className='bg'>
        <div className='container'>
        <h2 className='heading'>Locate Us on <span>Maps</span></h2>
          <div className={style.maps}>
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3898061131413!2d91.78685301532809!3d22.338905647136645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd926f4116789%3A0x49e7b21982bea799!2zQXNpYW4gTGlmdCBCYW5nbGFkZXNoIHwg4KaP4Ka24Ka_4Kef4Ka-4KaoIOCmsuCmv-Cmq-CmnyDgpqzgpr7gpoLgprLgpr7gpqbgp4fgprY!5e0!3m2!1sen!2suk!4v1653421747039!5m2!1sen!2suk" 
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              >
            </iframe>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Contact