import ProjectCard from "./ProjectCard";

function Projects(props) {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {props.projects.map((project, id) => (
        <ProjectCard
          key={id}
          title={project.title}
          tags={project.tags}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Projects;
