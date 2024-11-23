import classNames from "classnames";
import { Container, Nav, Navbar } from "react-bootstrap";

import Menu from "./Menu";
import ProfileDropdown from "./ProfileDropdown";

import { profileOptions } from "./data";

type Navbar4Props = {
  isSticky?: boolean;
  navClass?: string;
  fixedWidth?: boolean;
};

const Navbar4 = ({ isSticky, navClass, fixedWidth }: Navbar4Props) => {
  return (
    <header>
      <Navbar
        id={isSticky ? "sticky" : ""}
        collapseOnSelect
        expand="lg"
        className={classNames("topnav-menu", navClass)}
      >
        <Container fluid={!fixedWidth}>
          <Navbar.Brand href="/" className="logo">
            <h1 className="menu-title text-primary">EcoInsight</h1>
          </Navbar.Brand>

          <Navbar.Toggle
            className="me-3"
            aria-controls="topnav-menu-content4"
          />

          <Navbar.Collapse id="topnav-menu-content4">
            <Menu />
            <Nav as="ul" className="align-items-lg-center">
              <ProfileDropdown profileOptions={profileOptions} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navbar4;
