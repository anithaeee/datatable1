import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Child from './Child';
import { ProductService } from './ProductService';
function App(props) {
  const[name,setname]= useState("");
   const[data,setdata]= useState([]);
   useEffect(()=>{
    ProductService.getProducts().then(data=>setdata(data));
   });
  return (
   <>
     <Child ProductService={data}/>
   </>
  );
}

export default App;
