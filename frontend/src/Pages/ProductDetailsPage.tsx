import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "@/data/products";
import type { Product } from "@/types/product/product";
import ProductDetails from "@/Components/ProductDetails";
import ProductDetailsSkeleton from "@/Components/ProductDetails/ProductDetailsSkeleton";


const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(Number(id));
      setProduct(res);
    };
    fetchProduct();
  }, [id]);
  if (!product) {
    return <ProductDetailsSkeleton/>;
  }
  console.log(product.images);
 
  return (
  <ProductDetails product={product} />
  );
};

export default ProductDetailsPage;
