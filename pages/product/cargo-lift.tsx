import type { NextPage } from 'next'
import Link from 'next/link'

import Meta   from '@/components/Meta'
import style from '@/styles/cargo-lift.module.css'
import global from '@/styles/products.module.css'
import Card from '@/components/img/productCardWide'

const CargoLift: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Cargo Lift | Asian Lift Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='Contact Asian Lift, Contact Bangladesh Lift Company, elevator servicing contact, bangladesh lift contact, lift servicing chittagong, passenger elevator servicing, lift phone number, contact info of bangladesh lift company, lift maintenance company'
          canonical='https://asianliftbd.com/product/cargo-lift'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Cargo Lift</h1>
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
          <p>A cargo lift, or freight elevator, is an elevator designed to carry goods, rather than passengers. This type of elevator used specially for carrying industrial goods, raw materials. Crago lifts are typically larger and capable of carrying heavier loads than a passenger elevator, generally from 2,000 to 4,500 kg. Previously, cargo lifts equipped with manually operated doors and often have rugged interior finishes to prevent damage while loading and unloading. But now, there is an option to have automatic door system as like as Passenger Lift. But, we advice you to have a lift operator to ensure the safety of your lift.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className='heading black'><span>Lift</span> Design</h2>
          <div className="row justify-content-center">

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <Card path='RJ-001'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <Card path='RJ-002'/>
            </div>

          </div>
        </div>
      </section>

      
      
    </>
  )
}

export default CargoLift