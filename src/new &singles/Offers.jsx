import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Offers = () => {

  
    const [offers,setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('src/store/fruniture.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setOffers(data.Offers);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  // const[error,setError]=useState(null);
  // const[isLoading,setIsLoading]=useState(true)
  // const options={
  //   method:"GET",
  //     headers:{
  //       "Cotent-Type":'application/json'
  //     },
  // }
  // useEffect(()=>{
  //   fetch('src/store/fruniture.json',options
      
  //   ).then(res=>{
  //     if(!res.ok){
  //       throw new Error("Network response was not ok")
  //     }
  //     return res.json()
  //   }).then((data)=>{ console.log(data)
  //     setOffers(data) }).catch(error=>{ setError(error)
  //           console.log(error)

  //   }).finally(()=>{
  //     setIsLoading(false)
  //   })
    
  // },[])
  // if(isLoading){
  //   return <div>loading..</div>
  // }
  // if(error){
  //   return<div>this is error:{error.message}</div>
  // }



       
      
    
  return (
    <div>

    <div className='text-center mt-5 mb-10 font-semibold'>
      <h1 className='text-orange-600 text-5xl mb-3'>
     Offers  </h1>
      <p className='text-slate-700'>
     


   White Rose Furniture presents the most modern designs globally; to enrich your

      . <br/>home with a touch of beauty that will catch your heart before eyes.
   <br/>
  </p>
    </div>
          
          <div className='grid grid-cols-2 gap-5 justify-items-center' >
            {offers.map((item)=>{
                return(
                        <div key={item.index} className=' mb-3 font-semibold shadow-md h-[380px] shadow-gray-50 rounded-md hover:shadow-xl'>
                        <Link to={`/offers/${item.id}`}>

                        <img src={item.image} alt="" className='h-[250px] w-[400px] rounded-xl' />
                            <h1 className='ml-4 text-xl text-red-950'>{item.name}</h1>
                            <p  className='ml-4 text-slate-800'>{item.content}</p>
                            <p className='ml-4 text-slate-700 '  >{item.category}</p>
                            <p className='ml-4 text-slate-700'  >{item.price} EGP</p>
                           

                            </Link>
                 
                    </div>
                )
            })}
          </div>
        </div>  )
}
export default Offers