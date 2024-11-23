import FeatherIcon from "feather-icons-react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Features3 = () => {
  return (
    <section className="position-relative pb-6 pt-lg-6 pt-4 features-3">
      <Container data-aos="fade-up" data-aos-duration="500">
        <Row className="justify-content-center">
          <Col className="text-center">
            <h3 className="fw-medium mb-5">
              Descubra Mais Funcionalidades Poderosas
            </h3>
          </Col>
        </Row>

        <Row>
          <Col lg={3} md={6}>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Avalie suas fontes de energia atuais
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Descubra alternativas renováveis
            </h6>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Reduza custos energéticos
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Compare diferentes opções de energia
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Receba recomendações personalizadas
            </h6>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Otimize o impacto ambiental
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Planeje dentro do orçamento previsto
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Gere relatórios detalhados rapidamente
            </h6>
          </Col>
          <Col lg={3} md={6}>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Simplifique decisões sobre energia
            </h6>
            <h6 className="fw-medium fs-16 mb-4">
              <FeatherIcon
                className="icon-sm icon-dual-success me-2"
                icon="check"
              />
              Monitore a eficiência do projeto
            </h6>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col xs="auto">
            <Link to="/auth/signup" className="btn btn-primary mb-2">
              Comece Agora
              <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features3;
