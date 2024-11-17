# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

// const[products,setProducts]=useState([]);
// useEffect(()=>{
// const fetchDate= async()=>{
// try{
// const res=await fetch("../fruniture.json");
// const data=await res.json();
// console.log(data);
// if(data.Bedroom){
// setProducts(data.bedroom) }
// }
// catch (error){
// console.log("thisis",error)
// }

// };
// fetchDate()
// },[])

---

fetch('http://localhost:8000/fruniture')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
const bedroomItemsData = data.Bedroom;
setBedroomItems(bedroomItemsData);
})
.catch(error => {
console.error('There was a problem with your fetch operation:', error);
});

          // "server": "^0.16.3"


          singleitem
          import Footer from './Footer';

// import {useParams} from 'react-router-dom'

import { useEffect,useState } from "react"
import {fetchProductById } from '../redux/oneProductSlice'
import { addtocart } from "../redux/cartSlice";

const Singleitem = (id) => {
// const {id}=useParams();

console.log(product)
// const handleDelete = (id) => {
// dispatch(deleteTodo({ id }));
// };

useEffect(() => {

dispatch(fetchProductById ({id}));
},[id]);
// const selectedItem = bedrooms.find(item => item.id === id);

const [count,setCount]=useState(1)
const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};

return (

<div className='h-full'>

    <div className='grid grid-cols-2 gap-10 font-semibold p-10 mt-5 ml-5'>

<img src={product.image} alt='image' className='w-[1200px] h-[300px] rounded-lg' />

        <div className='grid grid-cols-1 gap-5 text-center '>
           <h1 className='text-orange-700 text-3xl'>{product.name}</h1>
           <p className='text-xl'>{product.content}</p>

           <p className='text-xl'>{product.price} </p>
           <p>{product.category}</p>
           <p>This cozy throw blanket is perfect for adding warmth and texture to your living space. Its soft fabric and neat folding make it an ideal accessory for any sofa.</p>
           <div className='flex  gap-2'>

<button onClick={()=>increment()} className='w-[50px] bg-slate-300 rounded-lg' >+</button>

<p>{count}</p>
<button onClick={decrement} className='w-[50px] bg-slate-300 rounded-lg' >-</button>
<button className='bg-orange-500 text-slate-900 mx-10 w-[150px] rounded-xl ' onClick={()=>dispatch(addtocart(product))}>add to cart </button>

</div>

        </div>

    </div>
    <div className='p-10 mt-5  font-semibold'><ul className='p-5 grid gap-5 text-neutral-800 ' >
      <li>this is from the best wood </li>
      <li> there is 5 years warranty for wood</li>
      <li> there is 2 years warranty for  matteresses</li>

<li> Time Delivery:
Shipping complete order within 5 -7 working days</li>
      <li>the type of wood is zaan
 </li>

    </ul></div>

     <Footer/>
    </div>

)
}

## export default Singleitem

// const [news,setNews]=useState([]);
// const[error,setError]=useState(null);
// const[isLoading,setIsLoading]=useState(true)
// const options={
// method:"GET",
// headers:{
// "Cotent-Type":'fruniture/json'
// },
// }
// useEffect(()=>{
// fetch('api/newarrival?',options

// ).then(res=>{
// if(!res.ok){
// throw new Error("Network response was not ok")

// }
// return res.json()
// }).then((data)=>{
// console.log(data)
// setNews(data)
// }).catch(error=>{
// setError(error)
// console.log(error)

// }).finally(()=>{
// setIsLoading(false)
// })

// },[])
// if(isLoading){
// return <div>loading..</div>
// }
// if(error){
// return<div>this is error:{error.message}</div>
// }
