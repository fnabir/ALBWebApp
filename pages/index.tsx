import type { NextPage } from 'next'
import style from '@/styles/index.module.css'
import Meta  from '@/components/Meta'
import Link from 'next/link'
import Image from 'next/image'

const Index: NextPage = () => {
  return (
    <>
      meta={
        <Meta
          title='Asian Lift Bangladesh - Elevator Company in Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='asian lift, asian lift bangladesh, chittagong lift company, cepz lift company, chittagong lift servicing, bangladesh lift maintenance'
          canonical='https://asianliftbd.com'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
        </div>
      </div>

      <section className='bgw'>
        <div className={style.about}>
          <h1 className="heading">Asian <span>Lift</span> Bangladesh</h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-6 mb-2">
                <Image src="/img/MD-J001.webp" alt="" width={400} height={200}/>
              </div>
              <div className="col-md-12 col-lg-6 text-justify">
                <p>Asian Lift Bangladesh is a well-established and reputated elevator company of Bangladesh. It has been founded in 2010. Since then, it has come this far by working with honesty, transparency and excellent service. So far we have installed various types of lift and escalators around Dhaka, Chittagong, Feni, Comilla and some other main towns for residential, industrial and commercial buildings. We are providing maintenance service and support for technical issues to the projects from those places. We are also able to provide various kinds of elevators and generators which you can check from our products page.</p>
                <p>Asian Lift Bangladesh gives priority to clients. Our clients recommend us to others as a sign of trust and satisfaction. As a result, if you want to work with us, we will give you our client list so that you can check our work. It will help you to get insight of our work and performance. We will also provide you the contact number of our project and let you hear what our clients have to say and judge us.</p>
                <p>We don&apos;t give false hope. We say what we can. We confirm only those projects where we are sure to provide the required quallity in price settled by mutual agreement. We always prioritize safety devices. So we may not compromise price as we don&apos;t want to leave any safety device. Our projects included different types of lifts &amp; escalators. To know more, you are always welcome to visit us or contact us.</p>
              </div>
            </div>
            <a href='about' className='btn btnPrimary mt-2'>Explore Us</a>
          </div>
        </div>
      </section>

      <section className='bgd'>
        <h2 className='heading'>Our <span>Products</span></h2>
        <p className='subheading'>We stay top of our industry by providing modern design and latest technology to you.</p>
        <div className="w-90 row justify-content-center">
          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/passenger-lift">
                <div className={style.thumb}><Image src="/img/product_passenger.webp" alt="Passenger Lift" width={200} height={100}/></div>
                <div className={style.productName}>Passenger Lift</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/cargo-lift">
                <div className={style.thumb}><Image src="/img/product_cargo.webp" alt="Cargo Lift" width={200} height={100}/></div>
                <div className={style.productName}>Cargo Lift</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/hospital-lift">
                <div className={style.thumb}><Image src="/img/product_hospital.webp" alt="Hospital Lift" width={200} height={100}/></div>
                <div className={style.productName}>Hospital Lift</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/capsule-lift">
                <div className={style.thumb}><Image src="/img/product_capsule.webp" alt="Capsule Lift" width={200} height={100}/></div>
                <div className={style.productName}>Capsule Lift</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/escalator">
                <div className={style.thumb}><Image src="/img/product_escalator.webp" alt="Escalators" width={200} height={100}/></div>
                <div className={style.productName}>Escalators</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/dumbwaiter">
                <div className={style.thumb}><Image src="/img/product_dumbwaiter.webp" alt="Dumbwaiter" width={200} height={100}/></div>
                <div className={style.productName}>Dumbwaiter</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/car-lift">
                <div className={style.thumb}><Image src="/img/product_car.webp" alt="Car Lift" width={200} height={100}/></div>
                <div className={style.productName}>Car Lift</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/moving-walk">
                <div className={style.thumb}><Image src="/img/product_walk.webp" alt="Moving Walk" width={200} height={100}/></div>
                <div className={style.productName}>Moving Walk</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/generator">
                <div className={style.thumb}><Image src="/img/product_generator.webp" alt="Generator" width={200} height={100}/></div>
                <div className={style.productName}>Generator</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 mb-2">
            <div className={style.cardProduct}>
              <Link href="/product/lift-accessories">
                <div className={style.thumb}><Image src="/img/product_accessories.webp" alt="Lift Accessories" width={200} height={100}/></div>
                <div className={style.productName}>Lift Accessories</div>
              </Link>
            </div>
          </div>
        </div>

      </section>

      <section className='bgw1'>
        <h2 className='heading'>Our <span>Services</span></h2>
        <div className='container m-2'>
          <div className='row'>
            <div className='col-lg-4 mb-2'>
              <div className="card card1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 1000"><path fill="#1583E9" d="M750 0c9.667 0 18.033 3.533 25.1 10.6s10.6 15.433 10.6 25.1v928.6c0 9.667-3.533 18.033-10.6 25.1S759.667 1000 750 1000H35.7c-9.667 0-18.033-3.533-25.1-10.6S0 973.967 0 964.3V35.7c0-9.667 3.533-18.033 10.6-25.1S26.033 0 35.7 0H750zM214.3 767.9v-35.8c0-5.2-1.667-9.467-5-12.8s-7.633-5-12.9-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5 7.6-5 12.8v35.8c0 5.2 1.667 9.467 5 12.8s7.6 5 12.8 5h35.7c5.2 0 9.5-1.667 12.9-5 3.4-3.333 5.067-7.6 5-12.8zm0-142.9v-35.7c0-5.2-1.667-9.467-5-12.8s-7.633-5.033-12.9-5.1h-35.7c-5.2 0-9.467 1.7-12.8 5.1-3.333 3.4-5 7.667-5 12.8V625c0 5.2 1.667 9.467 5 12.8s7.6 5.033 12.8 5.1h35.7c5.2 0 9.5-1.7 12.9-5.1 3.4-3.4 5.067-7.667 5-12.8zm0-142.9v-35.7c0-5.2-1.667-9.467-5-12.8s-7.633-5-12.9-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5 7.6-5 12.8v35.7c0 5.267 1.667 9.567 5 12.9s7.6 5 12.8 5h35.7c5.2 0 9.5-1.667 12.9-5 3.4-3.333 5.067-7.633 5-12.9zm0-142.8v-35.7c0-5.2-1.667-9.5-5-12.9-3.333-3.4-7.633-5.067-12.9-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5 7.633-5 12.9v35.7c0 5.2 1.667 9.467 5 12.8s7.6 5 12.8 5h35.7c5.2 0 9.5-1.667 12.9-5 3.4-3.333 5.067-7.6 5-12.8zm0-142.9v-35.7c0-5.2-1.667-9.467-5-12.8s-7.633-5-12.9-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5 7.6-5 12.8v35.7c0 5.2 1.667 9.5 5 12.9 3.333 3.4 7.6 5.067 12.8 5h35.7c5.2 0 9.5-1.667 12.9-5 3.4-3.333 5.067-7.633 5-12.9zm428.6 571.5v-35.8c0-5.2-1.7-9.467-5.1-12.8-3.4-3.333-7.667-5-12.8-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5.033 7.6-5.1 12.8v35.8c0 5.2 1.7 9.467 5.1 12.8 3.4 3.333 7.667 5 12.8 5H625c5.2 0 9.467-1.667 12.8-5s5.033-7.6 5.1-12.8zm0-142.9v-35.7c0-5.2-1.7-9.467-5.1-12.8-3.4-3.333-7.667-5.033-12.8-5.1h-35.7c-5.2 0-9.467 1.7-12.8 5.1-3.333 3.4-5.033 7.667-5.1 12.8V625c0 5.2 1.7 9.467 5.1 12.8 3.4 3.333 7.667 5.033 12.8 5.1H625c5.2 0 9.467-1.7 12.8-5.1 3.333-3.4 5.033-7.667 5.1-12.8zm0-142.9v-35.7c0-5.2-1.7-9.467-5.1-12.8-3.4-3.333-7.667-5-12.8-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5.033 7.6-5.1 12.8v35.7c0 5.267 1.7 9.567 5.1 12.9 3.4 3.333 7.667 5 12.8 5H625c5.2 0 9.467-1.667 12.8-5s5.033-7.633 5.1-12.9zm0-142.8v-35.7c0-5.2-1.7-9.5-5.1-12.9-3.4-3.4-7.667-5.067-12.8-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5.033 7.633-5.1 12.9v35.7c0 5.2 1.7 9.467 5.1 12.8 3.4 3.333 7.667 5 12.8 5H625c5.2 0 9.467-1.667 12.8-5s5.033-7.6 5.1-12.8zm0-142.9v-35.7c0-5.2-1.7-9.467-5.1-12.8-3.4-3.333-7.667-5-12.8-5h-35.7c-5.2 0-9.467 1.667-12.8 5s-5.033 7.6-5.1 12.8v35.7c0 5.2 1.7 9.5 5.1 12.9 3.4 3.4 7.667 5.067 12.8 5H625c5.2 0 9.467-1.667 12.8-5s5.033-7.633 5.1-12.9z"></path><g id={style.lift}><path fill="#fff" d="M489.255 925h-29.288L399 916.549 338.033 925h-29.288a4.649 4.649 0 01-4.649-4.648v-51.278l4.226-23.143-4.226-24.695V719.649a4.65 4.65 0 014.649-4.649h180.51a4.65 4.65 0 014.649 4.649v200.703a4.649 4.649 0 01-4.649 4.648z"></path><path fill="#9EC8FC" d="M304.096 821.236h38.67v47.838h-38.67v-47.838z"></path><path fill="#80b6fc" d="M459.967 925h-57.798L399 920.775 395.831 925h-57.798V768.919a4.563 4.563 0 014.563-4.563h112.808a4.563 4.563 0 014.563 4.563V925z"></path><path fill="#5392F9" d="M320.918 855.256a3.17 3.17 0 100-6.339 3.17 3.17 0 000 6.339zM320.918 837.308a3.169 3.169 0 100-6.337 3.169 3.169 0 000 6.337z"></path><path fill="#80B6FC" d="M414.932 746.433l7.532-13.047c.694-1.202-.173-2.704-1.561-2.704h-15.065c-1.388 0-2.256 1.502-1.562 2.704l7.533 13.047c.694 1.202 2.429 1.202 3.123 0l7.532-13.047c.694-1.202-.173-2.704-1.561-2.704h-15.065c-1.388 0-2.256 1.502-1.562 2.704l7.533 13.047c.694 1.202 2.429 1.202 3.123 0zM383.068 733.386l-7.532 13.046c-.694 1.203.173 2.705 1.561 2.705h15.066c1.388 0 2.255-1.502 1.561-2.705l-7.532-13.046c-.695-1.202-2.43-1.202-3.124 0l-7.532 13.046c-.694 1.203.173 2.705 1.561 2.705h15.066c1.388 0 2.255-1.502 1.561-2.705l-7.532-13.046c-.695-1.202-2.43-1.202-3.124 0z"></path><path fill="#9EC8FC" d="M455.404 764.356h-12.676a4.563 4.563 0 014.563 4.563V925h12.676V768.919a4.563 4.563 0 00-4.563-4.563zM395.831 764.356h6.338V925h-6.338V764.356zM415.109 851.129a3.168 3.168 0 01-3.169-3.169v-13.821a3.169 3.169 0 116.338 0v13.821a3.169 3.169 0 01-3.169 3.169zM382.891 851.129a3.169 3.169 0 01-3.169-3.169v-13.821a3.17 3.17 0 016.338 0v13.821a3.169 3.169 0 01-3.169 3.169z"></path></g></svg>
                <h3>Full Project</h3>
                <p>We submit a proposal to you according to the demand, then we finalize our deal through signing an agreement, then import the whole package to the project place and done all the necessary installations and maintenance services.</p>
              </div>
            </div>
            <div className='col-lg-4 mb-2'>
              <div className="card card1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#1583e9" viewBox="0 0 640 512"><path id={style.cog1} d="M512.1 489.9l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path><path id={style.cog2} d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8z"></path><path id={style.cog3} d="M386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7z"></path></svg>
                <h3>Installation</h3>
                <p>Quality of installation affects the service time and quality of your product. Our experienced team ensures wiring and installation of safety and mechanical decvices of your lift. Look over our finished projects to get insights about our experience.</p>
              </div>
            </div>
            <div className='col-lg-4 mb-2'>
              <div className="card card1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 513"><path id={style.nut} fill="#0F5BA1" d="M156.146 115.126a32.3 32.3 0 00-18.162-26.518l-36.516-17.47a32.201 32.201 0 00-32.04 2.48L35.971 96.513a32.2 32.2 0 00-13.878 28.981l3.188 40.38a32.2 32.2 0 0018.161 26.518l36.516 17.469a32.201 32.201 0 0032.04-2.479l33.457-22.895a32.2 32.2 0 0013.878-28.981l-3.187-40.38zm-65.433 57.575c-17.784 0-32.202-14.417-32.202-32.201s14.418-32.201 32.202-32.201 32.201 14.417 32.201 32.201-14.417 32.201-32.201 32.201z"></path><path id={style.wrench} fill="#1583E9" d="M507.751 354.143s-76.011-57.365-128-96c-41.088-30.549-39.744-72.235-38.656-105.728.107-4.885.256-9.472.256-13.739 0-41.771-36.501-128-149.333-128-103.765 0-123.456 19.392-127.104 27.733-2.308 5.281-.003 11.441 5.205 13.909.64.299 64.235 30.357 106.155 53.056a37.185 37.185 0 0119.563 22.443 87.314 87.314 0 01-13.141 59.029c-20.843 37.739-43.648 49.835-71.872 37.995-43.733-18.368-95.125-42.261-95.637-42.496-5.336-2.496-11.685-.194-14.181 5.143a10.663 10.663 0 00-.987 5.14 208.022 208.022 0 0067.733 135.509c28.864 24.533 67.947 34.539 134.933 34.539a182.89 182.89 0 01100.267 40.533l128 96a10.664 10.664 0 006.4 2.133c.826 0 1.649-.093 2.453-.277a10.666 10.666 0 007.083-5.611l64-128a10.666 10.666 0 00-3.137-13.311z"></path></svg>
                <h3>Maintenance</h3>
                <p>Regular maintenance is necessary for every lift. It enhances the lifetime of your lift and provides smooth ride over the time. We maintain your lift to make it running smoothly and look as new as it was at the beginning. We also check if your all safety are working or not.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg'>
        <h2 className="heading white">Our <span>Work</span></h2>
        <p className="subheading">We hope you can put your trust on us seeing how much work we have done.</p>
        <div className={style.counter}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><style>{".cls-11{fill:#857e87}.cls-13{fill:#dbeaff}.cls-14{fill:#c3ddff}"}</style></defs><path className="cls-11" d="M12.72 71.5a2.51 2.51 0 0 1 2.5-2.5h72.14a2.51 2.51 0 0 1 2.5 2.5L93 162l-3.09 89.59H12.72Z" /><path d="M87.36 69h-20a2.51 2.51 0 0 1 2.5 2.5v180.13h20V71.5a2.51 2.51 0 0 0-2.5-2.5Z" style={{fill:"#5d5360"}}/><path className="cls-11" d="M217.17 77.5H195V59.64a2.51 2.51 0 0 1 2.5-2.5h17.22a2.51 2.51 0 0 1 2.5 2.5Z" /><path className="cls-13" d="M228.18 97h-44.5V79.32a2.5 2.5 0 0 1 2.5-2.5h39.5a2.51 2.51 0 0 1 2.5 2.5Z" /><path className="cls-14" d="M225.68 76.82h-15a2.51 2.51 0 0 1 2.5 2.5V97h15V79.32a2.51 2.51 0 0 0-2.5-2.5Z" /><path d="M244.5 252.25h-77.38L165 173l2.11-74.4a2.51 2.51 0 0 1 2.5-2.5H242a2.5 2.5 0 0 1 2.5 2.5Z" style={{fill:"#f0eef0"}}/><path d="M242 96.1h-20a2.5 2.5 0 0 1 2.5 2.5v153.65h20V98.6a2.5 2.5 0 0 0-2.5-2.5Z" style={{fill:"#dfdde0"}}/><path className="cls-13" d="M167.12 252.25H89.87V25.31a2.51 2.51 0 0 1 2.5-2.5h72.25a2.5 2.5 0 0 1 2.5 2.5Z" /><path className="cls-14" d="M167.11 25.31a2.5 2.5 0 0 0-2.5-2.5h-20a2.5 2.5 0 0 1 2.5 2.5v226.94h20Z" /><path className="cls-11" d="M150.87 24H106.1V6.25a2.51 2.51 0 0 1 2.5-2.5h39.77a2.51 2.51 0 0 1 2.5 2.5Z" /><path d="M167.09 46.49H89.85V25.31a2.51 2.51 0 0 1 2.5-2.5h72.24a2.5 2.5 0 0 1 2.5 2.5Z" style={{fill:"#8bb3ea"}}/><path d="M164.59 22.81h-20a2.5 2.5 0 0 1 2.5 2.5v21.18h20V25.31a2.5 2.5 0 0 0-2.5-2.5Z" style={{fill:"#739ad6"}}/><path className="cls-11" d="M193.11 252.23v-39.48a2.51 2.51 0 0 1 2.5-2.5h20.64a2.51 2.51 0 0 1 2.5 2.5v39.48Z" /><path className="cls-14" d="M44.3 164.23a2.51 2.51 0 0 1-2.5 2.5H31.43a2.5 2.5 0 0 1-2.5-2.5V91.84a2.5 2.5 0 0 1 2.5-2.5H41.8a2.51 2.51 0 0 1 2.5 2.5ZM74.68 230a2.51 2.51 0 0 1-2.5 2.5H61.7a2.5 2.5 0 0 1-2.5-2.5v-72.4a2.51 2.51 0 0 1 2.5-2.5h10.48a2.51 2.51 0 0 1 2.5 2.5ZM74.68 133a2.51 2.51 0 0 1-2.5 2.5H61.7a2.51 2.51 0 0 1-2.5-2.5v-10a2.51 2.51 0 0 1 2.5-2.5h10.48a2.51 2.51 0 0 1 2.5 2.5ZM44.3 198.82a2.51 2.51 0 0 1-2.5 2.5H31.43a2.5 2.5 0 0 1-2.5-2.5v-10a2.5 2.5 0 0 1 2.5-2.5H41.8a2.51 2.51 0 0 1 2.5 2.5Z" /><path d="M252.25 256H3.75a3.75 3.75 0 0 1 0-7.5h248.5a3.75 3.75 0 0 1 0 7.5Z" style={{fill:"#b3e59f"}}/><path d="M150.17 73.25H106.8c-4.83 0-4.83 7.5 0 7.5h43.37c4.83 0 4.83-7.5 0-7.5ZM150.17 109.72H106.8c-4.83 0-4.83 7.5 0 7.5h43.37c4.83 0 4.83-7.5 0-7.5ZM150.17 146.13H106.8c-4.83 0-4.83 7.5 0 7.5h43.37c4.83 0 4.83-7.5 0-7.5ZM150.17 182.55H106.8c-4.83 0-4.83 7.5 0 7.5h43.37c4.83 0 4.83-7.5 0-7.5ZM150.17 219H106.8c-4.83 0-4.83 7.5 0 7.5h43.37c4.83-.03 4.83-7.5 0-7.5ZM190.18 117.5c0-4.84-7.5-4.84-7.5 0V130c0 4.84 7.5 4.84 7.5 0ZM209.68 117.5c0-4.84-7.5-4.84-7.5 0V130c0 4.84 7.5 4.84 7.5 0ZM190.18 147.47c0-4.84-7.5-4.84-7.5 0V160c0 4.83 7.5 4.83 7.5 0ZM209.68 147.47c0-4.84-7.5-4.84-7.5 0V160c0 4.83 7.5 4.83 7.5 0ZM186.43 173.67a3.75 3.75 0 0 0-3.75 3.75v12.48c0 4.84 7.5 4.84 7.5 0v-12.48a3.75 3.75 0 0 0-3.75-3.75ZM205.93 173.67a3.75 3.75 0 0 0-3.75 3.75v12.48c0 4.84 7.5 4.84 7.5 0v-12.48a3.75 3.75 0 0 0-3.75-3.75ZM229.18 117.5c0-4.84-7.5-4.84-7.5 0V130c0 4.84 7.5 4.84 7.5 0ZM229.18 147.47c0-4.84-7.5-4.84-7.5 0V160c0 4.83 7.5 4.83 7.5 0ZM225.43 173.67a3.75 3.75 0 0 0-3.75 3.75v12.48c0 4.84 7.5 4.84 7.5 0v-12.48a3.75 3.75 0 0 0-3.75-3.75Z" /><path d="M252.25 248.5h-4v-17.82c0-4.83-7.5-4.83-7.5 0v17.82H222.5v-35.75a6.27 6.27 0 0 0-6.25-6.25h-20.64a6.26 6.26 0 0 0-6.25 6.25v35.75h-18.49V99.85h69.89v114.4c0 4.84 7.5 4.84 7.5 0V98.6a6.25 6.25 0 0 0-6.26-6.25h-10.07v-13a6.26 6.26 0 0 0-6.25-6.25h-4.76V59.64a6.25 6.25 0 0 0-6.25-6.25h-4.86V25.72c0-4.84-7.5-4.84-7.5 0v27.67h-4.86a6.26 6.26 0 0 0-6.25 6.25v13.43h-5a6.25 6.25 0 0 0-6.25 6.25v13h-9.07v-67a6.25 6.25 0 0 0-6.25-6.25h-10V6.25A6.25 6.25 0 0 0 148.37 0h-39.76a6.25 6.25 0 0 0-6.25 6.25v12.81h-10a6.25 6.25 0 0 0-6.25 6.25v40.56H15.22A6.25 6.25 0 0 0 9 72.12v34.78c0 4.84 7.5 4.84 7.5 0V73.37h69.61V248.5H16.47V124.37c0-4.83-7.5-4.83-7.5 0V248.5H3.75c-4.84 0-4.84 7.5 0 7.5h248.5c4.84 0 4.84-7.5 0-7.5ZM198.7 60.89h14.72v12.17H198.7Zm-11.27 19.68h37v11.76h-37ZM109.85 7.5h37.27v11.56h-37.27V7.5Zm-3.75 19.06h57.24v16.18H93.61V26.56ZM93.61 50.24h69.75V248.5H93.62ZM196.86 214H215v34.5h-18.14Z" /><path d="M31.43 170.48H41.8a6.26 6.26 0 0 0 6.25-6.25V91.84a6.26 6.26 0 0 0-6.25-6.25H31.43a6.25 6.25 0 0 0-6.25 6.25v72.39a6.25 6.25 0 0 0 6.25 6.25Zm1.25-77.39h7.87V163h-7.87ZM55.45 230a6.25 6.25 0 0 0 6.25 6.25h10.48a6.26 6.26 0 0 0 6.25-6.25v-72.4a6.27 6.27 0 0 0-6.25-6.25H61.7a6.26 6.26 0 0 0-6.25 6.25ZM63 158.85h8v69.9h-8ZM61.7 139.29h10.48a6.26 6.26 0 0 0 6.25-6.29v-10a6.27 6.27 0 0 0-6.25-6.25H61.7a6.26 6.26 0 0 0-6.25 6.25v10a6.25 6.25 0 0 0 6.25 6.29Zm1.25-15h8v7.54H63ZM25.18 198.82a6.25 6.25 0 0 0 6.25 6.25H41.8a6.26 6.26 0 0 0 6.25-6.25v-10a6.26 6.26 0 0 0-6.25-6.25H31.43a6.25 6.25 0 0 0-6.25 6.25Zm7.5-8.73h7.87v7.48h-7.87Z"/></svg>
                <span>75+</span>
                <p>Projects</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.11 256"><defs><style>{".cls-23{fill:#bed9fd}.cls-24{fill:#9ec8fc}"}</style></defs><path d="M222.85 252.25H9.25a5.5 5.5 0 0 1-5.5-5.5V9.25a5.5 5.5 0 0 1 5.5-5.5h213.6a5.5 5.5 0 0 1 5.5 5.5v237.5a5.49 5.49 0 0 1-5.5 5.5Z" style={{fill:"#5392f9"}}/><path d="M222.85 3.75h-15a5.5 5.5 0 0 1 5.5 5.5v237.5a5.5 5.5 0 0 1-5.5 5.5h15a5.5 5.5 0 0 0 5.5-5.5V9.25a5.5 5.5 0 0 0-5.5-5.5Z" style={{fill:"#4981f8"}}/><path className="cls-23" d="M188.2 252.25H43.91V67.55a5.4 5.4 0 0 1 5.4-5.4H182.8a5.4 5.4 0 0 1 5.4 5.4Z" /><path className="cls-24" d="M182.8 62.15h-15a5.4 5.4 0 0 1 5.4 5.4v184.7h15V67.55a5.4 5.4 0 0 0-5.4-5.4ZM4.25 129.46h39.66v56.61H4.25Z" /><path className="cls-23" d="M99.05 22.31 86.44 44.15h25.22L99.05 22.31 86.44 44.15h25.22ZM133.06 44.15l12.61-21.84h-25.22l12.61 21.84 12.61-21.84h-25.22Z" /><circle cx={23.66} cy={144.73} r={3.75} /><circle cx={23.66} cy={165.97} r={3.75} /><path d="M222.85 0H9.25A9.26 9.26 0 0 0 0 9.25V56a3.75 3.75 0 0 0 7.5 0V9.25A1.75 1.75 0 0 1 9.25 7.5h213.6a1.76 1.76 0 0 1 1.76 1.75v237.5a1.76 1.76 0 0 1-1.76 1.75H192V67.55a9.17 9.17 0 0 0-9.15-9.15h-22.18a3.75 3.75 0 1 0 0 7.5h22.13a1.65 1.65 0 0 1 1.65 1.65v181H119.8V65.9h25.87a3.75 3.75 0 0 0 0-7.5H49.31a9.16 9.16 0 0 0-9.15 9.15v58.16H7.5V71A3.75 3.75 0 0 0 0 71v175.75A9.26 9.26 0 0 0 9.25 256h213.6a9.27 9.27 0 0 0 9.26-9.25V9.25A9.26 9.26 0 0 0 222.85 0ZM40.16 133.21v49.11H7.5v-49.11ZM7.5 246.75v-56.93h32.66v58.68H9.25a1.76 1.76 0 0 1-1.75-1.75Zm40.16-179.2a1.65 1.65 0 0 1 1.65-1.65h63v182.6H47.66V67.55Z" /><path d="M86.44 47.9h25.22a3.74 3.74 0 0 0 3.24-5.63l-12.6-21.84a3.76 3.76 0 0 0-6.5 0L83.19 42.27a3.77 3.77 0 0 0 0 3.75 3.76 3.76 0 0 0 3.25 1.88Zm12.61-18.09 6.11 10.59H92.93ZM133.06 47.9a3.76 3.76 0 0 0 3.25-1.9l12.6-21.84a3.75 3.75 0 0 0-3.24-5.62h-25.22a3.75 3.75 0 0 0-3.25 1.87 3.77 3.77 0 0 0 0 3.75L129.81 46a3.76 3.76 0 0 0 3.25 1.88Zm6.11-21.84-6.11 10.59-6.12-10.59ZM131.36 144.73v16.36a3.75 3.75 0 1 0 7.5 0v-16.36a3.75 3.75 0 0 0-7.5 0ZM97 141a3.75 3.75 0 0 0-3.75 3.75v16.36a3.75 3.75 0 0 0 7.5 0v-16.38A3.75 3.75 0 0 0 97 141Z"/></svg>
                <span>150+</span>
                <p>Lifts & Escalators</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.88 256"><defs><style>{".cls-31{fill:#f9d6bd}.cls-32{fill:#898998}"}</style></defs><path className="cls-31" d="M5 211h47.54v39.88H5z" /><path className="cls-32" d="M5 171.24h47.54v39.75H5z" /><path d="M5 115.27h27.62L79.7 68.18a10 10 0 1 1 14.14 14.14l-41.3 41.3v47.63H5" style={{fill:"#c9f3ff"}}/><path d="M196 146.81a10 10 0 0 0-14.13 0l-47.11 47.09h-13.63L74 146.81A10 10 0 1 0 59.9 161l41.3 41.3v47.63h53.48v-47.68L196 161a10 10 0 0 0 0-14.19Z" style={{fill:"#ffc66c"}}/><path className="cls-32" d="M101.2 110.98h53.47v63H101.2z" /><circle className="cls-31" cx={127.94} cy={171.06} r={20.8} /><circle className="cls-31" cx={127.94} cy={32.17} r={20.8} /><path d="M196 7.92a10 10 0 0 0-14.13 0L134.76 55h-13.63L74 7.92a10 10 0 1 0-14.1 14.13l41.3 41.31V111h53.48V63.36L196 22.05a10 10 0 0 0 0-14.13Z" style={{fill:"#d8fb93"}}/><circle className="cls-31" cx={25.8} cy={92.43} r={20.8} /><path className="cls-31" d="M203.35 211h47.54v39.88h-47.54z" /><path className="cls-32" d="M203.35 171.24h47.54v39.75h-47.54z" /><path d="M250.89 115.27h-27.62l-47.09-47.09A10 10 0 0 0 162 82.32l41.31 41.3v47.63h47.54" style={{fill:"#d8d8e4"}}/><circle className="cls-31" cx={230.09} cy={92.43} r={20.8} /><path d="M127.94 128.89a5 5 0 1 0 3.54 1.46 5 5 0 0 0-3.54-1.46Z" /><path d="m172.65 71.72 47.09 47.09a5 5 0 0 0 3.53 1.46h27.62a5 5 0 0 0 0-10h-2.2a25.79 25.79 0 1 0-44.22-20.87l-24.76-24.75a15 15 0 0 0-15.8-3.46l35.61-35.6a15 15 0 0 0 0-21.21 15 15 0 0 0-21.21 0l-24.75 24.76a25.8 25.8 0 0 0-51.24 0L77.57 4.38a15 15 0 0 0-21.2 21.21L92 61.19a15 15 0 0 0-15.8 3.46L51.42 89.4a25.8 25.8 0 1 0-44.23 20.88H5a5 5 0 1 0 0 10h27.61a5 5 0 0 0 3.54-1.46l47.09-47.1a5 5 0 1 1 7.07 7.06L49 120.09a5 5 0 0 0-1.46 3.53v42.63H25.8a5 5 0 1 0 0 10h21.74v29.82H30.8v-11.6a5 5 0 0 0-10 0v11.6H5a5 5 0 0 0 0 10h15.8V251a5 5 0 0 0 10 0v-34.94h16.74v34.82a5 5 0 0 0 10 0v-85.23l38.67 38.67v45.56a5 5 0 0 0 5 5h53.48a5 5 0 0 0 5-5v-45.56l38.67-38.67v85.23a5 5 0 0 0 10 0v-34.82h16.74V251a5 5 0 0 0 10 0v-34.94h15.8a5 5 0 0 0 0-10h-15.8v-11.59a5 5 0 0 0-10 0v11.59h-16.76v-29.82h42.54a5 5 0 1 0 0-10h-42.54v-42.62a5 5 0 0 0-1.46-3.53l-41.3-41.3a5 5 0 1 1 7.07-7.07Zm57.43 4.9a15.81 15.81 0 1 1-15.8 15.81 15.82 15.82 0 0 1 15.8-15.81Zm-204.28 0A15.81 15.81 0 1 1 10 92.43a15.82 15.82 0 0 1 15.8-15.81Zm102.14-60.26a15.81 15.81 0 1 1-15.8 15.81 15.82 15.82 0 0 1 15.8-15.81Zm-64.5-4.91a5 5 0 0 1 7.07 0l47.08 47.09a5 5 0 0 0 3.54 1.46h13.63a5 5 0 0 0 3.53-1.47l47.09-47.09a5 5 0 0 1 7.07 7.07l-41.3 41.3a5 5 0 0 0-1.47 3.54V106H106.2V63.36a5 5 0 0 0-1.46-3.54l-41.3-41.3a5 5 0 0 1 0-7.07Zm129 146-41.3 41.31a5 5 0 0 0-1.47 3.53v42.63H106.2v-42.67a5 5 0 0 0-1.46-3.53l-41.3-41.3a5 5 0 0 1 7.06-7.07l47.09 47.09a5 5 0 0 0 3.54 1.46h13.63a5 5 0 0 0 3.53-1.46l47.09-47.09a5 5 0 0 1 7.07 7.06Zm-64.51 29.46a15.81 15.81 0 1 1 15.81-15.81 15.83 15.83 0 0 1-15.8 15.77Zm70.41-61.18v16.54a15 15 0 0 0-20 1.05L153.56 168a25.79 25.79 0 0 0-51.23 0l-24.76-24.72a15 15 0 0 0-20-1.05v-16.54L96.21 87v55.05a5 5 0 1 0 10 0V116h43.48v26.09a5 5 0 0 0 10 0V87Z" /><path d="M14 174.78a5 5 0 1 0-3.53 1.46 5 5 0 0 0 3.53-1.46Z" /></svg>
                <span>800+</span>
                <p>Happy Clients</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.44 256"><defs><style>{".cls-41{fill:#b5cbd6}.cls-43{fill:#f28838}.cls-44{fill:#ef711d}.cls-45{fill:#ffb92e}.cls-48{fill:#7c7a75}.cls-49{fill:#e2af7d}.cls-413{fill:#ef9a1d}"}</style></defs><path className="cls-41" d="M32.89 179.66A42.28 42.28 0 0 0 4 219.74v25.75a6.47 6.47 0 0 0 6.51 6.51h22.38Z" /><path className="cls-41" d="M18.34 246.69v-25.75a42.17 42.17 0 0 1 18.07-34.63v-5.45a42.27 42.27 0 0 0-28.85 40.08v25.75a6.47 6.47 0 0 0 6.44 6.47h10.81a6.47 6.47 0 0 1-6.47-6.47Z" /><path className="cls-43" d="M124 64.1V11.19A7.15 7.15 0 0 0 116.87 4h-14.3a7.15 7.15 0 0 0-7.15 7.15V64.1Z" /><path className="cls-44" d="M115.4 6.32H105a7.15 7.15 0 0 0-7.15 7.15v52.91h10.39V13.47a7.15 7.15 0 0 1 7.16-7.15Z" /><path className="cls-45" d="M95.42 15.3a56.47 56.47 0 0 0-41.84 48.8h41.84V15.3Z"/><path d="M97.86 21.91v-4.34A56.48 56.48 0 0 0 56 66.38h11.38a56.45 56.45 0 0 1 30.48-44.47Z" style={{fill: "#ffab31"}}/><path className="cls-41" d="m109.72 199.57 17.5 12.12 21.43-34.22-16.83-6.3-22.1 28.4zM109.71 199.57l-17.5 12.12-21.43-34.22 16.83-6.3 22.1 28.4zM186.53 179.65V252h22.4a6.47 6.47 0 0 0 6.47-6.47v-25.79a42.29 42.29 0 0 0-28.87-40.09Z"/><path className="cls-41" d="M148.72 252h14.4v-74.53h-14.48l-21.42 34.22-17.5-12.12-.06-.06v.06l-17.5 12.12-21.38-34.22H56.29V252h77.87"/><path className="cls-45" d="M56.31 251.96V234.7h106.82v17.26"/><path className="cls-48" d="M171.6 103.17V80h-12.79v12.21a13 13 0 0 1 12.79 10.96ZM60.63 92.21V80H47.69v25.12a12.94 12.94 0 0 1 12.94-12.91Z"/><path className="cls-49" d="M60.63 92.21a12.95 12.95 0 0 0 0 25.89ZM158.81 92.21a12.95 12.95 0 1 1 0 25.89ZM130.2 161.36a40.58 40.58 0 0 1-12.09 1.83h-16.77a40.53 40.53 0 0 1-12.09-1.83c-.55-.17-1.09-.35-1.63-.54v10.35l22.1 28.4 22.1-28.4v-10.35Z"/><path d="M125.09 80H60.63v42.44a40.7 40.7 0 0 0 40.7 40.71h16.77a40.7 40.7 0 0 0 40.71-40.71V80Z" style={{fill: "#f2cb9c"}}/><path className="cls-45" d="M124 64.1h41.84A56.47 56.47 0 0 0 124 15.3v48.8ZM186.53 252v-74.36a6.47 6.47 0 0 0-6.47-6.47h-10.47a6.47 6.47 0 0 0-6.47 6.47V252ZM56.3 252v-74.36a6.47 6.47 0 0 0-6.47-6.47H39.35a6.47 6.47 0 0 0-6.46 6.47V252Z" /><path className="cls-43" d="M174.84 72.94V71.2a7.1 7.1 0 0 0-7.1-7.1H51.7a7.1 7.1 0 0 0-7.1 7.1v1.74A7.1 7.1 0 0 0 51.7 80h116a7.1 7.1 0 0 0 7.14-7.06ZM32.89 204.96H56.3v47H32.89zM163.12 204.96h23.41v47h-23.41z" /><path d="M102.46 175v-10.72a40.68 40.68 0 0 1-9.15-1.72c-.55-.17-1.09-.35-1.63-.54v10.35l10.78 13.85V175Z" style={{fill: "#db995d"}}/><path d="M73.9 123.68V81.24H63.07v42.44a40.71 40.71 0 0 0 40.71 40.71h10.82a40.71 40.71 0 0 1-40.7-40.71Z" style={{fill: "#edbd88"}}/><path className="cls-413" d="M41.8 172.37a6.47 6.47 0 0 0-6.47 6.47v29h10.78v-29a6.46 6.46 0 0 1 6.31-6.46H41.8Z" /><path className="cls-44" d="M35.33 206.16h10.78v47H35.33z" /><path className="cls-413" d="M172 172.37a6.47 6.47 0 0 0-6.47 6.47v30.61h10.78v-30.61a6.47 6.47 0 0 1 6.32-6.46H172Z" /><path className="cls-44" d="M165.56 206.16h10.78v47h-10.78zM59.07 72.94V71.2a7.1 7.1 0 0 1 7.1-7.1H55.78a7.1 7.1 0 0 0-7.1 7.1v1.74a7.1 7.1 0 0 0 7.1 7.1h10.39a7.1 7.1 0 0 1-7.1-7.1Z" /><path d="M190.53 176.83a10.51 10.51 0 0 0-10.47-9.7h-10.47a10.54 10.54 0 0 0-9.63 6.3h-10.58l-13.52-5.06v-4.82a44.8 44.8 0 0 0 27-41.07v-.83a17 17 0 0 0 13-16.49 18.62 18.62 0 0 0-.15-2.25V80.78a11.15 11.15 0 0 0 3.23-7.84V71.2a11.14 11.14 0 0 0-9.47-11A60.55 60.55 0 0 0 152 26.74v-2.51a4 4 0 0 0-6.61-3.12 60 60 0 0 0-17.36-8.84v-1.08A11.2 11.2 0 0 0 116.87 0h-14.3a11.2 11.2 0 0 0-11.19 11.19v1.08A60.16 60.16 0 0 0 74 21.11a4 4 0 0 0-6.61 3.12v2.51A60.55 60.55 0 0 0 50 60.2a11.14 11.14 0 0 0-9.47 11v1.74a11.11 11.11 0 0 0 3.08 7.67v24.55a17 17 0 0 0 13 16.49v.83a44.81 44.81 0 0 0 27 41.07v4.81l-13.53 5.07H59.45a10.51 10.51 0 0 0-9.62-6.3H39.36a10.51 10.51 0 0 0-10.47 9.71A46.27 46.27 0 0 0 0 219.74v25.75A10.52 10.52 0 0 0 10.51 256h123.66a4 4 0 1 0 0-8.08H60.35v-9.18h98.73v9.18h-10.36a4 4 0 1 0 0 8.08h60.21a10.52 10.52 0 0 0 10.51-10.51v-25.75a46.25 46.25 0 0 0-28.91-42.91Zm-20.94-1.62h10.47a2.43 2.43 0 0 1 2.43 2.43v23.28h-15.33v-23.33a2.42 2.42 0 0 1 2.43-2.38Zm12.9 72.71h-15.31V234.7a2.45 2.45 0 0 0 0-.27V209h15.33v38.92Zm-105.65-68.4 9.41-3.52 17.64 22.68-10.5 7.32Zm38.7 19.16L133.18 176l9.41 3.52L126 206Zm52-114.6v6.49a16.56 16.56 0 0 0-4.7-1.92v-4.57Zm-4.71 29V97.25a9 9 0 0 1 3.71 3.54 8.91 8.91 0 0 1 .63 1.37l.06.19.15.5.06.25c0 .17.08.35.11.53a9.44 9.44 0 0 1 .13 1.52 8.91 8.91 0 0 1-4.83 7.94Zm-1.66-53H152V39a52.35 52.35 0 0 1 9.19 21.06Zm-17.25-29.8v29.8h-15.86V20.81a52.19 52.19 0 0 1 15.88 9.45ZM99.46 11.19a3.12 3.12 0 0 1 3.11-3.11h14.3a3.12 3.12 0 0 1 3.13 3.11v48.87H99.46V11.19Zm-8.08 48.87H75.5v-29.8a52.19 52.19 0 0 1 15.88-9.45Zm-24-21v21h-9.13A52.35 52.35 0 0 1 67.41 39ZM48.65 71.2a3.06 3.06 0 0 1 3.05-3.06h116a3.06 3.06 0 0 1 3 3.06v1.74a3.06 3.06 0 0 1-3 3h-116a3.06 3.06 0 0 1-3.05-3V71.2Zm7.94 17.46h-.08c-.37.09-.74.2-1.11.32l-.23.08c-.36.12-.71.25-1.06.4h-.06c-.36.15-.71.32-1.06.5a1.51 1.51 0 0 0-.22.11c-.34.18-.68.36-1 .56v-6.55h4.86v4.58Zm-4.86 16.5a7.09 7.09 0 0 1 0-.81v-.22c0-.07.06-.44.1-.66v-.14c0-.26.12-.51.19-.76l.06-.17c.07-.2.14-.4.22-.59a1.34 1.34 0 0 1 .07-.18q.15-.34.33-.69l.06-.09a5.43 5.43 0 0 1 .35-.57 1.74 1.74 0 0 1 .11-.18l.42-.56v-.05c.16-.2.34-.38.51-.56l.14-.14a6.14 6.14 0 0 1 .47-.42l.12-.11a6.85 6.85 0 0 1 .61-.45l.13-.09c.18-.12.36-.22.54-.33l.17-.09.13-.06v15.85a8.91 8.91 0 0 1-4.73-7.93Zm12.94 17.32v-38.4h90.1v38.4A36.72 36.72 0 0 1 127.41 158l-.44.11-1.19.28-.5.1-1.43.26h-.2c-.54.08-1.08.15-1.63.21h-.49l-1.24.1H99.15l-1.24-.1h-.49c-.55-.06-1.09-.13-1.63-.21h-.2c-.48-.07-1-.16-1.43-.25l-.5-.11c-.4-.08-.79-.17-1.19-.27L92 158a36.73 36.73 0 0 1-27.33-35.52Zm27.84 43.87c.61.13 1.23.24 1.85.34l.38.05c.64.1 1.27.18 1.91.25h.31c.67.06 1.35.11 2 .15H120.44c.68 0 1.35-.09 2-.15h.31c.64-.07 1.28-.15 1.92-.25l.37-.05c.62-.1 1.24-.21 1.86-.34l.37-.07.47-.1v3.6L109.72 193l-18-23.21v-3.6l.46.1Zm-55.58 11.29a2.43 2.43 0 0 1 2.42-2.43h10.48a2.44 2.44 0 0 1 2.42 2.36v23.35H36.93v-23.28ZM8.08 245.49v-25.75a38.18 38.18 0 0 1 20.76-34v62.18H10.51a2.43 2.43 0 0 1-2.43-2.43ZM36.93 209h15.32v38.92H36.93Zm23.41 21.66v-49.15h8.21l20.24 32.33a4 4 0 0 0 2.61 1.81 3.71 3.71 0 0 0 .81.08 3.08 3.08 0 0 0 .53 0h.14a4.37 4.37 0 0 0 .52-.12 3.07 3.07 0 0 0 .5-.2l.12-.06a3.33 3.33 0 0 0 .48-.28l11.15-7.72v23.37Zm53.41 0v-23.38l11.16 7.72a2.87 2.87 0 0 0 .48.28l.12.06a3.07 3.07 0 0 0 .5.2 3 3 0 0 0 .52.12h.14a3.08 3.08 0 0 0 .53 0 3.71 3.71 0 0 0 .81-.08 4 4 0 0 0 2.61-1.81l20.24-32.32h8.2v49.14Zm97.61 14.83a2.43 2.43 0 0 1-2.43 2.43h-18.36v-62.2a38.19 38.19 0 0 1 20.79 34Z" style={{fill: "#231f20"}}/></svg>
                <span>20+</span>
                <p>Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bgw'>
        <h2 className='heading'>Our <span>Business</span> Partner</h2>
        <p className='subheading black'>We partnered with the best to provide you the best and latest product</p>
        <div className={style.partner}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://www.mdel.co.kr/english/" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_Modeun.png" alt="Modeun Elevator" width={200} height={100}/>
                </a>
                <p>KOREA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://torindriveintl.com/" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_TorinDrive.png" alt="TorinDrive" width={200} height={100}/>
                </a>
                <p>CHINA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://www.mdkselevator.com/" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_Mdunks.webp" alt="Mdunks" width={200} height={100}/>
                </a>
                <p>CHINA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://www.szmctc.com/en/index.htm" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_Monarch.webp" alt="Moanrch" width={200} height={100}/>
                </a>
                <p>CHINA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://www.sicor-spa.it/" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_Sicor.webp" alt="Sicor" width={200} height={100}/>
                </a>
                <p>KOREA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="https://www.xizigroup.com/pas/detail/17" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_xizi.webp" alt="XIZI" width={200} height={100}/>
                </a>
                <p>CHINA</p>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <a href="http://www.eshine.com.cn/en/" target="_blank" rel="noreferrer">
                  <Image src="/img/logo_eshine.jpg" alt="Eshine" width={200} height={100}/>
                </a>
                <p>CHINA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index