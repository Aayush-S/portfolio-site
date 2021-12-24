function ProjectCard(props) {
  return (
    <div className="projectCard">
      {/* <img src={props.image} alt="project logo" /> */}
      <h3>{props.title}</h3>
      <p className="projectTags">{props.tags}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectCard;
