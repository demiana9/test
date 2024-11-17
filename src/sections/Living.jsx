// import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import {useDispatch,useSelector}from 'react-redux'
import {fetchtoliving} from '../redux/productSlice'
import { addtocart } from "../redux/cartSlice";


const Living = () => {


  const dispatch=useDispatch();
  const products =useSelector((state)=>state.products)
console.log(products)

  useEffect(() => {
    
   dispatch(fetchtoliving());
}, [dispatch]);






  // const [living,setLiving]=useState([]);
  // const[error,setError]=useState(null);
  // const[isLoading,setIsLoading]=useState(true)
  // const options={
  //   method:"GET",
  //     headers:{
  //       "Cotent-Type":'application/json'
  //     },
  // }
  // useEffect(()=>{
  //   fetch('api/living?',options
  //     // api/living
  //   ).then(res=>{
  //     if(!res.ok){
  //       throw new Error("Network response was not ok")
      
  //     }
  //     return res.json()
  //   }).then((data)=>{
  //     console.log(data)
  //     setLiving(data)
  //   }).catch(error=>{
  //           setError(error)
  //           console.log(error)

  //   }).finally(()=>{
  //     setIsLoading(false)
  //   })
    
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
living Room  </h1>

<p className='text-slate-700'>
      Here you’ll find all the pieces of living rooms that match your needs from living sets, L-Shapes, 
      Sofa beds, Recliners  <br/>and more from White Rose Furniture. In terms of function, coordination and looks, with the capacity that allows us to 
      <br/> marvelous modern bedrooms from White Rose 
       Furniture.
       <br/>comply with any order size to anywhere in Egypt. All our products are manufactured in our factories. Order Now! 
      </p>
  
</div>
      
      <div className='grid grid-cols-2 gap-5 justify-items-center' >
        {products.map((item)=>{
            return(
                    <div key={item.index} className=' mb-3 font-semibold   text-center h-[380px] shadow-md  shadow-gray-50 rounded-md hover:shadow-xl'>
                    {/* <Link to={`/living/${item.id}`}> */}

                      <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                        <h1 className='ml-4 text-xl text-red-950'>{item.name}</h1>
                        <p  className='ml-4 text-slate-800'>{item.content}</p>
                        <p className='text-slate-800'>{item.title}</p>
                        <p className='ml-4 text-slate-700'  >{item.price}EGP</p>
<button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300 mt-2 w-[100px] rounded-md'>add to cart</button>
                   {/* </Link> */}
                        
             
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Living
