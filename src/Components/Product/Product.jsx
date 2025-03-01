import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
function Product() {
    const [products, setproducts] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setproducts(res.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }, [])
    console.log(products)
  return (
    <>
    {
        isLoading?(<Loader/>) : (  <section className={classes.products_container}>
            {
        
                products?.map((singleProduct)=>{ 
               return <ProductCard renderAdd={true}product={singleProduct} key={singleProduct.id} />
                })
            }
        </section>)
    }
    </>

  )
}

export default Product