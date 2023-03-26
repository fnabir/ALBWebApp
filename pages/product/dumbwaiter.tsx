import type { NextPage } from 'next'
import Meta   from '@/components/Meta'
import style from '@/styles/dumbwaiter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Dumbwaiter: NextPage = () => {
  return(
    <>
      <Meta
        title='Dumbwaiter | Asian Lift Bangladesh'
        description='Dumbwaiter is used in buildings to send foods or products to different floors.'
        keywords='Asian Lift Dumbwaiter, Dumbwaiter Lift Company, Dumbwaiter servicing, dumbwaiter in bangladesh'
        canonical='https://asianliftbd.com/product/dumbwaiter'
      />

      <div className={`${style.banner}`}>
        <div className="h-100">
          <div className="banner-area">
            <h1>Dumbwaiter</h1>
            <p>Used in high-class and luxurious hotels and commercial buildings</p>
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
          <p>A dumbwaiter is a small freight elevator or lift provides fast, convenient, economical vertical transport, greatly saving time and human resources. It can be widely used in hotels, restaurants, banks, hospitals and other places to transport such as food, tableware, daily necessities, such as the use of items. There are different varieties and specifications available. ANd this is not limited to the specific design but can also be designed according to your needs.</p>

          <p>
          ● In small space, without strong civil capacity, regardless of the old and new buildings can achieve the perfect design, economy.<br/>
					● Design, humanization makes the operation more flexible.<br/>
					● Because of the characteristics, its light load, can be divided into the window and trolley type two.<br/>
					● Safer, practical, elegant, quiet, flexible operation and easy maintenance.</p>
          
          <p>Asian Lift Bangladesh advice you to consult with a elevator company at the start of construction work to have a best and effiecient space for your elevator. We also provide instruction and consultancy regarding that. You can contact us any time or visit us.</p>
        </div>
      </section>

      <section>
        <h2 className='heading black'><span>Dumbwaiter</span> Design</h2>
        <div className="row justify-content-center">
          <Image src='/img/products/dumbwaiter.webp' alt='Dumbwaiter Design' width={1920} height={400} />
        </div>
      </section>
      
    </>
  )
}

export default Dumbwaiter