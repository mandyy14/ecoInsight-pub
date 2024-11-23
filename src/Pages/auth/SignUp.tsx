import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";

import React from "react";
import { registerUser } from "../../api/authApi"; // Atualizado para usar o método do serviço
import { FormInput, VerticalForm } from "../../components/form";
import AuthLayout from "./AuthLayout";

type UserData = {
  exampleName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      exampleName: yup
        .string()
        .required("Por favor, insira o nome da empresa."),
      email: yup
        .string()
        .required("Por favor, insira um email.")
        .email("Por favor, insira um email válido."),
      password: yup
        .string()
        .required("Por favor, insira uma senha.")
        .min(6, "A senha deve ter no mínimo 6 caracteres."),
    })
  );

  const [error, setError] = React.useState<string | null>(null);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const onSubmit = async (formData: UserData) => {
    try {
      const response = await registerUser(formData);
      console.log("Usuário registrado com sucesso:", response.message);
      setSuccessMessage("Cadastro realizado com sucesso!");
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Erro ao registrar usuário:", err.message);
        setError(
          err.message || "Erro ao registrar o usuário. Tente novamente."
        );
      } else {
        console.error("Erro ao registrar usuário:", err);
        setError("Erro ao registrar o usuário. Tente novamente.");
      }
      setSuccessMessage(null);
    }
  };

  return (
    <AuthLayout
      hasSlider
      bottomLinks={
        <p className="text-muted">
          Já tem uma conta?
          <Link to="/auth/login" className="text-primary fw-semibold ms-1">
            Faça login
          </Link>
        </p>
      }
    >
      <h6 className="h5 mb-0 mt-3">Crie sua conta</h6>
      <p className="text-muted mt-1 mb-4">
        Não tem uma conta? Crie sua conta agora, é rápido e fácil.
      </p>

      {error && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" className="mb-3">
          {successMessage}
        </Alert>
      )}

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        resolver={schemaResolver}
        defaultValues={{ exampleName: "", email: "", password: "" }}
      >
        <FormInput
          type="text"
          name="exampleName"
          label="Nome da Empresa"
          placeholder="Insira o nome da empresa"
          containerClass="mb-3"
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          placeholder="Insira seu email"
          containerClass="mb-3"
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          placeholder="Insira sua senha"
          containerClass="mb-3"
        />
        <div className="mb-0 text-center d-grid">
          <Button type="submit">Registrar</Button>
        </div>
      </VerticalForm>
    </AuthLayout>
  );
};

export default SignUp;
