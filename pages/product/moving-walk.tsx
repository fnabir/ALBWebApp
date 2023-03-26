import type { NextPage } from 'next'
import Link from 'next/link'

import Meta   from '@/components/Meta'
import style from '@/styles/moving_walk.module.css'
import global from '@/styles/products.module.css'
import CardWide from '@/components/img/productCardWide'

const MovingWalk: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Moving Walk | Asian Lift Bangladesh'
          description='Moving walk is for the places where a lot of people walks a long distance. It saves time and gives comfort the people who need to walk away.'
          keywords='moving walk escalator, long distance auto walk, bangladesh lift company, lift servicing chittagong'
          canonical='https://asianliftbd.com/product/moving-walk'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Moving Walk</h1>
            <p>Used where people need to walk long distance</p>
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
          <p>Moving walks turns long stretches become shorter. Help passengers take a break or speed their pace. Our moving walks use conveyor technology to keep people safe as they move to their destination. Thanks to the slim dimension which fits anywhere, requires very little construction work and technical features guranttes efficiency. It can be easily relocated to different parts of building depending on traffic needs. Moving walk requires less than 400m pit or can be installed on top of an existing floor. All that&apos;s needed for installation are two ramps at each end. The length of moving walk can be shortened or enlarged.</p>

          <p><strong>Intelligent control of seismic type truss device</strong><br/>
          ● With the earthquake, anti natural disaster function.<br/>
          ● With cascade speed monitoring, intelligent operation, fast operation, safe and reliable.<br/>
          ● Provide automatic sidewalk lubrication safety, and improve safety monitoring autowalk.<br/>
          ● And a device - safety braking method to guarantee the safety of automatic sidewalk.<br/>
          ● The mute device design with buffer bearing wheel and multiple chain drive, low noise effect to environmental protection.<br/>
          ● The machine adopts the infrared monitoring device to increase monitoring in energy saving startup, increase safety performance, reduce the risk.</p>

          <p><strong>Power Efficiency</strong><br/>
          Sensors to detect passenger. After a certain time of run without any passenger, it shifts to idle run to save power. As soon as a passenger move in, it starts to move in swiftly.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <h2 className='heading black'><span>Moving Walk</span> Design</h2>
        <div className="row justify-content-center">

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <CardWide path='ALB-901'/>
          </div>

          <div className={global.product+" "+global.productWide+" "+global.i1}>
            <CardWide path='ALB-902'/>
          </div>

        </div>
      </section>
      
    </>
  )
}

export default MovingWalk