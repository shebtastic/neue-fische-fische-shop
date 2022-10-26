import { useRouter } from "next/router"

function ProductDetail() {
    const router = useRouter()
    const {productId} = router.query
    return <h1>Product Detail for: {productId}</h1>
}

export default ProductDetail