import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '@/styles/capsule-lift.module.css'
import global from '@/styles/products.module.css'
import Card from '@/components/img/productCard'
import Link from 'next/link'

const CapsuleLift: NextPage = () => {
  return(
    <>
      <Meta
        title='Capsule Lift | Asian Lift Bangladesh'
        description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
        keywords='Contact Asian Lift, Contact Bangladesh Lift Company, elevator servicing contact, bangladesh lift contact, lift servicing chittagong, passenger elevator servicing, lift phone number, contact info of bangladesh lift company, lift maintenance company'
        canonical='https://asianliftbd.com/product/cargo-lift'
      />

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Capsule Lift</h1>
            <p>Widely used in industrial buildings and warehouses</p>
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='bgw2'>
        <div className="container text-justify">
          <p>Our capsule lift has all the features of our to passenger lift with more features for the placement and cabin wall design specifically for capsule lift. Cabin wall of capsule lift are transparent and placed at a place to have a beautiful view. For the fact, it is also recognized as &quot;Observation Elevator&quot;.</p>

          <p><strong>Ultra Modern First-Class Visual Enjoyment</strong><br/>
          Exquisite appearance, stately car interior, three systems are using a full set of super modern configuration, with unique style user-friendly interface settings, set off your extraordinary and refined taste in intangible value.</p>

          <p><strong>New Type Creative Sightseeing Elevator</strong><br/>
          ● To design a new type of JKW-VVVF creative sightseeing elevator control cabinet operation network of multi module database management, creative sightseeing elevator control system, to achieve a smooth operation of the elevator.<br/>
					● Designed SAP layer door can call system, modem call elevator assistant function.<br/>
					● VVVF variable frequency drive permanent magnet synchronous machine, to ensure that the peak current, so that the elevator running stable and reliable;<br/>
					● Design a kind of sightseeing elevator to the heavy buffer device, install the energy dissipation type buffer, eliminate the squatting bottom accident;<br/>
					● Remote gate barring device 6 a design of the elevator machine room, equipped with safety plate, ensure the elevator safety;<br/>
					● The design of an automatic elevator alarm device, the use of the elevator alarm device, including the fault sensor to make the elevator in a safe troubleshooting.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <h2 className='heading black'><span>Lift</span> Design</h2>
        <div className="row justify-content-center">

        <div className={global.product+" "+global.i2}>
            <Card path='MD-G001'/>
            <a href="http://www.mdkselevator.com/view.php?id=216" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-G002'/>
            <a href="http://www.mdkselevator.com/view.php?id=217" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-G009'/>
            <a href="http://www.mdkselevator.com/view.php?id=218" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-G010'/>
            <a href="http://www.mdkselevator.com/view.php?id=219" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-G011'/>
            <a href="http://www.mdkselevator.com/view.php?id=220" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-G012'/>
            <a href="http://www.mdkselevator.com/view.php?id=221" target="_blank" rel="noreferrer">Details</a>
          </div>
        </div>
      </section>

      
      
    </>
  )
}

export default CapsuleLift