import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "@/data/products";
import type { Product } from "@/types/product/product";
import ProductDetails from "@/Components/ProductDetails";
import ProductDetailsSkeleton from "@/Components/ProductDetails/ProductDetailsSkeleton";
import { Helmet } from "react-helmet-async";
import SEO from "@/Components/SEO";


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
  
 
  return (
    <>
     <SEO
       title={`${product.name} | Exclusive`}
        description={product.description}
        image={product.thumbnail}
        url={`/productS/${product.id}`}
     />
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;
