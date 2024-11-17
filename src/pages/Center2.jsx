import t from '../assets/tt.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link,Outlet } from "react-router-dom"
import {useSelector,useDispatch }from 'react-redux'
import { fetchtooffers}from '../redux/productSlice'
import { useEffect } from 'react'
import {addtocart}from '../redux/cartSlice'

function Center2() {
  const dispath=useDispatch();
  const products=useSelector((state)=>state.products)
  useEffect(()=>{
    dispath(fetchtooffers()
  )

  },[dispath])

    console.log(products)

  return (
    <div className="  h-full">
      <div  className="h-[150px] w-full mt-10   flex justify-between text-slate-900 z-10 bg-orange-400 rounded-xl">
       <span>
 <h1 className="text-4xl  mt-8 ml-10">Hot offers</h1>
        <p className="text-2xl  ml-10">
        <FontAwesomeIcon icon={faWandMagicSparkles} />   
        check out the lastest offers,extra discount up to<span className="text-5xl"> 50% </span> 

        </p>
       </span>
       
  <img src={t} alt=""  className="h-[230px] w-[150px] -my-20  z-0"/>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-2 ">
        {products.slice(0,6).map((offer)=>{
          return(
            <div key={offer.id} className=" flex justify-center rounded-xl   hover:translate-y-1">

<div className=" bg-slate-100  text-slate-800 p-3  font-semibold rounded-xl"> 
 
  <img src={offer.image} alt=""  className="rounded-2xl w-full h-15 "   />
  <span>
    
        <h1 className='text-2xl text-center'> {offer.name}    </h1>
        {/* <span  className=' text-xl' >{offer.content}</span> */}
        <div className=' text-xl' >{offer.category}</div>

            <div className='text-xl  mb-2 text-orange-700 text-start  '>{offer.price} EGP</div>
           
            <div>
                 <button  onClick={()=>{dispath(addtocart(offer))}}className='bg-slate-900 text-white h-[50px] w-[150px] rounded-xl mb-1 mr-0'>
             
            Add To Cart <FontAwesomeIcon className=" " icon={faCartPlus} />   </button>
           
            
            </div>
         
  </span>
            
                    </div> 
</div>
            
          )
        }) }
      
      </div>
      <div  className="text-white text-center bg-slate-900 w-[350px] mt-4 h-[50px] m-auto rounded-xl"> 
       <p className="text-2xl m-auto">
        <Link to='/offers'> View More Offers </Link> </p> 
        </div>
        <Outlet/>
    </div>
  )
}

export default Center2

