import about from '../assets/about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup ,faIndustry ,faCertificate ,
  faChartLine,faGear,faTruck
} from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
        <div className="text-center text-slate-800 mt-8 font-semibold">
            <h1 className="text-6xl "> About Us</h1>
            <p className="text-xl mt-5">White Rose Furniture brand was introduced providing modern furniture solutions for both residential and hospitality businesses. As demand grew at a significant rate over the course of years. We inaugurated SAI-Solutions a modern wood furniture manufacturing plant 
                <br/>to meet the growing demand in both local & export markets.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 ml-4">
           <div>
           <div  className='mb-5'>
                <h1 className='text-orange-800 text-4xl mb-4'>Who we are</h1>
                <p className='text-xl'>White Rose Furniture is the largest furniture factory in the Middle East,<br/>
                     which produces 1000 rooms per week. Smart furniture is an Egyptian <br/>company with more than 20 years’
                      experience in modern furniture<br/> production. Our factories are equipped with advanced technology and machinery,<br/>
                     everything we’d need to bring our unique vision to you.</p>
            </div>
             <div className='mb-5'>
                <h1 className='text-orange-800 text-4xl'>Interior design</h1>
                <p  className='text-xl'>
                Residential designs start with architecture and structural designs <br/>going through choosing the finest materials then build,
                 integrating the latest technology in design <br/> and building of every phase or part of the project.
                </p>
             </div>
           </div>
           <img src={about} alt="" className='h-[500px] w-[450px]' />
           

        </div>
        <div className='h-[500px] p-5 bg-orange-100  grid grid-cols-3 font-semibold'>
             <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faUserGroup}/>
                <h1  className='text-xl'>2000</h1>
                <h1  className='text-xl'>Employees</h1>


            </div>
            <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faIndustry}/>
                <h1  className='text-xl'>320000 Sq. ft.</h1>
                   <h2  className='text-xl'> Factories Area</h2> 

            </div>   
            <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faCertificate}/>
                <h1 className='text-xl'>80</h1>
                   <h2  className='text-xl'> project in egypt</h2> 

            </div>  
            <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faChartLine}/>
                <h1  className='text-xl'>80.</h1>
                   <h2  className='text-xl'> Projects in North
                   America and Middle East</h2> 

            </div> 
            <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faGear}/>
                <h1  className='text-xl'> Production Capacity </h1>
                   <h2  className='text-xl'> 700 -800 bedrooms
                                      per week Depend on
                                      design, material
                                      availability production
                                      schedule </h2> 

            </div> 
            <div className='mt-10 ml-20'>
                <FontAwesomeIcon  className='text-orange-700 h-10' icon={faTruck}/>
                <h1  className='text-xl'> Time Delivery </h1>
                   <h2  className='text-xl'> Shipping complete
                                              order within 5 -7
                                              working days</h2> 

            </div> 
            
        </div>
    </div>
  )
}

export default About
