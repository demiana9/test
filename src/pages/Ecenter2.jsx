import { Link } from 'react-router-dom'
import {useDispatch,useSelector}from 'react-redux'
import {addtocart} from '../redux/cartSlice'
import { useEffect} from 'react'
import {fetchtonews}from '../redux/productSlice'
const Ecenter2 = () => {
  const dispatch=useDispatch();
  const products =useSelector((state)=>state.products)
console.log(products)
  useEffect(() => {
    
    dispatch(fetchtonews());
 }, [dispatch]);
  //   fetch('src/store/fruniture.json').then((res)=>res.json().then((data)=>
  //     {
  //       setNew(data.newarrival)
  //       console.log(data)
  //       console.log(data.newarrival)

  //  } ))
  //   .catch(error => console.error('Error fetching product data:', error)
  
  // );
console.log( products)


  
  return (
    <div className="h-full">
      <div className="text-center text-slate-900 text-5xl mb-7">
      <h1 className='mt-5 mb-7'>New Arrival</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 justify-items-center'>
      { products.map((n)=>{
        return(
          <div key={n.value} className='shadow-md h-[380px] p-2 shadow-gray-50 rounded-md hover:shadow-xl'>
             <img src={n.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                        <h1 className='ml-4 text-xl text-red-950'>{n.name}</h1>
                        <p  className='ml-4 text-slate-800'>{n.content}</p>
                        <p className='ml-4 text-slate-700'  >{n.price} EGP</p>
                        <button onClick={()=>dispatch(addtocart(n))} className='bg-orange-300 text-center  mt-2 w-[100px] rounded-md'>add to cart</button>
          </div>
        )
      })}
      
      <div  className="text-white text-center relative bg-slate-900 w-[350px] mt-4 h-[50px] m-auto mb-8 left-[50%]  rounded-xl"> 
       <p className="text-2xl text-center  text-nowrap ">
        <Link to='/new'> View More New Arrivals </Link> </p> 
        </div>

      

      </div>
    </div>
  )
}

export default Ecenter2
