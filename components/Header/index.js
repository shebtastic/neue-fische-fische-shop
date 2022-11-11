import { FishIcon, StyledHeader, StyledNavigation, Anchor } from './styled';

export default function Header() {
  return (
    <StyledHeader>
      <FishIcon size='4rem' />
      <StyledNavigation>
        <Anchor href='/'>Startseite</Anchor>
        <Anchor href='/products'>Produkte</Anchor>
        <Anchor href='/categories'>Kategorien</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}
