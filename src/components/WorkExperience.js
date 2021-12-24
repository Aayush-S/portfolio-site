import WorkCard from "./WorkCard";

function WorkExperience(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      {props.workExperiences.map((experience, id) => (
        <WorkCard
          key={id}
          company={experience.company}
          role={experience.role}
          timeline={experience.timeline}
          description={experience.description}
        />
      ))}
    </div>
  );
}

export default WorkExperience;
