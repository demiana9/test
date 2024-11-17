import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
const reviwers=[
    {name:" Ali samer",text:" your fruniture so beautiful"},
    {name:"demyana adel",text:"thank you for dealing with whiterose.delivery within 48 hours"},
    {name:"waleed asaad",text:"the brushes are more than wonderful and the team is very respectful"},
    {name:"mariam samer",text:" their designs are very modern and the prices are excellent .transportation and installation is free"},
    {name:" adel ",text:"your team is very respectful "}
]

const Review = () => {
  return (
    <div className=' top-[50%] left-[50%]  ml-15   '>
    <div className='font-semibold p-8'>
        <h1 className='text-orange-600 text-3xl mb-3'>Testimonials</h1>
<p>
white Rose Furniture, always puts in its consideration our clients’ reviews. 
As it’s the fuel that drives us forward,<br/> 

and makes us do our best to give best products’ quality and most professional service.<br/>
 Here is some kind words from clients who put their trust in us. 
</p>
    </div>
    <Swiper  
   
   modules={[Navigation, Pagination,  A11y]}
   spaceBetween={50}
   slidesPerView={2}
   navigation
   pagination={{ clickable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}    >
<div className='mt-5 mb-5 p-7 w-[300px] '>

    {reviwers.map((item)=>{
    return <SwiperSlide >
    <div  key={item.idx} className='h-[200px]  w-[350px] rounded-xl mb-5 ml-5 p-7  bg-orange-300'>
           <h1 className='text-center text-white bg-orange-600 mt-0 rounded-lg h-[30px] text-center' > {item.name}</h1>
           <p>{item.text}</p>

    </div>

   </SwiperSlide>
   })}
</div>
   
   
   
  
   
 </Swiper>
 </div>
)

}

export default Review
