import axios from "axios";

const API_BASE_URL = "http://localhost:8080/EcoInsight-1.0-SNAPSHOT/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error: unknown, defaultMessage: string) => {
  if (axios.isAxiosError(error) && error.response) {
    throw new Error(error.response.data?.error || defaultMessage);
  } else {
    throw new Error(defaultMessage);
  }
};

// Login, Register, Password Reset
export const registerUser = async (data: {
  exampleName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/register", {
      fullname: data.exampleName,
      email: data.email,
      password: data.password,
    });
    return response.data; // Retorna a mensagem de sucesso ou erro
  } catch (error: unknown) {
    handleApiError(error, "Erro ao registrar o usuário.");
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: unknown) {
    handleApiError(error, "Erro ao fazer login.");
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await api.post("/auth/request-password-reset", { email });
    return response.data;
  } catch (error: unknown) {
    handleApiError(error, "Erro ao solicitar redefinição de senha.");
  }
};

export const resetPassword = async (data: {
  token: string;
  newPassword: string;
}) => {
  try {
    const response = await api.post("/auth/reset-password", data);
    return response.data;
  } catch (error: unknown) {
    handleApiError(error, "Erro ao redefinir a senha.");
  }
};

// Projetos
export const createProject = async (
  projectData: {
    projectName: string;
    description: string;
    location: string;
    estimatedBudget: number;
    plannedEnergyTypes: string[];
    mainObjective: string;
  },
  token: string
) => {
  try {
    const response = await api.post("/projects", projectData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Retorna o projectId
  } catch (error: unknown) {
    handleApiError(error, "Erro ao cadastrar o projeto.");
  }
};

export const getProjects = async (token: string) => {
  try {
    const response = await api.get("/projects", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Retorna a lista de projetos
  } catch (error: unknown) {
    handleApiError(error, "Erro ao listar os projetos.");
  }
};

// Diagnósticos
export const startDiagnostic = async (
  projectId: number,
  diagnosticData: {
    diagnosticResponses: Record<string, number>;
  }
) => {
  try {
    const response = await api.post(
      `/projects/${projectId}/diagnostic`,
      diagnosticData
    );
    return response.data; // Retorna os detalhes do diagnóstico
  } catch (error: unknown) {
    handleApiError(error, "Erro ao iniciar diagnóstico.");
  }
};

export const getDiagnostic = async (projectId: number) => {
  try {
    const response = await api.get(`/projects/${projectId}/diagnostic`);
    return response.data; // Retorna os detalhes do diagnóstico
  } catch (error: unknown) {
    handleApiError(error, "Erro ao obter o diagnóstico.");
  }
};

// Envio de diagnóstico finalizado
export const submitDiagnostic = async (
  projectId: number,
  diagnosticData: {
    diagnosticResponses: Record<string, number>;
  }
) => {
  try {
    const response = await api.post(
      `/projects/${projectId}/diagnostic`,
      diagnosticData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data; // Retorna o resultado do diagnóstico
  } catch (error: unknown) {
    handleApiError(error, "Erro ao enviar o diagnóstico.");
  }
};
