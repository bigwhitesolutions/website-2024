import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from '@/components';
import logo from '@/images/bws-icon-white.svg';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img src={logo.src} width={logo.width} height={logo.height} />}
          name="Big White Solutions"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Posts</NavMenuItem>
        <NavMenuItem target="blank" href="https://cv.shaunpearson.dev/">
          CV
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
