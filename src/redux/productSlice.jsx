import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchtobeds = createAsyncThunk("fetchtobeds", async () => {
  const res= await fetch(`src/store/fruniture.json`)
  .then((data)=>data.json())
  return res.bedroom
});

export const fetchtodining = createAsyncThunk("fetchtodining", async () => {
  const res= await fetch(`src/store/fruniture.json`)
  .then((data)=>data.json())
  return res.dining 
});
export const fetchtodin = createAsyncThunk("fetchtodin", async (id) => {
  const data = await fetch(`http://localhost:8000/dining/${id}`);
  return data.json();
});

export const fetchtoliving = createAsyncThunk("fetchtoliving", async () => {
  const res= await fetch(`src/store/fruniture.json`)
  .then((data)=>data.json())
  return res.living
});

export const fetchtonews = createAsyncThunk("fetchtonews", async () => {
  const res = await fetch("src/store/fruniture.json")
  .then((data)=>data.json())
return res.newarrival
});

export const fetchtooffers = createAsyncThunk("products/fetchtooffers", async () => {
  const res = await fetch("src/store/fruniture.json")
  // return data.json();
.then((data)=>data.json())
return res.Offers
});

  export const fetchtoKitchen= createAsyncThunk("fetchtoKitchen",async()=>{
    const res=await fetch("src/store/fruniture.json")
    .then((data)=>data.json())
    return res.kitchen
  })

  
  export const fetchtoBath= createAsyncThunk(" fetchtoBath",async()=>{
    const res=await fetch("src/store/fruniture.json")
    .then((data)=>data.json())
    return res.bathroom
  })
const productSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {},
  extraReducers: (builder) => {
    
      builder.addCase(fetchtobeds.fulfilled, (state, action) => {
        return state= action.payload;
      }),
      builder.addCase(fetchtodining.fulfilled, (state, action) => {
        return state= action.payload;
      }),
      builder.addCase(fetchtoliving.fulfilled, (state, action) => {
        return  state=action.payload;
      }),
      builder.addCase(fetchtodin.fulfilled, (state, action) => {
        return action.payload;
      }),
      builder.addCase(fetchtonews.fulfilled, (state, action) => {
        return state= action.payload;
      }),
      builder.addCase(fetchtoKitchen.fulfilled, (state, action) => {
        return state= action.payload;
      }),
      builder.addCase(fetchtoBath.fulfilled, (state, action) => {
        return state= action.payload;
      }),

      builder.addCase(fetchtooffers.fulfilled, (state, action) => {
         return  state=action.payload
        // state=action.payload
      });

  },
});
export default productSlice.reducer;
