import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import logo from '../assets/ko.png'
import { useState } from "react"
import options from '../assets/options'
import items from '../assets/items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import Sections from './Sections';
import {useSelector}from 'react-redux'


const Navbar = () => {
  const cart=useSelector(state=>state.cart)
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    navigate(selectedOption);
       setSelectedValue(event.target.value);

  };
 

  return (
    <div className="bg-slate-900 text-xl p-7   font-semibold h-[100px] text-white flex justify-between">
      <div className=' -my-9'>
        <Link to='/'><img src={logo} alt="" 
       className='  flex items-stretch h-[100px] w-[150px]  ' /> </Link>
         </div> 
       
      <div className='flex justify-center  '>
        <ul className="flex  gap-8 p-2  ">
        <li className='mr-4'><Link to='/'>Home</Link></li>
      
       <li className=''>  Sections  <select className='bg-slate-900  text-white'
 value={selectedValue}
 onChange={handleSelect}
 > 
  {options.map((option) => (
  <option key={option.value} value={option.value} className='bg-slate-900 text-white'>    
              {option.name}    
  </option>
  ))}
  </select>       
        </li> 
      
       
        
       
    <li className=''> Single items <select className='bg-slate-900  text-white'
 value={selectedValue}
 onChange={handleSelect}
 >{items.map((item) => (
  <option key={item.value} value={item.value}>
  {item.name}
  </option>
  ))}
  </select> </li>
        <li className='text-nowrap  '><Link to='/about'>About Us</Link></li>
        <li className='text-nowrap  '><Link to='/contect'>Contect Us</Link></li>

    </ul>   
      </div>
      <div>
        <button onClick={()=>{
          navigate('/cart')
        }}
          className="bg-amber-600 text-center text-slate-900 w-[100px] h-10 rounded-lg"><FontAwesomeIcon icon={faCartPlus}/>Cart- {cart.length}  </button>
      </div>
    </div>
  )
}

export default Navbar
