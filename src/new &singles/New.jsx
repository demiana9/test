import { useEffect,useState } from 'react';
import {useDispatch}from 'react-redux'
import{addtocart}from '../redux/cartSlice'
function New() {
  const dispatch=useDispatch()

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('src/store/fruniture.json')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.newarrival);
        console.log(data);
        console.log(data.newarrival);
      })
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);
        
  return (
    <div>
<div className="text-center  text-slate-800 mt-7">
    <h1 className="text-6xl text-orange-800 mb-3">New Arrivals</h1>
    <p className="text-xl">White Rose Furniture presents the most modern designs globally; to enrich your home with 
        
      <br/>  a touch of beauty that will catch your heart before eyes.</p>
</div>

<div className="grid grid-cols-2 gap-5 justify-items-center mt-5">
{news.map((item)=>{
    return(
      <div key={item.index} className=' mb-3 h-[380px]   font-semibold shadow-md   shadow-gray-50 rounded-md hover:shadow-xl'>
                         <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                         <div>

                         </div>
                           <h1 className='ml-4 text-xl  text-center text-red-950 '>{item.name}</h1>
                           <p  className='ml-4 text-slate-800 mr-4 text-start'>{item.content}</p>
                           <p className='ml-3 mb-2 text-slate-700  text'  >{item.price} EGP</p>
                           {/* <p className='ml-4 text-slate-700'  >{item.color}</p> */}
                           <button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300  ml-5 mt-2 w-[100px] rounded-md'>add to cart</button>

                
                   </div>
    )
}) }
</div>
    </div>
  )
}
export default New