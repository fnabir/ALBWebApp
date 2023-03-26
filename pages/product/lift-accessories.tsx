import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '../../styles/lift-accessories.module.css'
import global from '../../styles/products.module.css'
import CardWide from '../../components/img/productCardWide'

import Link from 'next/link'

const LiftAccessories: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Lift Accessories | Asian Lift Bangladesh'
          description='Create your custom design lift or change your lift accessories to look like new again by browsing from our wide designs to create your own unique yet elegant lift design.'
          keywords='Lift accessories Bangladesh, lift parts supplier, lift repair, asian lift bangladesh, custom design elevator bangladesh, export custom design lift'
          canonical='https://asianliftbd.com/product/lift-accessories'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Lift Accessories</h1>
            <p>Custom Design your own lift or Repair your lift to a new lift</p>
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
          <p>Asian Lift Bangladesh provides the best suitable design for the available products. But we also understand your wish to customize your lift as your wish. To fulfil your wish we have various design for the lift components which you may change if you want. We have divided the components in sections to ease your browsing. If you have something in your mind which is not here, you may feel free to let us know so that we can try to facilitate your wish. Our lift accessories section is not only for the accessories but to also showcase our different designs that we can offer.</p>

          <p>For your information, if you just need a small amount of accessories, we don&apso;t do that. We don&apos;t manufacture any accessories but export from our partners. We also do full repairing and maintenance service. If you want to discuss over, feel free to contact us any time or visit us.</p>
        </div>
      </section>

      <section>
          <h2 className='heading black'><span>Design</span></h2>

          <hr className='w-100'/>
          <h3 className='black'>Cabin Wall</h3>
          <hr className='w-100'/>
          
          <div className="row justify-content-center">

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-901'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-902'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-902'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-904'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-905'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-906'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-907'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='STB-908'/>
            </div>

          </div>
          
          <hr className='mt-2 w-100'/>
          <h3 className='black'>Celling</h3>
          <hr className='w-100'/>
          
          <div className="row justify-content-center">

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-011'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-013'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-015'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-016'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-017'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RD-018'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-318'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-319'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-331'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-332'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-337'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-338'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-339'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-353'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-354'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-355'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-356'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-359'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-360'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-361'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-363'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-364'/>
            </div>

          </div>

          <hr className='mt-2 w-100'/>
          <h3 className='black'>Door</h3>
          <hr className='w-100'/>
          
          <div className="row justify-content-center">

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-011'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-012'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-013'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-014'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-015'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RT-100'/>
            </div>

          </div>

          <hr className='mt-2 w-100'/>
          <h3 className='black'>Hand Rail</h3>
          <hr className='w-100'/>
          
          <div className="row justify-content-center">

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-01'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-02'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-03'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-04'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-05'/>
            </div>

            <div className={global.product+" "+global.productWide+" "+global.i1}>
              <CardWide path='RF-07'/>
            </div>

          </div>

          <hr className='mt-2 w-100'/>
          <h3 className='black'>Floor</h3>
          <hr className='w-100'/>
          
          <div className="row justify-content-center">

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-002'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-008'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-010'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-011'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-012'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='RPV-013'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-703'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-706'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-710'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-711'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-712'/>
            </div>

            <div className={global.product+" "+global.i1}>
              <CardWide path='STB-713'/>
            </div>

          </div>

      </section>

    </>
  )
}

export default LiftAccessories