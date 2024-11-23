import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer2 from "../../components/footer/Footer2";
import Navbar4 from "../../components/navbarDashboard/Navbar4";
import DiagnosticForm from "./DiagnosticForm";
import ProfileWidget from "./ProfileWidget";
import RecentProjects from "./RecentProjects";
import { Project } from "./types";

const LOCAL_STORAGE_KEY = "ecoinsight_projects";

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const saveProjectsToLocalStorage = (updatedProjects: Project[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProjects));
  };

  const addProject = (newProject: Project) => {
    setProjects((prevProjects) => {
      const updatedProjects = [newProject, ...prevProjects];
      saveProjectsToLocalStorage(updatedProjects);
      return updatedProjects;
    });
  };

  const updateProject = (
    projectId: string,
    data: {
      diagnosticResponses: Record<string, number>;
      score: number;
      recommendations: string[];
    }
  ) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.projectId === projectId ? { ...project, ...data } : project
      );
      saveProjectsToLocalStorage(updatedProjects);
      return updatedProjects;
    });
  };

  return (
    <>
      <Navbar4 fixedWidth />

      <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <h3 className="mb-0">Olá empresa</h3>
                <p className="mt-1 fw-medium">Bem vindo à EcoInsight!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <ProfileWidget onAddProject={addProject} />
          </div>
          <RecentProjects projects={projects} />
        </div>
      </section>

      <Footer2 />

      <Routes>
        <Route
          path="/diagnostic/:projectId"
          element={<DiagnosticForm updateProject={updateProject} />}
        />
      </Routes>
    </>
  );
};

export default Dashboard;
