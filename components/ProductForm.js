function ProductForm({onSubmit}) {
    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        onSubmit(data)

        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*         "id": "guppy",
        "name": "Guppy",
        "size": "small",
        "category": "fish",
        "difficulty": "easy",
        "image": "https://images.unsplash.com/photo-1603630138578-a45a87fa97e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" */}
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" type="text" name="name" />
            <label htmlFor="size-input">Size:</label>
            <input id="size-input" type="text" name="size" />
            <label htmlFor="category-input">Category:</label>
            <input id="category-input" type="text" name="category" />
            <label htmlFor="difficulty-input">Difficulty:</label>
            <input id="difficulty-input" type="text" name="difficulty" />
            <label htmlFor="image-input">Image:</label>
            <input id="image-input" type="text" name="image" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm