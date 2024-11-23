import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import * as yup from "yup";

import React from "react";
import { loginUser } from "../../api/authApi"; // Atualizado para importar a função de login
import { FormInput, VerticalForm } from "../../components/form";
import AuthLayout from "./AuthLayout";

type LocationState = {
  from: {
    pathname: string;
  };
};

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .required("Por favor, insira o Email")
        .email("Por favor, insira um Email válido"),
      password: yup.string().required("Por favor, insira a Senha"),
    })
  );

  const location = useLocation();
  let redirectUrl = "/auth/dashboard";

  if (location.state) {
    const { from } = location.state as LocationState;
    redirectUrl = from ? from.pathname : "/";
  }

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (formData: UserData) => {
    try {
      const response = await loginUser(formData); // Chamada ao backend
      console.log("Login bem-sucedido!", response);
      setIsAuthenticated(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Erro ao fazer login:", err.message);
        setError(err.message || "Erro ao fazer login. Tente novamente.");
      } else {
        console.error("Erro ao fazer login:", err);
        setError("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <>
      {isAuthenticated && <Navigate to={redirectUrl} replace />}
      <AuthLayout
        hasSlider
        bottomLinks={
          <p className="text-muted">
            {"Ainda não tem uma conta?"}
            <Link to="/auth/signup" className="text-primary fw-semibold ms-1">
              {"Cadastre-se"}
            </Link>
          </p>
        }
      >
        <h6 className="h5 mb-0 mt-3">{"Bem-vindo de volta!"}</h6>
        <p className="text-muted mt-1 mb-4">
          {"Digite seu e-mail e senha para acessar sua conta."}
        </p>

        {error && (
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ email: "", password: "" }}
        >
          <FormInput
            type="email"
            name="email"
            label={"Email"}
            placeholder={"Digite seu email"}
            containerClass={"mb-3"}
          />

          <FormInput
            label={"Senha"}
            type="password"
            name="password"
            placeholder={"Digite sua senha"}
            action={
              <Link
                to="/auth/forget-password"
                className="float-end text-muted text-unline-dashed ms-1 fs-13"
              >
                {"Esqueceu sua senha?"}
              </Link>
            }
            containerClass={"mb-3"}
          />

          <FormInput
            type="checkbox"
            name="rememberMe"
            label={"Lembrar-me"}
            containerClass={"mb-3"}
            defaultChecked
          />

          <div className="mb-0 text-center d-grid">
            <Button type="submit">{"Entrar"}</Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Login;
