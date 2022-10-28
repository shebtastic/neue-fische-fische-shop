import { useRouter } from "next/router";

import { getProductById } from "../../../helpers/api";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const product = getProductById(productId);

  return (
    <>
      <article>
        <h1>Product Detail for: {productId}</h1>
        <p>{product.name}</p>
      </article>
    </>
  );
}

export default ProductDetail;
