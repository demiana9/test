import {useSelector,useDispatch}from 'react-redux'
import {deletfromcart,clear}from '../redux/cartSlice'
// const iscartempty =()=>{
//   return <div className='text-center text-4xl text-pink-900'> your cart is empty</div>
// }
 


const Cart = () => {
  const cart=useSelector(state=>state.cart);
  const dispatch=useDispatch()
  console.log(cart)
const totalPrice=cart.reduce((acc,product)=>{
  acc+=product.price;
  return acc
},0)
if (cart.length === 0) {
  return <div className='text-center p-10 text-4xl h-screen text-pink-900'>Your cart is empty</div>;}
  return (<div>
    {/* {cart.length === 0 ?<iscartempty/>: */}
    
      <div className='h-full'>
    
    <h1 className="text-orange-700 text-center text-5xl  p-7">your Shopping cart </h1>
  <h5 className='text-end font-bold text-2xl p-5  text-cyan-700'>totalPrice - {totalPrice}   EGP</h5>
  <hr/>
  
  <table  className="table-auto    mt-7 p-5" >
    <thead className=" ">
      <tr  className="  p-15 ">
        <th className="p-7">Title</th>
        <th className="p-7" >Image</th>
        <th className="" >price</th>
        <th className="" >actions</th>
  
      </tr>
    </thead>
    <tbody className="">
    {
      cart.map((product)=>( <tr className=" p-7 text-md font-semibold" key={product.id}>
        <td className="p-7" >{product.name}</td>
        <td className="p-7" ><img  className='w-[150px] rounded-xl' src={product.image}/></td>
        <td className="p-7"  >{product.price} EGP</td>
        <td className="p-7"  >
  <button className="w-[80px] bg-slate-400 rounded-lg mr-2"  onClick={()=>dispatch(deletfromcart(product))}>Delet</button>
  {/* <button className="w-[80px] bg-slate-400 rounded-lg  mt-4">add again</button> */}
  
        </td>
  
      </tr>
  
      )
       
  
      )
    }
      
   
    </tbody>
  </table> 
  <button onClick={()=>dispatch(clear())} className='ml-5 bg-red-400 w-[150px] rounded-lg  mb-5 mt-5'>clear all</button>
  
   </div>
    
  </div>
   
  )
}

export default  Cart 
