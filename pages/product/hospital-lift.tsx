import type { NextPage } from 'next'
import Link from 'next/link'

import Meta   from '@/components/Meta'
import style from '@/styles/hospital-lift.module.css'
import global from '@/styles/products.module.css'
import Card from '@/components/img/productCard'
import CardWide from '@/components/img/productCardWide'


const HospitalLift: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Hospital Lift | Asian Lift Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='buy hospirtal lift, Hospital Lift Bangladesh, hospital elevator servicing, bangladesh lift contact, hospital lift servicing chittagong, hospital lift servicing, hospital lift maintenance company'
          canonical='https://asianliftbd.com/product/hospital-lift'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Hospital Lift</h1>
            <p>Widely used in industrial buildings and warehouses</p>
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href='/'>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='bgw2'>
        <div className="container text-justify">
          <p>Hospital Lift (also called as stretcher lift) is the type of lift specially used for the purpose of movement of hospital patient, nurse and Doctors. Even though it is pretty similar to passenger lift, certain specification makes it different. Door opening required to be bigger for wheelchair and hospital bed. Otherwise you may end up unable to use the lift for the purpose you installed. For passenger lift, you may have the freedom to have any ratio between width and length for lift space. But for hospital lift, you must have the bigger length to fit the hospital bed. Besides, hospital lift is made in a way to run continuously for all day. As in the hospital or clinics, there is always movement, this is focused on building process of hospital lift to avoid breakdown between rush hour. This type of lift mainly used for allowing patients in hospitals and nursing homes and people receiving home health care to be transferred between a bed and a chair or other similar resting places. Hospital lift also used as a emergency lift in some large building to support any emergency medical condition or disabled movement support.</p>
          
          <p>Placement of hospital lift is also a major issue. Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <h2 className='heading black'><span>Lift</span> Design</h2>
        
        <div className="row justify-content-center">

          <div className={global.product+" "+global.i2}>
            <Card path='MD-B001'/>
            <a href="http://www.mdkselevator.com/view.php?id=227" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-B002'/>
            <a href="http://www.mdkselevator.com/view.php?id=226" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-B003'/>
            <a href="http://www.mdkselevator.com/view.php?id=225" target="_blank" rel="noreferrer">Details</a>
          </div>

        </div>

        <div className="row justify-content-center">
          
          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <CardWide path='RJ-017'/>
          </div>

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <CardWide path='RJ-021'/>
          </div>

        </div>

      </section>
      
    </>
  )
}

export default HospitalLift