import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,A11y } from 'swiper/modules';
import s1 from '../assets/s1.jpeg'
import s2 from '../assets/s2.jpg'
import l1 from '../assets/living/l4.jpg'
import l3 from '../assets/living/l8.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Sliders = () => {
  return (
    <div className=' top-[50%] left-[50%]    w-[80%] '>
       <Swiper  
      
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}    >
      <SwiperSlide>
      <h1 className='text-center text-orange-800' >Egeria catalogue Modern Living rooms 2023</h1>

        <img src={s1} alt="" className='w-[100%] h-[90%]  ' />
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='text-center text-orange-800' >Egeria catalogue Modern Living rooms 2023</h1>

        <img src={l1} alt=""className='w-[100%] h-[80%]'   />
      </SwiperSlide>
      <SwiperSlide> 
      <h1 className='text-center text-orange-800'>Stylisha Luxury Living Rooms</h1>

      <img src={s2} alt="" className='w-[100%]h-[80%] ' />
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='text-center text-orange-800'>Stylisha Luxury Living Rooms</h1>

        <img src={l3} alt="" className='w-[100%] h-[80%] ' />
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Sliders
      // scrollbar={{ draggable: true }}

