import { useState } from 'react';
import Form from '../../../components/Form';

export default function NewProductPage() {
  const [error, setError] = useState(false);

  async function sendProduct(product) {
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });

    if (response.status !== 201) {
      setError(true);
    }
  }

  return (
    <>
      <h1>Add Product</h1>
      {error && <h2>OMG ERROR!</h2>}
      <Form onSubmit={sendProduct} />
    </>
  );
}
