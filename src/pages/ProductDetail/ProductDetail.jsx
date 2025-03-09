import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError("Failed to fetch product details. Please try again later.");
      });
  }, [productId]);

  return (
    <div>
      <LayOut>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ProductCard
            product={product}
            flex={true}
            renderDesc={true}
            renderAdd={true}
          />
        )}
      </LayOut>
    </div>
  );
}

export default ProductDetail;