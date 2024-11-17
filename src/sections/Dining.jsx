import { useEffect } from "react"
import{fetchtodining}from '../redux/productSlice'
import{useDispatch,useSelector }from 'react-redux'
// import { Link } from "react-router-dom";
import { addtocart } from "../redux/cartSlice";
const Dining = () => {
  const dispatch=useDispatch();
  const products =useSelector((state)=>state.products)
console.log(products)
  useEffect(() => {
    
    dispatch(fetchtodining());
 }, [dispatch]);
//   const[dining,setDining]=useState([]);
// const[isLoading,setIsLoading]=useState(true);
// const[error,setError]=useState(null)
// useEffect(()=>{
//   fetch('http://localhost:8000/dining').then((res)=>{
//     if(!res.ok){
//       throw new Error("Network response was not ok");
//     }
//     return res.json()
//   }).then((data)=>{ setDining(data)
//     console.log(data)
//   }).catch((error)=>{ setError(error)
//     console.log(error)
//   }).finally(()=>{setIsLoading(false)})
// },[])
// if(isLoading){
//   return <div>loading..</div>
// }
// if(error){
//   return<div>this is error:{error.message}</div>
// }
  return (
    <div>

    <div className='text-center mt-5 mb-10 font-semibold'>
      <h1 className='text-orange-600 text-5xl mb-3'>
Dining Rooms
 </h1>
    
    <p className='text-slate-700'>
    Durable and specially crafted dining rooms that will fit all what your home needs with high quality materials. Furnish  <br/>and more from White Rose Furniture. In terms of function, coordination and looks, with the capacity that allows us to 
          <br/> your home with a touch of our modern and stylish dining rooms, dining chairs, Buffets and display units from White Rose
           <br/>Furniture. All our products are manufactured in our factories. Order Now! 
          </p>
      
    </div>
          
          <div className='grid grid-cols-2 gap-5 justify-items-center' >
            {products.map((item)=>{
                return(
                        <div key={item.index} className=' mb-4  font-semibold shadow-md  shadow-gray-50 rounded-md hover:shadow-xl h-[400px]'>
          {/* <Link to={`/diningroom/${item.id}`}> */}
                          <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                            <h1 className='ml-4 text-xl text-red-950'>{item.name}</h1>
                            <p  className='ml-4 text-slate-800'>{item.content}</p>
                            <p className='ml-4 mt-2 text-slate-700 '  >{item.price} EGP</p>
    
                           {/* </Link> */}
                           <button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300  ml-5 mt-2 w-[100px] rounded-md'>add to cart</button>

                 
                    </div>
                )
            })}
          </div>
        </div>  )
}

export default Dining