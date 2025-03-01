import React, { useEffect, useState } from "react";
import classes from '../../pages/ProductDetail/ProductDetail.module.css'
import Loader from "../../Components/Loader/Loder"
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";


function ProductDetail() {
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <div >
    <LayOut>
      {isLoading? (<Loader/>):(< ProductCard
        product={product} 
        flex = {true}
        renderDesc={true}
        renderAdd={true}
    />  )}
    
    </LayOut>
    </div>
  );
}

export default ProductDetail;
