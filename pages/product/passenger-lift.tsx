import type { NextPage } from 'next'
import Link from 'next/link'

import Meta   from '@/components/Meta'
import style from '@/styles/passenger-lift.module.css'
import global from '@/styles/products.module.css'
import Card from '@/components/img/productCard'


const PassengerLift: NextPage = () => {
  return(
    <>
      meta={
        <Meta
          title='Passenger Lift | Asian Lift Bangladesh'
          description='Asian Lift Bangladesh is one of the leading lift companies providing different types of elevator with excellent maintenance service since 2010 through skilled engineers and experienced technicians.'
          keywords='buy passenger lift, passenger Lift Bangladesh, building lift servicing, bangladesh lift contact, passenger lift servicing chittagong, passenger lift servicing, passenger lift maintenance company, import passenger elevator, install passenger lift bangladesh'
          canonical='https://asianliftbd.com/product/passenger-lift'
        />
      }

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Passenger Lift</h1>
            <p>For modern residentioal and industrial buildings</p>
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
          <p>Asian Lift Bangladesh provided more than hundred of Passeneger elevator. Our passenger elevators provide service to vast passengers with safe up-down travel. We have gained deep trust from extensive clients by superior clients and perfect service. Our determination to supply best and original quality and perfect service helped us to reach this position.</p>

          <p><strong>Intellectual Passenger Elevator Control System</strong><br/>
          Integrated controllers of our elevators is independently developed, organically combining elevator control and motor drive to Create a new generation of intelligent, vector integrated controllers for elevators. This type of control system mainly includes a integrated controller for elevators, a carriage control board, a display control board, a carriage command board.</p>

          <p><strong>Unique Graphic Generator</strong><br/>
          It ensures more smooth elevator acceleration, decelartion, brake with more comfortable travel. Meanwhile it reduces inter-floor running time to lowest extent. It also enhances travel efficiency greatly.</p>
          
          <p><strong>Safety First</strong><br/>
          Priority in your safety makes your journey through you building with our lift more comfortable. We try to provide up-to-date safety with our passenger elevator to ensure safety first.</p>
          
          <p><strong>Water-proof Infrared Light Curtain</strong><br/>
          Infrared light curtain is a safety protection net in the entrance of cabin. It sensitivelyreacts to any person or object that enters into probbing plane. It reduces the trouble that door clamps passeneger. It brings about more durable infrared light curtain after water-proof treatment with more considerate protection.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section className='bgw1'>
        <h2 className='heading black'><span>Lift</span> Design</h2>
        <div className="row justify-content-center">

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-011'/>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='RJ-013'/>
            <a href="http://www.shinesweb.com/quanjing/pre/xinglicai/srh/RJ013/" target="_blank" rel="noreferrer">360 Degree</a>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-016'/>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='RJ-018'/>
            <a href="http://www.shinesweb.com/quanjing/pre/xinglicai/srh/RJ018/" target="_blank" rel="noreferrer">360 Degree</a>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-019'/>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-020'/>
          </div>
          
          <div className={global.product+" "+global.i1}>
            <Card path='RJ-027'/>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-028'/>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='RJ-031'/>
            <a href="http://www.shinesweb.com/quanjing/pre/xinglicai/srh/RJ031/" target="_blank" rel="noreferrer">360 Degree</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='RJ-034'/>
            <a href="http://www.shinesweb.com/quanjing/pre/xinglicai/srh/RJ034/" target="_blank" rel="noreferrer">360 Degree</a>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-036'/>
          </div>

          <div className={global.product+" "+global.i1}>
            <Card path='RJ-037'/>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-J001'/>
            <a href="http://www.mdkselevator.com/view.php?id=205" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-J002'/>
            <a href="http://www.mdkselevator.com/view.php?id=223" target="_blank" rel="noreferrer">Details</a>
          </div>
          
          <div className={global.product+" "+global.i2}>
            <Card path='MD-J003'/>
            <a href="http://www.mdkselevator.com/view.php?id=222" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J004'/>
            <a href="http://www.mdkselevator.com/view.php?id=215" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J005'/>
            <a href="http://www.mdkselevator.com/view.php?id=204" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J006'/>
            <a href="http://www.mdkselevator.com/view.php?id=203" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J007'/>
            <a href="http://www.mdkselevator.com/view.php?id=202" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J008'/>
            <a href="http://www.mdkselevator.com/view.php?id=201" target="_blank" rel="noreferrer">Details</a>
          </div>

          <div className={global.product+" "+global.i2}>
            <Card path='MD-J009'/>
            <a href="http://www.mdkselevator.com/view.php?id=200" target="_blank" rel="noreferrer">Details</a>
          </div>

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
      </section>

      
      
    </>
  )
}

export default PassengerLift