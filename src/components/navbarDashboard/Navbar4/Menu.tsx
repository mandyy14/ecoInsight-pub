import FeatherIcon from "feather-icons-react";
import { Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Nav as="ul" className="mx-auto">
      <Nav.Item as="li" className="pe-3">
        <Nav.Link href="/" className="active">
          <div className="d-flex align-items-center">
            <span className="icon-xxs me-1 flex-shrink-0">
              <FeatherIcon icon="grid" className="icon-dual-primary" />
            </span>
            <div className="flex-grow-1">Home</div>
          </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
