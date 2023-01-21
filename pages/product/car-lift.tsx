import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '@/styles/car-lift.module.css'
import global from '@/styles/products.module.css'
import CardWide from '@/components/img/productCardWide'
import Link from 'next/link'

const CarLift: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Car Lift | Asian Lift Bangladesh'
          description='Car lift saves huge space to lift the car to different floor replacing the long runway. Moreover it adds extra value to your property. Contact us for futther discussion.'
          keywords='Car Lift Bangladesh, Buy car lift, elevator servicing, car lift comapny, car elevator company, car lift servicing, car lift design, passenger elevator servicing, lift phone number, lift maintenance company'
          canonical='https://asianliftbd.com/product/car-lift'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Car Lift</h1>
            <p>Used in high-class hotels and commercial buildings</p>
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
          <p>Car lift or Elevator for car is specially used to vertically carry the car. Mostly this kind of elevator is found on high class hotels and commercial buildings to enable parking access on different floors without compromising a lot of space by making lane. It can replace for lane in the garage. It can directly have access of the car in different parking decks. It can fulfill man-loaded type (joint loading of man and car) with the more convenient access of the car. Certain characteristics such as low running noise, safe, comfortable, smooth also gives premium user experience. Based on capacity, there are two types of car lift. One can take load up to 3000kgs whereas the bigger one able to take up to 5000kgs.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className='heading black'><span>Lift</span> Design</h2>
          <div className="row justify-content-center">

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='CE-001'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='CE-002'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='CE-003'/>
            </div>

          </div>
        </div>
      </section>

      
      
    </>
  )
}

export default CarLift