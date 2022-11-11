import Header from '../Header';
import Footer from '../Footer';
import { StyledMain } from './styled';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}
