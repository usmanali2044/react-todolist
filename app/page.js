"use client";
import React, { useState } from "react";

const page = () => {
  
    const [title,setTitle] = useState("");
    const [descrip,setDescrip] = useState("");
    const [dataStore,setDataStore] = useState([]);

    const formHandler = (e) =>{
      e.preventDefault();



      setDataStore([...dataStore,{title,descrip}]);

      setTitle("");
      setDescrip("");

      console.log(dataStore);
    };

    const deleteHandler = (i) => {
      let copyTask = [...dataStore];
      copyTask.splice(i,1);
      setDataStore(copyTask);

    }

    let renderTask = <h2>No Task Available</h2>

  

    if(dataStore.length > 0){
      renderTask = dataStore.map((task,index) => {
        return( 
        <li key={index} className="flex items-center justify-between mb-5">
        <div className="flex justify-between w-2/3 items-center">
          <h5 className="font-semibold text-2xl">{task.title}</h5>
          <h6 className="font-semibold text-2xl">{task.descrip}</h6>
          <button onClick={()=> {
            deleteHandler(index);
          }} className="bg-red-400 text-white px-4 py-2 rounder font-bold">Delete</button>
        </div>
        </li>
        );
    })
    }

  return(
    <>
    <h2 className="bg-black text-white text-4xl text-center p-5">My ToDo List App</h2>
    <form onSubmit={formHandler}>
      <input value={title} onChange={(e)=>{
        setTitle(e.target.value);
      }}  type="text" className="border-zinc-800 border-2 px-4 py-3 m-5 font-semibold text-2xl" />

      <input value={descrip} type="text" onChange={(e)=>{
        setDescrip(e.target.value);
      }} className="border-zinc-800 border-2 px-4 py-3 m-5 font-semibold text-2xl" />

      <button className="bg-black text-white px-4 py-3 text-2xl rounded m-5 cursor-pointer">Add Task</button>
    </form>

    <div className="p-8 bg-slate-200">
      <ul className="font-semibold">
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default page;