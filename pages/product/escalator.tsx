import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '../../styles/escalator.module.css'
import global from '../../styles/products.module.css'
import CardWide from '../../components/img/productCardWide'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Escalator: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Escalator | Asian Lift Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='Contact Asian Lift, Contact Bangladesh Lift Company, elevator servicing contact, bangladesh lift contact, lift servicing chittagong, passenger elevator servicing, lift phone number, contact info of bangladesh lift company, lift maintenance company'
          canonical='https://asianliftbd.com/product/escalator'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Escalator</h1>
            <p>Widely used in industrial buildings and warehouses</p>
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
          <p><strong>Sophisticated technology Ambilight</strong><br/>
          Escalator widely used in shopping malls, supermarkets, subways, airports and other places of traffic, for your building to add a beautiful flow of scenery. Modern escalator comes with various safety features to avoid any kind of accident.</p>

          <p><strong>Highly sensitive modular structure</strong><br/>
          ● With cascade speed monitoring, intelligent operation, fast operation ensures safe and reliable travel.<br/>
					● The pressure sensor detects a feedback signal input control cabinet, control power and sprocket to guarantee the escalator safety.<br/>
					● The new rotary automatic lubricating device, which comprises a worm wheel type fueller, provide lubrication and escalator safety.<br/>
					● Non-escalator operation special inverse monitoring device, improve the safety monitoring of escalator.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className='heading black'><span>Escalator</span> Design</h2>
          <div className="row justify-content-center">

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RES-001'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RES-002'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RES-003'/>
            </div>

          </div>
        </div>
      </section>

      
      
    </>
  )
}

export default Escalator