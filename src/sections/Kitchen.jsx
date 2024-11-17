import { useEffect} from "react";
import {useDispatch,useSelector}from 'react-redux'
import {fetchtoKitchen} from '../redux/productSlice'
import { addtocart } from "../redux/cartSlice";
const kitchen = () => {
  const dispatch=useDispatch();
  const products =useSelector((state)=>state.products)

  useEffect(() => {
    
   dispatch(fetchtoKitchen());
}, [dispatch]);

  return (
<div>

<div className='text-center mt-5 mb-10 font-semibold'>
  <h1 className='text-orange-600 text-5xl mb-3'>
  kitchen  </h1>
  <p>White Rose Furniture., makes the highest quality modern kitchens. Top Quality Materials, professional Craftsmanship. wide Colors Selection, value for money, and fastest delivery in the business.
   Have an awesome kitchen in mind? Book an appointment Now!</p>
  
</div>
      
      <div className='grid grid-cols-2 gap-5 justify-items-center' >
        {products.map((item)=>{
            return(
                    <div key={item.index} className=' mb-3 font-semibold shadow-md h-[380px]  shadow-gray-50 rounded-md hover:shadow-xl'>
                      <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                      <div className="grid grid-cols-2">
                        <div>
                           <h1 className='ml-4 text-xl mb-3 text-red-950'>{item.name}</h1>
                        <p className='ml-4 text-slate-700'  >{item.price}EGP</p>
                        </div>
                        <div className="mb-4 ">
                         <p  className='ml-4  mb-3text-slate-800'>{item.content}</p>

                         <p className='ml-4 mb-3 text-slate-700'  >{item.category}</p>

                        </div>
                        <button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300   mx-5  w-[100px] rounded-md'>add to cart</button>

                      </div>
                       
                       

                   
             
                </div>
            )
        })}
      </div>
    </div>
)
}

export default kitchen