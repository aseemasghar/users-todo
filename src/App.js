import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addUser,deleteUser } from "./redux/slices/userSlice";
import { useAlert } from "react-alert";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loc1, setLoc1] = useState("");
  const [unit1, setUnit1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [unit2, setUnit2] = useState("");

  const alert = useAlert();
 

  const todos = useSelector((state) => state.users.givenData);
  const dispatch = useDispatch();
  const data ={
    "name":name,
    "age":age,
    "properties":[
       {
          "location":loc1,
          "unit_size":unit1
       },
       {
          "location":loc2,
          "unit_size":unit2
       }
    ]
  }
  // console.log(data);
  

  const handleAdd =(e)=>{
dispatch(addUser(data));
alert.success('Success');
e.preventDefault();
e.target.reset();
  }

  const handleDelete=(index)=>{
dispatch(deleteUser(index));
alert.success('User Deleted');
  }
 
  
  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center my-2">Users Todo App</h1>
          <form onSubmit={handleAdd} className="row g-3">
            <div className="col-md-4">
              <input required onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-2 ">
              <input required onChange={(e)=>setAge(e.target.value)} type="number" className="form-control" placeholder="Age" />
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label className="form-label">Property 1</label>
                <input
                required
                onChange={(e)=>setLoc1(e.target.value)}
                  type="text"
                  className="form-control mb-1"
                  placeholder="Location"
                />
                <input
                required
                onChange={(e)=>setUnit1(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Unit size"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Property 2</label>
                <input
                required
                onChange={(e)=>setLoc2(e.target.value)}
                  type="text"
                  className="form-control mb-1"
                  placeholder="Location"
                />
                <input
                required
                onChange={(e)=>setUnit2(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Unit size"
                />
              </div>
            </div>

            <div className="col-12">
            
              <button  type="submit" className="btn btn-primary">
                Add User
              </button>
            </div>
          </form>

          <div className="my-2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Property 1</th>
                  <th scope="col">Property 2</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos &&
                  todos.map((item, index) => {
                    const properties = item.properties;
                
                
                    return (
                      <tr key={index}>
                        <th scope="row">{item.name}</th>
                        <td>{item.age}</td>
                        { properties && properties.map((pro,index)=>{
                     return(
                        <td key={index}>
                          {pro.location} , {pro.unit_size}
                          <br />
                          {/* {pro.location}, {pro.unit_size} */}
                        </td>
                     )
                    })}
                        
                        <td>
                          <button onClick={()=>handleDelete(index)} className="btn btn-danger">Dlete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
