import WorkCard from "./WorkCard";

function WorkExperience(props) {
  return (
    <div className="work">
      <h2>Work Experience</h2>
      {props.workExperiences.map((experience, id) => (
        <WorkCard
          key={id}
          image={experience.image}
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
