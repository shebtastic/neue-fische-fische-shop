import { useRouter } from 'next/router';
import { fetcher } from '../../../helpers/api';
import useSWR from 'swr';

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const { data: product } = useSWR(`/api/products/${productId}`, fetcher);

  return (
    <>
      <article>
        <h1>Product Detail for: {productId}</h1>
        <p>{product?.name}</p>
        <p>{product?.category}</p>
      </article>
    </>
  );
}
