import { Fragment } from "react";

const TopSection = () => {
  return (
    <>
      <div className="cv-top__bar"></div>
      <h1 className="cv-name"> PLACEHOLDER NAME</h1>
    </>
  );
};

const Summary = () => {
  return (
    <div className="cv-info-summary section">
      <h2 className="cv-info-title">
        PROFESSIONAL SUMMARY <span className="title-bar"></span>
      </h2>
      <p className="cv-info-paragraph summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit
        quibusdam molestiae in ipsum, accusamus nihil. Nobis beatae e t eaque
        minus similique possimus eos sapiente. Cum pariatur odit eum itaque?
      </p>
    </div>
  );
};

const Contact = ({ contacts }) => {
  return (
    <div className="cv-info-contact section">
      <h2 className="cv-info-title">
        CONTACT<span className="title-bar"></span>
      </h2>
      {contacts.map((elem) => (
        <p className="cv-info-paragraph contact-link" key={elem.contactLink}>
          <strong className="contact-title">{elem.contactName}: </strong>
          <a href={elem.contactLink} className="link" target="_blank">
            {elem.contactText}
          </a>
        </p>
      ))}
    </div>
  );
};

const Experience = ({ experiences }) => {
  return (
    <div className="cv-info-experience section">
      <h2 className="cv-info-title">
        EXPERIENCE<span className="title-bar"></span>
      </h2>

      {experiences.map((elem) => {
        let strDesc = elem.description.split("--");
        strDesc.shift();
        let tempFrom = String(elem.from).split("-");
        let from = `${tempFrom[1]}/${tempFrom[0]}`;
        let finalDate;
        if (elem.until != "current") {
          let tempVal = String(elem.until).split("-");
          finalDate = `${tempVal[1]}/${tempVal[0]}`;
        } else {
          finalDate = elem.until;
        }
        return (
          <Fragment key={elem.from}>
            <p className="cv-info-experience-title">
              <strong>{elem.role}</strong>, {from} to {finalDate}.
            </p>
            <p>
              <strong>{elem.company}</strong>
            </p>
            <ul>
              {strDesc.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className="cv-info-skills section">
      <h2 className="cv-info-title">
        SKILLS<span className="title-bar"></span>
      </h2>
      <ul>
        {skills.map((elem) => (
          <li key={elem}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = ({ education }) => {
  return (
    <div className="cv-info-education section">
      <h2 className="cv-info-title">
        EDUCATION<span className="title-bar"></span>
      </h2>
      {education.map((elem) => {
        let tempDate;
        if (elem.conclusion == "current") {
          tempDate = elem.conclusion;
        } else {
          tempDate = elem.conclusion.split("-");
          tempDate = tempDate[0];
        }
        return (
          <Fragment key={elem.title}>
            <p>
              {elem.title}, {elem.role}, {tempDate}
            </p>
            <p>
              <strong>{elem.university}</strong> - {elem.location}.
            </p>
          </Fragment>
        );
      })}
    </div>
  );
};

const Curriculum = ({ contacts, experiences, skills, education }) => {
  return (
    <div className="cv">
      <TopSection />
      <div className="cv-info">
        <Summary />
        <Contact contacts={contacts} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Education education={education} />
      </div>
    </div>
  );
};

export default Curriculum;
