import { Route, Routes } from "react-router-dom";

import ForgetPassword from "../Pages/auth/ForgetPassword";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import Dashboard from "../Pages/Dashboard";
import DiagnosticForm from "../Pages/Dashboard/DiagnosticForm";
import EcoInsight from "../Pages/landing/EcoInsight";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcoInsight />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/dashboard" element={<Dashboard />} />
      <Route
        path="/diagnostic/:projectId"
        element={
          <DiagnosticForm
            updateProject={(projectId, data) => {
              console.log(`Projeto atualizado: ${projectId}`, data);
            }}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
