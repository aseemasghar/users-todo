import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    givenData:[
        {
            "name":"John",
            "age":42,
            "properties":[
               {
                  "location":"Santa Barbara",
                  "unit_size":"2 acre"
               },
               {
                  "location":"Los Angeles",
                  "unit_size":"4 acre"
               }
            ]
         },
         {
            "name":"Rebecca",
            "age":38,
            "properties":[
               {
                  "location":"San Diego",
                  "unit_size":"6 acre"
               },
               {
                  "location":"Los Angeles",
                  "unit_size":"1 acre"
               }
            ]
         },
         {
            "name":"James",
            "age":82,
            "properties":[
               {
                  "location":"San Diego",
                  "unit_size":"3.5 acre"
               },
               {
                  "location":"Los Angeles",
                  "unit_size":"4 acre"
               }
            ]
         },
         {
            "name":"Gemma",
            "age":22,
            "properties":[
               {
                  "location":"Houston",
                  "unit_size":"3 acre"
               },
               {
                  "location":"Santa Monica",
                  "unit_size":"4 acre"
               }
            ]
         }
      
    ],
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
addUser: (state,action)=>{
 
state.givenData.push(action.payload);
},
deleteUser: (state,action)=>{
   const newItems = state.givenData.filter((item,index)=>{
      return index !== action.payload;
   })
   state.givenData = newItems;
}

    },
})

export const {addUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;