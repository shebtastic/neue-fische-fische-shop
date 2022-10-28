import { getProducts } from "../../../helpers/api"

function handler(req, res) {
    const products = getProducts()
    res.status(200).json(products)
}

export default handler