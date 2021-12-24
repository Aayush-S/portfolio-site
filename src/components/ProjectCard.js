function ProjectCard(props) {
  return (
    <div className="projectCard">
      <img src={props.image} alt="project logo" className="projectImage" />
      <div className="projectTextContent">
        <h3>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.title}
          </a>
        </h3>
        <p className="projectTags">{props.tags}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
