function WorkCard(props) {
  console.log(props.image);
  return (
    <div className="workCard">
      <img src={props.image} alt="company logo" className="workImage" />
      <div className="workTextContent">
        <h3>{props.company}</h3>
        <p className="roleAndTimeline">
          {props.role} | {props.timeline}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
