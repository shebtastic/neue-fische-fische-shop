import styled from 'styled-components';
import { TbFish } from 'react-icons/tb';
import Link from 'next/link';

const FishIcon = styled(TbFish)`
  @media (max-width: 600px) {
    display: none;
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

const Anchor = styled(Link)`
  color: var(--text-secondary);
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

export { FishIcon, StyledHeader, StyledNavigation, Anchor };
