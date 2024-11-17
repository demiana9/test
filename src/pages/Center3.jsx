import Sections from "../assets/sections"
import { useNavigate } from "react-router-dom";
const Center3 = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  
  
 
  return (
    <div className=" h-full   ">
      <div className="text-slate-900 font-semibold  mt-2  p-5">
        <h1 className="text-3xl  text-center mb-4"> Our Cateagories</h1> 
        <p className="text-xl">     White Rose Furniture presents the most modern designs globally; to enrich your home with a touch of beauty that will catch your heart before eyes.
        </p>
      </div>

      <div className="grid grid-cols-2 mt-2  p-4 gap-5 justify-items-center"  
  >
        {Sections.map((section)=>{
            return(
              <button key={section.id}   onClick={()=>handleButtonClick(section.value) } className=" ">
    <img src={section.image} alt="" className='h-[200px] rounded-lg w-[350px]' />
    <h1 className=' text-gray-900- bg-orange-100 h-110 rounded-md font-bold text-center'> 
    {section.name}</h1>
    </button>  
            )

            
         
        })}
      </div>
 </div>
  )
}

export default Center3
