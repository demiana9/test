// import { Link } from "react-router-dom";
import { useEffect } from "react"
import {useDispatch,useSelector}from 'react-redux'
import {fetchtobeds} from '../redux/productSlice'
import { addtocart } from "../redux/cartSlice";
const Bedroom = ( ) => { 
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [selectedProductId, setSelectedProductId] = useState(null);
    const dispatch=useDispatch();
  const products =useSelector((state)=>state.products)

  useEffect(() => {
    
   dispatch(fetchtobeds());
}, [dispatch]);
// const array= products.Bedroom
// const handleClick = (productId) => {
//   setSelectedProductId(productId);
//   const selected = products.find((product) => product.id === productId);
//   setSelectedProduct(selected);
// };
// console.log(products)

  return (
    <div>

    <div className='text-center mt-5 mb-10 font-semibold'>
      <h1 className='text-orange-600 text-5xl mb-3'>
    Bed Room  </h1>
      <p className='text-slate-700'>
  Bedrooms available in various designs and sizes to make your bedroom as 
  special as it should be. <br/>Create the ultimate stylish bedroom of your dreams 
  to suit your taste with a huge range of<br/> marvelous modern bedrooms from  White Rose 
   Furniture.
   <br/>All our products are manufactured in our factories. Check them out!
  </p>
    </div>
          
          <div className='grid grid-cols-2 gap-5 justify-items-center' >
            {products.map((item)=>{
                return(
                  <div key={item.index}  className=' mb-3 h-[400px] font-semibold shadow-md  shadow-gray-50 rounded-md hover:shadow-xl'>

                        {/* <div key={item.index} onClick={() => handleClick(item.id)} className=' mb-3 h-[400px] font-semibold shadow-md  shadow-gray-50 rounded-md hover:shadow-xl'> */}
                        {/* <Link to={`/bedroom/${item.id}`}> */}
                          <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                            <h1 className='ml-4 text-xl text-red-950'>{item.name}</h1>
                            <p  className='ml-4 text-slate-800'>{item.content}</p>
                        
                            <p className='ml-4 text-slate-700'  >{item.price} EGP</p>
                          
                          <p className='ml-4 text-slate-700'  >{item.category}</p>
                           

                            {/* </Link> */}
                            <button onClick={()=>dispatch(addtocart(item))} className='bg-orange-300  ml-5 mt-2 w-[100px] rounded-md'>add to cart</button>

                            
                 
                    </div>
                )
            })}
          </div>
        </div>
  )
}

export default Bedroom

