// import  items  from "../new &singles/Data"
// import tables from './../assets/chair &table/Tables';
import {useDispatch}from 'react-redux'
import{addtocart} from '../redux/cartSlice'
import { useState,useEffect } from "react"

const Tables= () => {
  const dispatch=useDispatch()
  const[tables,setTables]=useState([]);
  useEffect(()=>{
    fetch('src/store/fruniture.json').then((res)=>res.json().then((data)=>
      {
        // const bedsdata = data.filter(product => product.category === 'Single Bed');
        setTables(data.Tables)
        console.log(data)
        console.log(data.Tables)
   } ))
    .catch(error => console.error('Error fetching product data:', error));
  },[])

  return (
   
    <div>

    <div className='text-center mt-5 mb-10 font-semibold'>
      <h1 className='text-orange-600 text-5xl mb-3'>
Tables </h1>
      <p className='text-slate-700'>


      Furnish your home with a touch of our modern and stylish Tables, from  White Rose Furniture. Buy Online Now.

  </p>
    </div>
          
          <div className='grid grid-cols-2 gap-5 justify-items-center' >
            {tables.map((item)=>{
                return(
                  <div key={item.index} className=' mb-3 h-[380px]   font-semibold shadow-md  text-center shadow-gray-50 rounded-md hover:shadow-xl'>
                         
                         <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                           <h1 className='ml-4 text-xl text-red-950 '>{item.name}</h1>
                           <p  className='ml-4 text-slate-800 mr-4 text-start'>{item.content}</p>
                           <p className='ml-4 text-slate-700  text-start'  >{item.price}EGP</p>
                           <button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300  mt-2 w-[100px] rounded-md'>add to cart</button>

                      
                           

                
                   </div>

                )
            })}
          </div>
        </div>
  )
}

export default Tables
