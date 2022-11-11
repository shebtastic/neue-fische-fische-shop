const data = [
  {
    id: 'guppy',
    name: 'Guppy',
    size: 'small',
    category: 'fish',
    difficulty: 'easy',
    image:
      'https://images.unsplash.com/photo-1603630138578-a45a87fa97e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
  },
  {
    id: 'og-rbf',
    name: 'Regenbogenfisch',
    size: 'medium',
    category: 'fish',
    difficulty: 'medium',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Red_m_boesemani.jpg/640px-Red_m_boesemani.jpg',
  },
  {
    id: 'kids-rbf',
    name: 'DER Regenbogenfisch',
    size: 'large',
    category: 'fish',
    difficulty: 'easy',
    image: 'https://regenbogenfisch.com/wp-content/uploads/2016/12/rbf_about.jpg',
  },
  {
    id: 'kraftriegel',
    name: 'Currywurst',
    category: 'food',
    image: 'https://pbs.twimg.com/media/E8k1rEdX0AA0fe4?format=jpg&name=medium',
  },
];

function getAllProducts() {
  return data;
}

function getProductById(productId) {
  return data.find((product) => {
    console.log(product);
    return product.id === productId;
  });
}

async function fetcher(url) {
  const res = await fetch(url);
  return await res.json();
}

export default data;
export { getAllProducts, getProductById, fetcher };
