import useSWR from 'swr';
import { fetcher } from '../../helpers/api';
import GridList from '../../components/GridList.styled';
import { Anchor } from '../../components/Header/styled';

export default function Products() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) {
    console.dir(error);
    return 'omg errors!';
  }

  if (!data) {
    return (
      <>
        <h1>Produkte</h1>
        <h2>Liste aller Produkte</h2>
        <GridList>Lade noch...</GridList>
      </>
    );
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
      <Anchor href={`/products/new`}>Neues Produkt erstellen.</Anchor>
    </>
  );
}
