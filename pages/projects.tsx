import type { NextPage } from 'next'
import style from '@/styles/projects.module.css'
import Meta  from '@/components/Meta'
import Link from 'next/link'

const Projects: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Projects | Asian Lift Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='about asian lift bangladesh, about bangladesh lift company, bangladesh lift company profile, best lift servicing team, lift maintenance team'
          canonical='https://asianliftbd.com/projects'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-60">
          <div className="banner-area">
            <h1>Our Projects</h1>
            <p>Our completed projects in Residentioal and Industrial buildings</p>
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Projects</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='bgw'>
        <div className="container text-justify">
          <p>Asian Lift Bangladesh has worked on a lot of projects around Bangladesh. We have extensive experience with commercial, industrial, institutional and residential projects. Our experienced team who installed escalators and various types of lift such as passenger lift, cargo lift, hospital lift, dumbwaiter and providing service since then, helped us to reach to the position where we are today. Our project list below displays some of our renowned work. Due to our client privacy, we may not fully reveal the project picture in online for public view. If you want to know more, you may contact anytime via our mail or contact number. We will really appreciate if you wish to visit our office, which also will enable us to discuss and show our work in details. We encourage you to check on our previous work and hope it will make you believe in our ability. We are looking forward to work with you.</p>
        </div>
      </section>
      
      <section className='bgw2'>
        <div className={style.project}>
          <h2 className='heading'><span>Project</span> Portfolio</h2>
          <p className='subheading black'>Some of our best works in different towns of Bangladesh</p>
          <div className="container">
            <div className="row justify-content-center text-left">
              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                <div className='number'>75+</div>
                  <div className={style.name}><big>Projects</big></div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                <div className='number'>150+</div>
                  <div className={style.name}><big>Lifts & Escalators</big></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-left">
              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Al-Safa B&H</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Amader Bari</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Anabella BPL</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Banker&apos;s Heritage</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Bashundhara Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Bhuiya Mohal</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Binimoy Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Brother Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>CDDL</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Corvo Cycles Ltd</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Cargo Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Firefox (BD) Ltd</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Cargo Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Grace Park</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Green Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Heaven Diagonistic</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Hospital Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Hoque Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>IBBL Abul Biri</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>IHPL</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Cargo Lift</li>
                    <li>Passenger Lift</li>
                    <li>Dumbwaiter</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Illuminate</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Khulshi Park</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Kusum Villa</div>
                  <div className={style.place}>Dhaka</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>L.R. Plaza</div>
                  <div className={style.place}>Brahmanbaria</div>
                  <ul className={style.product}>
                    <li>Escalator</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Mati Mohal</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Medinova Hospital</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Hospital Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Mersh Builders</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Mir Cottage</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Modina Tower</div>
                  <div className={style.place}>Comilla</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Moytri Bhavan</div>
                  <div className={style.place}>Feni</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Noor Mohal</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Nowab Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Patiya City</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Proyash</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>RR Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Sagorika Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Seamen&apos;s Dream</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Seamen&apos;s Pride</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Shamoli Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Shopno Nibas</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Shorif Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>SKAN CHayanir</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Southern University</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Surovi Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Toiyobia Chy Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Trident Cycles</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Cargo Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Unity Tower</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Passenger Lift</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-2">
                <div className="card card2">
                  <div className={style.name}>Whitex Garments</div>
                  <div className={style.place}>Chittagong</div>
                  <ul className={style.product}>
                    <li>Cargo Lift</li>
                  </ul>
                </div>
              </div>           

            </div>
          </div> 
        </div>      
      </section>
    </>
  )
}

export default Projects