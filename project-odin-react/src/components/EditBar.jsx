const SummaryForm = () => {
  return (
    <form action="" className="edit-bar-summary">
      <textarea
        className="edit-bar-summary-text"
        name="summary-form"
        id="summary-form"
        cols="30"
        rows="10"
      ></textarea>
      <button className="btn">Apply Summary</button>
      <button className="btn">Edit summary</button>
    </form>
  );
};

const ContactForm = () => {
  return (
    <form className="edit-bar-contact">
      <select name="contact-select" id="contact-select">
        <option value="">Choose one</option>
        <option value="github">GitHub</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="linkedin">LinkedIn</option>
      </select>
      <label htmlFor="link">Contact link:</label>
      <input id="link" type="text" />
      <label htmlFor="link-text">Contact text:</label>
      <input id="link-text" type="text" />
      <button className="btn">Apply Contact</button>
    </form>
  );
};

const ExperienceForm = () => {
  return (
    <form className="edit-bar-experience">
      <label htmlFor="role">Role: </label>
      <input id="role" type="text" />
      <label htmlFor="date">Date: from </label>
      <input type="date" /> to <input type="date" /> or
      <select name="current" id="current">
        <option value=""> Choose one</option>
        <option value="current">Current Job</option>
      </select>
      <button className="btn">Apply Experience</button>
    </form>
  );
};

const SkillsForm = () => {
  return (
    <form className="edit-bar-skills">
      <label htmlFor="skill">Skill name: </label>
      <input id="skill" type="text" />
      <button className="btn">Apply Skill</button>
    </form>
  );
};

const EducationForm = () => {
  return (
    <form className="edit-bar-education">
      <label htmlFor="title">Title: </label>
      <input id="title" type="text" />
      <label htmlFor="education-role">Role: </label>
      <input id="education-role" type="text" />
      <label htmlFor="date-conclusion">Date of conclusion: </label>
      <input id="date-conclusion" type="date" /> or{" "}
      <select name="date-current" id="date-current">
        <option value="">Choose one</option>
        <option value="current">current</option>
      </select>
      <label htmlFor="university-name">University name:</label>
      <input id="university-name" type="text" />
      <label htmlFor="location">Locaiton: </label>
      <input id="location" type="text" />
      <button className="btn">Apply Education</button>
    </form>
  );
};

const EditBar = () => {
  return <div className="edit-bar">
    <SummaryForm />
    <ContactForm />
    <ExperienceForm />
    <SkillsForm />
    <EducationForm />
  </div>;
};

export default EditBar;
