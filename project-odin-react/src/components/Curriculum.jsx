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
      {contacts.map((elem) => {
        return (
          <p className="cv-info-paragraph contact-link" key={elem.contactLink}>
            <strong className="contact-title">{elem.contactName}</strong>
            <a href={elem.contactLink} target="_blank">
              {elem.contactText}
            </a>
          </p>
        );
      })}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="cv-info-experience section">
      <h2 className="cv-info-title">
        EXPERIENCE<span className="title-bar"></span>
      </h2>
      <p className="cv-info-experience-title">
        <strong>Assumenda quia</strong>, 11/2016 to current.
      </p>
      <p>
        <strong>Obcaecati</strong> - amet.
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          praesentium obcaecati recusandae.
        </li>
        <li>
          Vitae numquam inventore quasi nemo. Dignissimos sequi, assumenda quia
          nostrum provident a nemo quis magnam, minus ratione enim.
        </li>
      </ul>

      <p className="cv-info-experience-title">
        <strong>Assumenda quia</strong>, 11/2016 to current.
      </p>
      <p>
        <strong>Obcaecati</strong> - amet.
      </p>

      <ul>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          praesentium obcaecati recusandae.
        </li>
        <li>
          Vitae numquam inventore quasi nemo. Dignissimos sequi, assumenda quia
          nostrum provident a nemo quis magnam, minus ratione enim.
        </li>
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="cv-info-skills section">
      <h2 className="cv-info-title">
        SKILLS<span className="title-bar"></span>
      </h2>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <div className="cv-info-education section">
      <h2 className="cv-info-title">
        EDUCATION<span className="title-bar"></span>
      </h2>
      <p>Excepturi, Asperiores atque nostrum, 2010</p>
      <p>
        <strong>Vitae numquam inventore</strong> - quasi nemo.
      </p>
    </div>
  );
};

const Curriculum = ({ contacts }) => {
  return (
    <div className="cv">
      <TopSection />
      <div className="cv-info">
        <Summary />
        {contacts && <Contact contacts={contacts} />}
        <Experience />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default Curriculum;
