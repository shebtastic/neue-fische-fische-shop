import { getAllProducts } from "../../../helpers/api";

function handler(request, response) {
    const products = getAllProducts()
    response.status(200).json(products)
}

export default handler