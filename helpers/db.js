import mongoose, { model, models, Schema } from "mongoose"
import crypto from "crypto"

const URI = `mongodb+srv://neuefische:${process.env.MONGODB_PASSWORD}@cluster0.yjefm7b.mongodb.net/?retryWrites=true&w=majority`

const productSchema = new Schema({
    id: String,
    name: String,
    size: String,
    category: String,
    difficulty: String,
    image: String,
})

const Product = models.Product || model('Product', productSchema)

async function connectDatabase() {
    await mongoose.connect(URI)
}

async function getAllProducts() {
    await connectDatabase()

    const products = await Product.find({}, { _id: false, __v: false })
    return products
}

async function getProductById(id) {
    await connectDatabase()

    const product = await Product.findOne({id}, { _id: false, __v: false })
    return product
}

async function updateProductById(id, product) {
    await connectDatabase()

    await Product.updateOne({id}, product)
    const updatedProduct = await getProductById(id)
    return updatedProduct
}

async function deleteProductById(id) {
    await connectDatabase()

    const product = await getProductById(id)
    await Product.deleteOne({id})
    return product
}

async function createProduct(product) {
    await connectDatabase()

    const createdProduct = await Product.create({
        ...product,
        id: crypto.randomUUID() // id statt _id, facade pattern
    })

    return {
        ...createdProduct.toObject(),
        _id: undefined,
        __v: undefined,
    }
}

export {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById,
}