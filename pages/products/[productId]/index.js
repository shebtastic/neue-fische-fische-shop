import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;


  return (
    <>
      <article>
        <h1>Product Detail for: {productId}</h1>
      </article>
    </>
  );
}

export default ProductDetail;
