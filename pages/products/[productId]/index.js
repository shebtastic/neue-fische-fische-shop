import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

import data, { getProductById } from "../../../helpers/api.js"

function fakeFetchFrischeFischeFetcher(url) {
  console.warn("HIER IST DEV")
  return getProductById(url.split('/').at(-1))
  // return fetch(url).then((res) => res.json())
}

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  // destructuring rename, statt const product = data
  const {data: product, error} = useSWR(`/api/products/${productId}`, fakeFetchFrischeFischeFetcher)

  return (
    <>
      <article>
        <h1>Product Detail for: {productId}</h1>
        {/* optional chaining */}
        <p>{product?.name}</p>
        <p>{product?.category}</p>
      </article>
    </>
  );
}

export default ProductDetail;
