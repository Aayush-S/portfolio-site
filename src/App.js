import { useState, useEffect } from "react";
import resumeInfo from "./resumeInfo.json";
import Landing from "./components/Landing";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const workExperience = resumeInfo.workExperience;
    setWorkExperiences(workExperience);
    const projects = resumeInfo.projects;
    setProjects(projects);
  }, []);
  return (
    <div className="App">
      <Landing />
      <WorkExperience workExperiences={workExperiences} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
