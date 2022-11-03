import mongoose, { model, models, Schema } from "mongoose"

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

    const products = await Product.find({}, { _id: false })
    return products
}

export {
    getAllProducts,
}