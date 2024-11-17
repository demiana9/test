import Sliders from './Sliders';
import { Link,Outlet } from 'react-router-dom';
const Endcenter = () => {
  return (
    <div className='mb-10'>
      <div className='text-center text-3xl  text-orange-700 mt-5 mb-3'>The Best Seller</div>
<div className=' flex justify-center'>
    <Sliders/>
</div>
<div  className="text-white text-center bg-slate-900 w-[350px] mt-1 h-[50px] m-auto rounded-xl">
<p className="text-2xl m-auto"><Link to="/living"> Show The Best seller in living </Link> </p> 

</div>
<Outlet/>
    </div>
  )
}

export default Endcenter
