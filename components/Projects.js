import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Projects() {

    
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
    <SwiperSlide>
        <figure>
            <img className='logo'src='images/2022-01-13-abstracta-2022-333-1024x683.jpg'/>
            <figcaption className='caption'>
                <p>jsjs</p>
                <p>ksks</p>
            </figcaption>
        </figure>
    
    </SwiperSlide>
    <SwiperSlide>
    <img className='logo'src='images/2022-01-13-abstracta-2022-333-1024x683.jpg'/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='logo'src='images/king-021-1024x715.jpg'/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='logo'src='images/lasse-olsson-photo-16009-1024x683.jpg'/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='logo'src='images/2022-01-13-abstracta-2022-333-1024x683.jpg'/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='logo'src='images/king-021-1024x715.jpg'/>
    </SwiperSlide>
  </Swiper>
  )
}
