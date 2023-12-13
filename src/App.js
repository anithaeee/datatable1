import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Child';
function App(props) {
  const[name,setname]= useState("");
   const data =[{name:'Anitha', Age:29,Place:"Hyderabad"},
                {name:'Ashiwini', Age:24,Place:"Hyderabad"},
                 {name:'Ausha', Age:24,Place:"Hyderabad"}]
  return (
   <>
     <Child griddata={data}/>
   </>
  );
}

export default App;
