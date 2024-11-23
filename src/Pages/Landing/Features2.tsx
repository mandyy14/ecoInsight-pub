import FeatherIcon from "feather-icons-react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import saas2 from "../../assets/images/saas2.png";

const Features2 = () => {
  return (
    <section className="position-relative overflow-hidden py-7 features-3">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div
              className="mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <span className="badge-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 mb-4">
                <FeatherIcon icon="disc" className="icon-dual-primary" />
              </span>
              <h1 className="text-dark">
                Gerenciamento Inteligente. Sustentabilidade Simples
              </h1>
              <p className="text-muted my-4">
                Gerencie seus projetos com eficiência, visualizando dados
                energéticos claros e colaborando em equipe. Com a EcoInsight,
                você encontra soluções personalizáveis para otimizar o uso de
                energia e atingir suas metas ambientais com facilidade.
              </p>
              <Link to="/auth/signup" className="h6 text-primary pt-3">
                Comece agora
                <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
              </Link>
            </div>
          </Col>

          <Col lg={{ offset: 1, span: 6 }}>
            <div className="img-content2 position-relative">
              <div className="img-up">
                <img
                  src={saas2}
                  alt="app img"
                  className="img-fluid d-block rounded"
                  data-aos="fade-left"
                  data-aos-duration="300"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features2;
