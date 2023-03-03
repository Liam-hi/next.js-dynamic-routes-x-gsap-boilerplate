import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/utils/data'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { motion } from 'framer-motion'


export default function Projects() {
    const populate = data.map(x =>
            <SwiperSlide key={x.id} >
                <figure>
                <Link key={x.id} href={`/${x.id}`}>
                    <img className='logo'src={x.img}/>
                    </Link>
                    <figcaption className='caption'>
                        <div className="caption-wrapper">
                            <motion.p className='project-title'
                                key="kd" 
                                exit={{transform: 'translateY(100%)'}} 
                                initial={{opacity: 1}} 
                                animate={{transform: 'translateY(0)'}} 
                                transition={{ duration: 0.8, ease: "easeInOut" }} 
                            >Spur Terra at National Western Center</motion.p>
                            <motion.p key="kksks" 
                                exit={{transform: 'translateY(100%)'}} 
                                initial={{opacity: 1}} 
                                animate={{transform: 'translateY(0)'}} 
                                transition={{ duration: 0.8, ease: "easeInOut" }} 
                                className='project-desc'>Commercial</motion.p>
                        </div>
                    </figcaption>
                </figure>
            </SwiperSlide>
      
      );

    
  return (

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode]}
    mousewheel={true}
    /* slidesPerView={2} */
    breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
         
          slidesPerView: 2,
        },
      }}
    spaceBetween={100}
    loop={true}
    centeredSlides={true}
    /* speed={10000} */
    freeMode={true}
    
    onSlideChange={() => console.log('slide change')}
  >
      { populate }

  </Swiper>
  )
}
