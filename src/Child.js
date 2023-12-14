import React, { useEffect } from 'react'
import { useState } from 'react';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';
const Child = (props) => {
    const[name,setname] = useState("");
    const[data, setdata] = useState([]);
    useEffect(()=>{
        ProductService.getProducts().then(data=>setdata(data));
    });
  return (
    <div>
       <DataTable value={data}>
        <Column field='id' header='id'></Column>
        <Column field='code' header='code'></Column>
        <Column field='name' header='name'></Column>
        <Column field='description' header='description'></Column>
        <Column field='image' header='image'></Column>
        <Column field='category' header='category'></Column>
        <Column field='quantity' header='quantity'></Column>
        <Column field='inventoryStatus' header='inventoryStatus'></Column>
        <Column field='rating' header='rating'></Column>
       </DataTable>
    </div>
  )
}

export default Child;