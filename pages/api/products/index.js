import { getAllProducts, createProduct } from '../../../helpers/db';

export default async function handler(request, response) {
  console.log(request.method);
  if (request.method === 'GET') {
    const products = await getAllProducts();
    response.status(200).json(products);
  } else if (request.method === 'POST') {
    const product = JSON.parse(request.body);
    console.log(product);
    //db function call
    const createdProduct = await createProduct(product);
    response.status(201).json(createdProduct);
  } else {
    response
      .status(405)
      .setHeader('Allow', ['GET', 'POST'])
      .send('Hier gibts den endpoint nicht mit der methode.');
  }
}
