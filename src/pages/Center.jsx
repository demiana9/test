import bc from '../assets/you.png'
import { useNavigate} from 'react-router-dom'
const Center = () => {
  const navigate=useNavigate();
  return (
    <div className='mt-20 grid grid-cols-2 gap-5 ' > 
     <img src={bc} alt=""  className='z-20   '/> 
    <div className='text-start text-slate-700 z-0 p-5 left-0  mt-4 top-0 '>
        <h1 className='text-3xl font-semibold  mb-4'>  White Rose Furniture      </h1>
        <p className='text-xl mb-5 '> offers the most beautiful furniture and the finest models <br />,more than 100 models to satisfy all clients  </p>
        <p className='text-xl mb-5'> Over Hundreds of products with highest variety of selection are waiting for you.  </p>
            <p className=' text-xl mb-5 font-semibold'>discount up to   50%</p>

<button className=' text-center ml-10 text-slate-800   bg-orange-400 font-semibold  w-[130px]  h-[60px]  rounded-xl' onClick={()=>navigate('/offers')}>show offers  </button> 



    </div>
    
    </div>
  )
}

export default Center
