import { FaChevronDown } from "react-icons/fa";
import headshot from "../images/headshot.jpg";

function Landing() {
  return (
    <div className="landingPage">
      <div className="landingCard">
        <img src={headshot} alt="headshot" className="headshot" />
        <div className="landingCardTextContent">
          <h1>Hi, I'm Aayush!</h1>
          <p>
            Second year student at{" "}
            <a
              href="https://www.gatech.edu/"
              className="GT"
              target="_blank"
              rel="noreferrer"
            >
              Georgia Tech
            </a>{" "}
            studying Computer Science
          </p>
          <ul className="landingLinks">
            <li>
              <a href="" target="_blank" rel="noreferrer">
                Resumé
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aayush-S"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aayush-seth/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* TODO: Make arrow clickable to scroll down */}
      <FaChevronDown className="downArrow" />
    </div>
  );
}

export default Landing;
