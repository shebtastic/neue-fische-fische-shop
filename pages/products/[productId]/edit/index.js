import useSWR from 'swr';
import Form from '../../../../components/Form';
import { fetcher } from '../../../../helpers/api';
const { useRouter } = require('next/router');

export default function EditProductDetailsPage() {
  const { query } = useRouter();
  const { productId } = query;

  const { data, mutate } = useSWR(`/api/products/${productId}`, fetcher);

  async function handleSubmit(product) {
    await fetch(`/api/products/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
    });
    mutate();
  }

  async function deleteProduct() {
    await fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    });
  }

  if (!data) return 'loading...';
  return (
    <>
      <h1>{data?.name}</h1>
      <Form onSubmit={handleSubmit} />
      <button onClick={deleteProduct}>DELETE</button>
    </>
  );
}
