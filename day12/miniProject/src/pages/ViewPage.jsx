import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header';
import Footer from '../components/Footer';

const ViewPage = () => {
  const params=useParams();
  const {productId}=params;
  const [product,setProduct]=useState({});

  const getData=async()=>{
    const response=await fetch(`https://dummyjson.com/products/${productId}`);
    const data=await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <Header/>
      <main>
        <h1>Product ID{productId}</h1>
        <h1>{product.title}</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {
            product.images?.map((imgUrl)=>{
              return <img key={imgUrl} src={imgUrl} className='w-75'/>
            })
          }
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ViewPage