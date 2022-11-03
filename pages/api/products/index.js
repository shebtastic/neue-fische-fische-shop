import { getAllProducts } from "../../../helpers/db"

async function handler(request, response) {
    console.log(request.method)
    if(request.method === "GET") {
        const products = await getAllProducts()
        response.status(200).json(products)
    } else {
        response.status(405).setHeader('Allow', ['GET']).send("Hier gibts den endpoint nicht mit der methode.")
    }
}

export default handler