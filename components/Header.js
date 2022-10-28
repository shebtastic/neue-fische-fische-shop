import styled from "styled-components";
import { TbFish } from "react-icons/tb";
import Link from "next/link";

function Header() {
  return (
    <StyledHeader>
      <FishIcon size="4rem" />
      <StyledNavigation>
        <Anchor href="/">Startseite</Anchor>
        <Anchor href="/products">Produkte</Anchor>
        <Anchor href="/categories">Kategorien</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}

const FishIcon = styled(TbFish)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Anchor = styled(Link)`
  color: var(--text-secondary);
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

export { Anchor };
export default Header