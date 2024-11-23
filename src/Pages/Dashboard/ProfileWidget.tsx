import React, { useState } from "react";
import { Button, Card, Col, Form, Modal } from "react-bootstrap";
import { createProject } from "../../api/authApi";

type ProfileWidgetProps = {
  onAddProject: (newProject: {
    projectId: string;
    projectName: string;
    description: string;
    location: string;
    estimatedBudget: number;
    plannedEnergyTypes: string[];
    mainObjective: string;
    title: string;
    time: string;
    state: { name: string; variant: string };
    progress: { value: number; variant: string };
    member: string[];
  }) => void;
};

const ProfileWidget = ({ onAddProject }: ProfileWidgetProps) => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newProject = {
      projectName: formData.get("projectName") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      estimatedBudget: parseFloat(formData.get("estimatedBudget") as string),
      plannedEnergyTypes: (formData.get("plannedEnergyTypes") as string)
        ?.split(",")
        .map((type) => type.trim()),
      mainObjective: formData.get("mainObjective") as string,
    };

    try {
      const token = localStorage.getItem("authToken") || "";
      const response = await createProject(newProject, token);

      const updatedProject = {
        ...newProject,
        projectId: response.projectId,
        title: newProject.projectName,
        time: new Date().toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        state: { name: "Novo", variant: "primary" },
        progress: { value: 0, variant: "success" },
        member: [],
      };

      onAddProject(updatedProject);

      setSuccess("Projeto cadastrado com sucesso!");
      setError(null);

      setTimeout(() => {
        setSuccess(null);
        handleClose();
      }, 2000);
    } catch {
      setError("Erro ao cadastrar o projeto.");
    }
  };

  return (
    <>
      <Col lg={5}>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-1 mt-0 fs-16">Empresa Fictícia</h4>
                <p className="text-muted pb-0 fs-14">
                  Empresa de consultoria de sustentabilidade
                </p>
              </div>
              <Button variant="primary" onClick={handleShow}>
                Novo Projeto
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Projeto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Projeto</Form.Label>
              <Form.Control name="projectName" placeholder="Digite o nome" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Digite a descrição"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Localização</Form.Label>
              <Form.Control
                name="location"
                placeholder="Digite a localização"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Orçamento Estimado</Form.Label>
              <Form.Control
                name="estimatedBudget"
                type="number"
                placeholder="Digite o orçamento"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipos de Energia Planejados</Form.Label>
              <Form.Control
                name="plannedEnergyTypes"
                placeholder="Digite os tipos separados por vírgula"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Objetivo Principal</Form.Label>
              <Form.Control
                name="mainObjective"
                placeholder="Digite o objetivo principal"
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProfileWidget;
