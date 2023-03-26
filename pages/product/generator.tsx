import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '../../styles/generator.module.css'
import global from '../../styles/products.module.css'
import Card from '../../components/img/productCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Generator: NextPage = () => {
  return(
    <>
      <Meta
        title='Generator | Asian Lift Bangladesh'
        description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
        keywords='Contact Asian Lift, Contact Bangladesh Lift Company, elevator servicing contact, bangladesh lift contact, lift servicing chittagong, passenger elevator servicing, lift phone number, contact info of bangladesh lift company, lift maintenance company'
        canonical='https://asianliftbd.com/product/cargo-lift'
      />

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Generator</h1>
            <p>Used in shopping malls, hospitals, buildings, warehouses</p>
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href={useRouter().basePath}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='bgw2'>
        <div className="container text-justify">
          <p>Asian Lift Bangladesh provides exported pre-integrated generator sets, transfer switches, paralleling equipment and controls for use in standby, prime and continuous rated systems. Diesel generator sets are available in sizes ranging from 11 to 3000 kVA. We are able to match the right generating, transfer and control technologies with your power needs - be it continuous, prime, peaking, standby, cogeneration, or a complete turnkey power plant. So wherever you need fully integrated, reliable and efficient power, you can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <h2 className='heading black'><span>Generators</span></h2>
        <div className="row justify-content-center">

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <Card path='C15'/>
          </div>

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <Card path='C38'/>
          </div>

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <Card path='C150'/>
          </div>

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <Card path='C550'/>
          </div>

        </div>
      </section>

      
      
    </>
  )
}

export default Generator