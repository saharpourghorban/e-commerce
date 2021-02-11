import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ProductContainer } from "components/Product";
import { GlobalContext } from "components/GlobalContext";

export default function Home() {
  const { setProductsList, setFilteredProductsList } = useContext(
    GlobalContext
  );

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get("https://fakestoreapi.com/products", { cancelToken: source.token })
      .then(({ data }) => {
        setProductsList(data);
        setFilteredProductsList(data);
      });

    return () => source.cancel("request canceled");
  }, [setFilteredProductsList, setProductsList]);

  return <ProductContainer />;
}
