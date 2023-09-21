import React, { useEffect, useState } from 'react'
import Header from "../Components/Header/Nav";
import "../assets/css/style.css"
import pic2 from "../Images/banner1.jpg";
function ProductsPage() {

  const [data,setData]=useState([])

  useEffect(()=>
  {  
  fetch('https://dummyjson.com/carts',{method: "POST"})
 
  .then(response => response.json())
  .then(result => {
    if(result!==null && result!=undefined){
   
      setData(result.carts);
  
    }
  }

  ).catch(error => console.error(error));

  },[]);

  return (
    <div>
    <Header />

    <div  className="container-fluid mt-5 row ">
    
    {
      data && data.length>0?
      data?.map((key)=>(
      <div className=" col-2 card w-25 h-25" key = { key.id }>
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={pic2} className="card-img-top" />
          <a href="#!">
            <div className="mask"></div>
          </a>
        </div>
  
        <div className="card-body row"  >
      
            <div className="col-9 ">
          <p className="card-title  fs-6  display-inline-block " >
         {key.total} </p>
          <p className="card-text" name="price">
          {key.discountedTotal}
          </p>
          </div>
       
          <div className="col-3">
          <i class="fas fa-cart-plus" ></i>
            </div>
        </div>
    
      </div>
         )):"not foun"
        }
      
      
        </div>
       
      </div>
 
  )
}

export default ProductsPage