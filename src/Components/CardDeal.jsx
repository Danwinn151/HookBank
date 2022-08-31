import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
         <h2 className={`${styles.heading2}`}>
           Find a Better Card Deal <br className='sm:block hidden'/>
           In few easy steps
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5]`}>
           Arcu tortor, pusrus in nattis at sed integer faucibus.
           Aliquet quis alisquet eget nauris tortor Aliquet ultrices
           ac, ametau
         </p>
         <div className='mt-10 rounded-[10px]'>
            <Button/>
         </div>
      </div>        
      <div className={`${layout.sectionImg}`}>
            <img src={card} alt="card" className="w-[100%] h-[100%]"
            />
        </div>
    </section>
  )
}

export default CardDeal