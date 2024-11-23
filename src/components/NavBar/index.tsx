import classNames from "classnames";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import Menu from "./Menu";

type NavbarProps = {
  isSticky?: boolean;
  navClass?: string;
  buttonClass?: string;
  fixedWidth?: boolean;
  hideSearch?: boolean;
};

const NavbarMenu = ({
  isSticky,
  navClass,
  buttonClass,
  fixedWidth,
  hideSearch,
}: NavbarProps) => {
  useEffect(() => {
    const btnTop = document.getElementById("btn-back-to-top");
    const navbar = document.getElementById("sticky");
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      if (btnTop) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          btnTop.classList.add("show");
        } else {
          btnTop.classList.remove("show");
        }
      }
      if (navbar) {
        if (
          document.body.scrollTop >= 240 ||
          document.documentElement.scrollTop >= 240
        ) {
          navbar.classList.add("navbar-sticky");
        } else {
          navbar.classList.remove("navbar-sticky");
        }
      }
    });
  }, []);

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

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="topnav-menu-content">
            {!hideSearch && (
              <Nav className="align-items-lg-center d-flex me-auto">
                <Nav.Item as="li">
                  <form id="search" className="form-inline d-none d-sm-flex">
                    <div className="form-control-with-hint ms-lg-2 ms-xl-4">
                      <input
                        type="text"
                        className="form-control"
                        id="search-input"
                        placeholder="What are you looking for?"
                      />
                      <span className="form-control-feedback uil uil-search fs-16"></span>
                    </div>
                  </form>
                </Nav.Item>
              </Nav>
            )}
            <Menu
              showDownload
              navClass="ms-auto"
              buttonClass={buttonClass ? buttonClass : "btn-primary"}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarMenu;
