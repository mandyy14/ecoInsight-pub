import FeatherIcon from "feather-icons-react";
import { Badge, Col, Container, Row } from "react-bootstrap";

// types
import { TeamMember } from "./types";

type TeamProps = {
  teamMembers: TeamMember[];
};

const Team = ({ teamMembers }: TeamProps) => {
  return (
    <section className="pb-5 pt-6 mt-4 position-relative" data-aos="fade-up">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Badge pill bg="" className="badge-soft-info px-2 py-1">
              Nosso time
            </Badge>
            <h1 className="display-5 fw-medium">Conheça nosso time</h1>
            <p className="text-muted mx-auto">
              Comece a trabalhar com a{" "}
              <span className="text-dark fw-bold">EcoInsight</span> por um mundo
              mais sustentável
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {(teamMembers || []).map((teamMember, index) => {
            return (
              <Col lg={4} md={6} key={index.toString()}>
                <div className="d-flex align-items-center mb-4 pb-md-3">
                  <img
                    src={teamMember.avatar}
                    alt="avatar"
                    className="img-fluid avatar-md d-block rounded me-3"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mt-0 mb-1 fw-medium">{teamMember.name}</h5>
                    <p className="text-muted fw-medium mb-1">
                      {teamMember.designation}
                      {teamMember.rm && (
                        <span className="text-muted fw-medium">
                          {" "}
                          - RM: {teamMember.rm}
                        </span>
                      )}
                      {teamMember.turma && (
                        <span className="text-muted fw-medium">
                          {" "}
                          Turma: {teamMember.turma}
                        </span>
                      )}
                    </p>
                    <div className="d-flex gap-2">
                      {teamMember.linkedin && (
                        <a
                          href={teamMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                        >
                          <FeatherIcon icon="linkedin" className="icon-xs" />
                        </a>
                      )}
                      {teamMember.github && (
                        <a
                          href={teamMember.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark"
                        >
                          <FeatherIcon icon="github" className="icon-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
