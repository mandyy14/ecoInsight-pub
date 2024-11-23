import classNames from "classnames";
import { Nav } from "react-bootstrap";

type MenuProps = {
  showDownload?: boolean;
  navClass?: string;
  buttonClass?: string;
  loggedInUser?: object;
};

const Menu = ({
  navClass,
  buttonClass,
  showDownload,
  loggedInUser,
}: MenuProps) => {
  return (
    <Nav as="ul" className={classNames("align-items-lg-center", navClass)}>
      <Nav.Item as="li">
        <a href="#home" className="nav-link">
          Home
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a href="#features" className="nav-link">
          Recursos
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a href="#team" className="nav-link">
          Membros
        </a>
      </Nav.Item>

      {showDownload && (
        <>
          {loggedInUser ? (
            <Nav.Item as="li">
              <a href="/auth/logout" className="nav-link btn me-2 shadow-none">
                Logout
              </a>
            </Nav.Item>
          ) : (
            <Nav.Item as="li">
              <a href="/auth/login" className="nav-link btn me-2 shadow-none">
                Log In
              </a>
            </Nav.Item>
          )}

          <Nav.Item as="li">
            <a href="/auth/signup" className={classNames("btn", buttonClass)}>
              Cadastre-se
            </a>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default Menu;
