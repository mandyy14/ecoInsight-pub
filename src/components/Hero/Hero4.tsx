import basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sass from "../../assets/images/saas.jpg";

const Hero4 = () => {
  const openLightbox = () => {
    const instance = basicLightbox.create(`
      <img src="${sass}" alt="Full size" style="width: 100%; height: auto; border-radius: 10px;" />
    `);
    instance.show();
  };

  const navigate = useNavigate();

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-4 pt-7 pb-3 py-sm-7 overflow-hidden">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={6}>
            <h1 className="hero-title">
              EcoInsight: Transformando ideias em impacto sustentável
              <span className="highlight highlight-warning d-inline-block"></span>
            </h1>
            <p className="mt-4 fs-17">
              A plataforma que transforma projetos em soluções sustentáveis para
              o seu negócio e o planeta
            </p>
            <div className="pt-3 pt-sm-5">
              <Button onClick={() => navigate("/auth/signup")}>
                Iniciar Agora
              </Button>
              <Button
                variant="outline-primary"
                className="ms-2"
                onClick={handleScrollToFeatures}
              >
                Saiba Mais
              </Button>
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div
              className="img-container text-end pt-5 pt-sm-0"
              onClick={openLightbox}
              style={{ cursor: "pointer" }}
            >
              <img
                src={sass}
                alt="startup"
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero4;
