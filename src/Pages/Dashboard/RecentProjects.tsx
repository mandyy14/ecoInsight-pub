import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Project } from "./types";

type RecentProjectsProps = {
  projects: Project[];
};

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <Row>
      <Col lg={12}>
        <h4 className="mb-3 mt-0 fs-16">Projetos Recentes</h4>
        <Row>
          {projects.map((project) => (
            <Col lg={4} key={project.projectId}>
              <Card>
                <Card.Body>
                  <h4 className="mt-0 mb-1">{project.projectName}</h4>
                  <p className="text-muted fs-14">{project.description}</p>

                  {project.score !== undefined && (
                    <div className="mt-3">
                      <h6 className="mb-1">Pontuação</h6>
                      <p>{project.score} / 100</p>
                    </div>
                  )}

                  {project.recommendations && (
                    <div className="mt-3">
                      <h6 className="mb-1">Recomendações</h6>
                      <ul>
                        {project.recommendations.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.diagnosticResponses && (
                    <div className="mt-3">
                      <h6 className="mb-1">Respostas do Diagnóstico</h6>
                      <ul>
                        {Object.entries(project.diagnosticResponses).map(
                          ([key, value]) => (
                            <li key={key}>
                              {key}: {value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  <Link
                    to={`/diagnostic/${project.projectId}`}
                    className="btn btn-primary mt-3"
                  >
                    Continuar Diagnóstico
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default RecentProjects;
