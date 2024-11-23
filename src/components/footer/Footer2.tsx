import { Col, Container, Row } from "react-bootstrap";

const Footer2 = () => {
  return (
    <section className="section py-4 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg="auto" className="text-lg-end mt-2 mt-lg-0">
            <p className="fs-14 mb-0">
              {new Date().getFullYear()} ©EcoInsight. All rights reserved.
              Crafted by <a href="https://coderthemes.com/">EcoInsight</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer2;
