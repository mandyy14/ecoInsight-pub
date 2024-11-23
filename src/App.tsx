import AOS from "aos";
import { useEffect } from "react";

import "./assets/scss/theme.scss"; // Importação do tema
import AppRoutes from "./routes/Routes";

const App = () => {
  // Inicialização do AOS (animações)
  useEffect(() => {
    AOS.init();
  }, []);

  return <AppRoutes />;
};

export default App;
