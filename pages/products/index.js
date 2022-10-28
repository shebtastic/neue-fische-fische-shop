import styled from "styled-components";
import useSWR from "swr";
import data, { fetcher, getAllProducts } from "../../helpers/api"

import GridList from "../../components/GridList";
import { Anchor } from "../../components/Header";

// function fakeFetchFrischeFischeFetcher(url) {
//   console.warn("HIER IST DEV")
//   return getAllProducts()
//   // return fetch(url).then((res) => res.json())
// }

function Products() {
  const { data, error } = useSWR('/api/products', fetcher)

  if(error) {
    console.dir(error)
    return "omg errors!"
  }

  if(!data) {
    return <>
      <h1>Produkte</h1>
      <h2>Liste aller Produkte</h2>
      <GridList>
        Lade noch...
      </GridList>
    </>
  }

  return (
    <>
      <h1>Produkte</h1>
      <h2>Liste aller Produkte</h2>
      <GridList>
        {data?.map((product) => (
          <li key={product.id}>
            <Anchor href={`/products/${product.id}`}>{product.name}</Anchor>
          </li>
        ))}
      </GridList>
    </>
  );
}

export default Products;
