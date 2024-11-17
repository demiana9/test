import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Contectus = () => {
  return (
    <div className='h-screen'>
    <div><h1 className='text-4xl text-center text-slate-900 mt-4 mb-3'>Contect US</h1>
   <p className='p-5 text-xl'>Welcome to White Rose Furniture, where luxury meets functionality and 
    design is elevated to an art form.<br/> As a prominent luxury furniture store,
     we understand the importance of creating exceptional living spaces that reflect <br/>your 
     unique style and personality. Our commitment is to provide you with exclusive<br/> pieces that not only enhance your 
   home décor but also improve your quality of life.About us</p>
    </div>
    <div className='p-6 text-slate-900 font-semibold'>
   <h1  className='text-3xl  text-center text-orange-800 mb-5 '>Our Location</h1>
   <div className=' grid grid-cols-3 gap-4'>
    <div>
        <p> <FontAwesomeIcon icon={faLocationDot}/>  Sheikh Zayed</p>
         <p>3street azalden, Sheikh zyed</p>
    </div>
    <div>
       <p>  <FontAwesomeIcon icon={faLocationDot}/>  1st Settlement </p>
         <p>1st Sky mall</p>

    </div>
        <div>
             <p>  <FontAwesomeIcon icon={faLocationDot}/>  5st Settlement </p>
         <p>1st 3Start Mall </p>
        </div>
   </div>
        

    </div>
    <div className='p-6 font-semibold'>
    <h1  className='text-3xl  text-center text-orange-800 mb-5  '>our pages</h1>
    <div className='grid grid-cols-3 gap-5'>
    <a href='https://web.facebook.com/?locale=ar_AR&_rdc=1&_rdr' target='blank'> <FontAwesomeIcon icon={faFacebook} />Facebook</a>

     <a href='https://web.facebook.com/?locale=ar_AR&_rdc=1&_rdr' target='blank'> <FontAwesomeIcon icon={faInstagram} />Instagram</a>
     <a href='https://web.whatsapp.com/' target='blank'> <FontAwesomeIcon icon={faWhatsapp} />Whatsapp</a>

    </div>
    

    </div>

    </div>
  )
}

export default Contectus
