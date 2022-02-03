import React, { useState } from 'react';
import './style.css';
import { Product } from './Object.js';
import Nike from './component/Nike';
export default function App() {
  const [showbar, setShowbar] = useState();
  const [showValue, setshowValue] = useState([]);
  const [Array, setArray] = useState(Product);
  const [about,setAbout]=useState([])

  // console.log(Product, 'asa');

  function handlechange(e) {
    let { value } = e.target;
    // setshowValue(value);
    filter(value);
    if(value==''){
      setShowbar(false)
    }
  }

  function filter(str) {
    let filtered = Product.filter((ele) => {
      if (ele.category.toLowerCase().includes(str.toLowerCase())) {
        console.log(ele.category);
        setshowValue(ele.category);
        setShowbar(true)
        return ele.category;
      }else if(ele.about.toLowerCase().includes(str.toLowerCase())){
        console.log(ele.about)
        setAbout(ele.about)
        setShowbar(true)

      }
    });
    setArray(filtered);
  }
  return (
    <div>
      <input type="search" onChange={handlechange} />
      {showbar ? <p>{showValue}</p> : <p></p>}
      {
        showbar?<p>{about}</p>:<p></p>
      }
      {/* <Nike array={Array} /> */}
    </div>
  );
}
