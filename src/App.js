import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addTodos } from "./redux/slices/todoSlice";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loc1, setLoc1] = useState("");
  const [unit1, setUnit1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [unit2, setUnit2] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  

  const handleAdd =()=>{
dispatch(addTodos(name,age,loc1,unit1,loc2,unit2));
  }
  console.log(name,age,loc1)
  
  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center my-2">Users Todo App</h1>
          <form className="row g-3">
            <div className="col-md-4">
              <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-2 ">
              <input onChange={(e)=>setAge(e.target.value)} type="number" className="form-control" placeholder="Age" />
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label className="form-label">Property 1</label>
                <input
                onChange={(e)=>setLoc1(e.target.value)}
                  type="text"
                  className="form-control mb-1"
                  placeholder="Location"
                />
                <input
                onChange={(e)=>setUnit1(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Unit size"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Property 2</label>
                <input
                onChange={(e)=>setLoc2(e.target.value)}
                  type="text"
                  className="form-control mb-1"
                  placeholder="Location"
                />
                <input
                onChange={(e)=>setUnit2(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Unit size"
                />
              </div>
            </div>

            <div className="col-12">
              <button onClick={handleAdd} type="submit" className="btn btn-primary">
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
                          <button className="btn btn-danger">Dlete</button>
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
