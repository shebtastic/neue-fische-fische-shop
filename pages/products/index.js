import styled from "styled-components";

import GridList from "../../components/GridList";
import { Anchor } from "../../components/Header";

function Products() {
  return (
    <>
      <h1>Produkte</h1>
      <h2>Liste aller Produkte</h2>
      <GridList>
      <li>
            <Anchor href="/products/guppy">
              Guppy
            </Anchor>
          </li>
      <li>
            <Anchor href="/products/regenbogenfisch">
              Regenbogenfisch
            </Anchor>
          </li>
      </GridList>
    </>
  );
}

export default Products
