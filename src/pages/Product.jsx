import React from "react";
import { ProductInfo } from "components/Product";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  return <ProductInfo productId={productId} />;
}
