function WorkCard(props) {
  return (
    <div className="workCard">
      {/* <img src={props.image} alt="company logo" /> */}
      <h3>{props.company}</h3>
      <p className="roleAndTimeline">
        {props.role} | {props.timeline}
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default WorkCard;
