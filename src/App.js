import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Child';
function App(props) {
  const[name,setname]= useState("");
   const[data,setdata]= useState([]);
  return (
   <>
     <Child griddata={data}/>
   </>
  );
}

export default App;
