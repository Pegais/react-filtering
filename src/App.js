import React, { useState } from 'react';
import './style.css';
import {Product} from './Object.js';
import Nike from './component/Nike'
export default function App() {
  const [showbar, setShowbar] = useState(true);
  const [showValue, setshowValue] = useState([]);
  const [Array, setArray] = useState(Product);

  // console.log(Product, 'asa');

  function handlechange(e) {
    let { value } = e.target;
    // setshowValue(value);
    filter(value)
  }
  function filter(str){
    let filtered = Product.filter((ele)=>{
      if(ele.category.toLowerCase().includes(str.toLowerCase())){
        console.log(ele.category)
        setshowValue(ele.category)
        return ele.category;
      }
    })
    setArray(filtered)
    

  }
  return (
    <div>
      <input type="search" onChange={handlechange} />
      {showbar ? <a>{showValue}</a> : <a></a> }
      <Nike array={Array}/>
    </div>
  );
}
