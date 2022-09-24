import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:[
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

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState,
    reducers: {
addTodos: (state,action)=>{
    // const{name,age}=action.payload;
    console.log("hi");
state.todos.push(initialState);
},

    },
})

export const {addTodos} = todoSlice.actions;
export default todoSlice.reducer;