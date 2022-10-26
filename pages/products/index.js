import GridList from "../../components/GridList";
import { Anchor } from "../../components/Header";

export default function Products() {
  return (
    <>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <GridList>
        <li>
          <Anchor href="/products/guppy">Guppy</Anchor>
        </li>
        <li>
          <Anchor href="/products/regenbogenfisch">Regenbogenfisch</Anchor>
        </li>
      </GridList>
    </>
  );
}
