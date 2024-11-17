import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/ko.png'
import { Link } from 'react-router-dom';

function Footer() {
    const phone='01201806745';
    const email='demyanaadel7@gmail.com' ;
  return (
    <div className="  ">
       


        <div className=' grid  grid-cols-4  bg-slate-900 bottom-0  mt-0 text-white gap-10 h-[200px]'>
                  <div>

                  <img src={logo} alt="" 
       className='   h-[150px] w-[150px]  ' /> 
            </div>


  
        <div className=' mt-2'>
<h1 className='text-3xl'> White Rose</h1>

<p> <Link  to='/sections'> Sections</Link></p>
<p> <Link to='/contect' >contect us </Link>  </p>
<p><Link to='/about'>about us</Link> </p>
<p>  <Link to='/offers'> Hot Offer</Link></p>
<p>  <Link to='/new'>New Arrivel </Link></p>
        </div>

        <div className= '  grid gap-1 mt-2'>
         <h1 className='text-3xl'>Contect Us</h1>
     <p><FontAwesomeIcon icon={faPhone}/> <a href={`tel:${phone}`}>{phone}</a>  </p>
       <p><FontAwesomeIcon icon={faEnvelope}/>  Email: <a href={`mailto:${email}`}>{email}</a></p>
       <a href='https://web.facebook.com/?locale=ar_AR&_rdc=1&_rdr' target="_blank">
        <FontAwesomeIcon icon={faFacebook} /> FaceBook </a>
        <a href='https://web.whatsapp.com/' target='blank'>
        <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp  
        </a>
        
        </div>


        <div className=" grid gap-1 mt-2">
<h1 className='text-3xl'>Our Location  </h1>
<p> <FontAwesomeIcon icon={faLocationDot}/>  Sheikh Zayed</p>
<p>  <FontAwesomeIcon icon={faLocationDot}/>  1st Settlement </p>
<p>  <FontAwesomeIcon icon={faLocationDot}/>  5st Settlement </p>

        </div>
        
        </div>
     </div>
      
      
  )
}

export default Footer
