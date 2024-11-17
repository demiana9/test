import {createSlice} from '@reduxjs/toolkit'
// const initialState={
// amount:0,
// cartItems:[]
// }
 export const cartSlice=createSlice({
    initialState:[],
    name:'cartSlice',
    reducers:{
        addtocart:(state,action)=>{
         const findproduct=state.find((product)=>{product.id===action.payload.id})
         console.log('this find',findproduct)

         if(findproduct){
            findproduct.amount+=1;

         }
         else{
const clone={...action.payload,amount:1}
state.push(clone)

         }
         // initialState.cartItems= state.push(action.payload)
         //  initialState.amount=1;
        }   ,        
         deletfromcart:(state,action)=>{
            return state.filter((product)=>product.id!==action.payload.id)
         },
         clear:()=>{
          return []
         },
            

    }
})
             
export const{addtocart,deletfromcart,clear}=cartSlice.actions;
export default cartSlice.reducer;