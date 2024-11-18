import {  Route ,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import  Mainlayout  from "./pages/Mainlayout";
import Offers from "./new &singles/Offers";
import Living from './sections/Living';
import New from "./new &singles/New";
import About from "./new &singles/About";
import Kitchen from "./Sections/Kitchen";
import Dressing from "./sections/Dressing";
import Dining from "./sections/Dining";
import Bath from "./sections/Bath";
import Cart from "./pages/Cart";
import TVunits from "./sections/TVunits";
import Tables from "./sections/Tables";
import Singlebed from "./sections/Singlebed";
import Contectus from "./pages/Contectus";
import Bedroom from "./sections/Bedroom";
// import SingleDining from "./new &singles/SingleDining";
// import Singlenew from "./new &singles/Singlenew";
// import Singleoffer from "./new &singles/Singleoffer";
// import Singlebeds from "./new &singles/Singlebeds";
import Center3 from "./pages/Center3";
// import SingleLiving from "./new &singles/SingleLiving";
import React from "react";

  const App = () => {

 const Chair= React.lazy(()=>import ("./sections/Chair") )
const router=createBrowserRouter(
  createRoutesFromElements(

 <Route path="/" element={<Mainlayout/>}>
      <Route index element={<Home/>}/>
  <Route path="/living" element={<Living/>}/>
{/*   <Route path="/living/:id" element={<SingleLiving/>}/>
  <Route path="/offers" element={<Offers/>}/> */}
{/*   <Route path="/offers/:id" element={<Singleoffer/>}/>
 */}
  <Route path="/new" element={<New  />}/>
{/*   <Route path="/new/:id" element={<Singlenew />}/>
 */}
  <Route path="/about" element={<About/>}/>

  <Route path="/kitchen" element={<Kitchen/>}/>

  <Route path="/chair" element={
    <React.Suspense fallback={<>LOADING.....</>}>
  <Chair/>
  </React.Suspense>}/>

  <Route path="/bedroom" element={<Bedroom/>}/>
{/*   <Route path="/bedroom/:id" element={<Singlebeds/>}/>
 */}

 
  <Route path="/dressing" element={<Dressing/>}/>
  <Route path="/diningroom" element={<Dining/>}/>
{/*   <Route path="/diningroom/:id" element={<SingleDining/>}/>
 */}
  <Route path="/bath" element={<Bath/>}/>

  <Route path="/cart" element={<Cart/>}/>
  <Route path="/tvunits" element={<TVunits/>}/>
  <Route path="/tables" element={<Tables/>}/>
  <Route path="/singlebed" element={<Singlebed/>}/>
  <Route path="/contect" element={<Contectus/>}/>
  <Route path="/sections" element={<Center3/>}/>


  </Route>

     ) )


 


 

   return <RouterProvider router={router}/>
      


 };
 
 export default App;
 
