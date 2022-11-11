import { deleteProductById, getProductById, updateProductById } from '../../../../helpers/db';

export default async function handler(request, response) {
  console.log(request.query.id);
  const { id } = request.query;
  if (request.method === 'GET') {
    const product = await getProductById(id);
    response.status(200).json(product);
  } else if (request.method === 'DELETE') {
    const product = await deleteProductById(id);
    response.status(200).json(product);
  } else if (request.method === 'PATCH') {
    const product = JSON.parse(request.body);
    const updatedProduct = await updateProductById(id, product);
    response.status(200).json(updatedProduct);
  } else {
    response.status(405).setHeader('Allow', ['GET', 'PATCH', 'DELETE']).send();
  }
}
