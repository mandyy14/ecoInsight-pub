import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { submitDiagnostic } from "../../api/authApi";

const DiagnosticForm = ({
  updateProject,
}: {
  updateProject: (
    projectId: string,
    data: {
      diagnosticResponses: Record<string, number>;
      score: number;
      recommendations: string[];
    }
  ) => void;
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const diagnosticData = {
      diagnosticResponses: {
        energyRenewableUse: Number(formData.get("question1")),
        energyEfficiency: Number(formData.get("question2")),
        environmentalImpactAssessment: Number(formData.get("question3")),
        carbonFootprint: Number(formData.get("question4")),
        resourceManagement: Number(formData.get("question5")),
        policyImplementation: Number(formData.get("question6")),
      },
    };

    try {
      if (!projectId) throw new Error("ID do projeto não encontrado.");

      // Envia diagnóstico e obtém mock de resposta
      const response = await submitDiagnostic(
        Number(projectId),
        diagnosticData
      );

      console.log("Resposta do submitDiagnostic:", response);

      // Atualiza o projeto correspondente no Dashboard
      updateProject(projectId, {
        diagnosticResponses: diagnosticData.diagnosticResponses,
        score: response.score,
        recommendations: response.recommendations,
      });

      setSuccessMessage("Diagnóstico enviado com sucesso!");
      setErrorMessage(null);

      setTimeout(() => {
        navigate("/auth/dashboard");
      }, 2000);
    } catch (error: unknown) {
      console.error("Erro ao enviar diagnóstico:", error);
      setErrorMessage("Erro ao enviar diagnóstico. Tente novamente.");
      setSuccessMessage(null);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Diagnóstico do Projeto</h3>

      {/* Mensagens de sucesso e erro */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      {/* Categoria 1: Escolha e Uso de Fontes de Energia */}
      <h4>Categoria 1: Escolha e Uso de Fontes de Energia</h4>

      <Form.Group className="mb-3">
        <Form.Label>
          Qual é o nível de utilização de fontes de energia renováveis no
          projeto?
        </Form.Label>
        <Form.Select name="question1">
          <option value="1">Não utilizo fontes de energia renováveis.</option>
          <option value="2">
            Utilizo apenas fontes convencionais, mas estou considerando
            renováveis no futuro.
          </option>
          <option value="3">
            Utilizo uma combinação de fontes convencionais e renováveis, com
            foco em testes iniciais.
          </option>
          <option value="4">
            Cerca de metade da energia usada vem de fontes renováveis.
          </option>
          <option value="5">
            A maior parte da energia usada vem de fontes renováveis.
          </option>
          <option value="6">
            Utilizo exclusivamente fontes de energia renováveis no projeto.
          </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quão eficiente é o uso da energia no projeto?</Form.Label>
        <Form.Select name="question2">
          <option value="1">
            Não tenho controle sobre o uso eficiente da energia.
          </option>
          <option value="2">
            Faço controle básico de consumo, sem monitoramento constante.
          </option>
          <option value="3">
            Monitora-se o consumo de energia periodicamente para ajustes
            pontuais.
          </option>
          <option value="4">
            O projeto inclui práticas para reduzir o desperdício de energia.
          </option>
          <option value="5">
            Uso de tecnologias que maximizam a eficiência energética.
          </option>
          <option value="6">
            A eficiência energética é uma prioridade, com monitoramento em tempo
            real e metas específicas.
          </option>
        </Form.Select>
      </Form.Group>

      {/* Categoria 2: Impacto Ambiental das Fontes de Energia */}
      <h4>Categoria 2: Impacto Ambiental das Fontes de Energia</h4>

      <Form.Group className="mb-3">
        <Form.Label>
          Como o projeto avalia o impacto ambiental das fontes de energia
          utilizadas?
        </Form.Label>
        <Form.Select name="question3">
          <option value="1">
            Não avalio o impacto ambiental das fontes de energia utilizadas.
          </option>
          <option value="2">
            Conheço o impacto potencial, mas não tenho políticas para reduzir
            impactos.
          </option>
          <option value="3">
            Avalio o impacto e faço ajustes mínimos para reduzir emissões.
          </option>
          <option value="4">
            Realizo análise de impacto ambiental regularmente e adapto as
            práticas conforme necessário.
          </option>
          <option value="5">
            Adoto tecnologias para minimizar o impacto ambiental das fontes
            energéticas.
          </option>
          <option value="6">
            Implemento um programa abrangente de redução de impacto ambiental
            para todas as fontes energéticas usadas.
          </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          O projeto considera a pegada de carbono na escolha de fontes de
          energia?
        </Form.Label>
        <Form.Select name="question4">
          <option value="1">
            Não considero a pegada de carbono na escolha de fontes de energia.
          </option>
          <option value="2">
            Considero minimamente, mas não priorizo a redução de carbono.
          </option>
          <option value="3">
            Faço uma análise inicial da pegada de carbono para entender os
            impactos.
          </option>
          <option value="4">
            Escolho fontes energéticas com base em emissões de carbono mais
            baixas.
          </option>
          <option value="5">
            Reduzo a pegada de carbono como parte do plano do projeto.
          </option>
          <option value="6">
            Priorizo exclusivamente fontes de baixa emissão de carbono e faço
            compensações adicionais.
          </option>
        </Form.Select>
      </Form.Group>

      {/* Categoria 3: Gestão de Recursos */}
      <h4>Categoria 3: Gestão de Recursos</h4>

      <Form.Group className="mb-3">
        <Form.Label>
          Quão eficiente é a gestão de recursos naturais no projeto?
        </Form.Label>
        <Form.Select name="question5">
          <option value="1">Não há gestão de recursos no projeto.</option>
          <option value="2">
            Há esforços mínimos para reduzir o desperdício de recursos.
          </option>
          <option value="3">
            A gestão de recursos está em estágios iniciais.
          </option>
          <option value="4">
            Há uma política estruturada para gestão eficiente de recursos.
          </option>
          <option value="5">
            A gestão de recursos é eficiente e bem implementada.
          </option>
          <option value="6">
            Os recursos são geridos de forma sustentável com tecnologias
            inovadoras.
          </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Existem políticas ambientais implementadas no projeto?
        </Form.Label>
        <Form.Select name="question6">
          <option value="1">Não há políticas ambientais implementadas.</option>
          <option value="2">
            Há políticas básicas, mas pouco estruturadas.
          </option>
          <option value="3">
            Há políticas implementadas, mas a aplicação é irregular.
          </option>
          <option value="4">
            As políticas ambientais são bem estruturadas e seguidas.
          </option>
          <option value="5">
            Há políticas detalhadas, revisadas regularmente e aplicadas
            rigorosamente.
          </option>
          <option value="6">
            As políticas ambientais são modelo de sustentabilidade e inovação.
          </option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary">
        Enviar Diagnóstico
      </Button>
    </Form>
  );
};

export default DiagnosticForm;
