// import Image from "next/legacy/image";
import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";

import GridList from "../../components/GridList";
import { Anchor } from "../../components/Header";

import { getProducts } from "../../helpers/api";

const fetcher = (...url) => //fetch(...url).then((res) => console.log(res) || res.json());
  getProducts()

function Products() {
  // const products = getProducts();
  const {data: products, error} = useSWR("/api/products", fetcher)

  if(error) return "oh noes! error!"
  if(!products) return "fetching products..."
  return (
    <>
      <h1>Produkte</h1>
      <h2>Liste aller Produkte</h2>
      <GridList>
        {products.map((product) => (
          <li key={product.id}>
            <Anchor href={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <ImageContainer>
                {/* <Image src={product.image} alt="" layout="fill" objectFit="contain"/> */}
                <Image src={product.image} alt="" width={100} height={100} />
              </ImageContainer>
            </Anchor>
          </li>
        ))}
      </GridList>
    </>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: contain;
`;


export default Products
