import { Fragment, useState } from "react";

const SummaryForm = () => {
  const updateSummary = (event) => {
    const summary = document.querySelector(".summary"); // Select summary from curriculum
    const summaryEdit = document.querySelector(".edit-bar-summary-text"); // Select text area
    event.preventDefault();
    summary.innerText = summaryEdit.value;
    summaryEdit.value = "";
  };

  const editSummary = (event) => {
    const summary = document.querySelector(".summary");
    const summaryEdit = document.querySelector(".edit-bar-summary-text");
    event.preventDefault();
    summaryEdit.value = summary.innerText;
  };

  return (
    <form action="" className="edit-bar-summary" onSubmit={updateSummary}>
      <textarea
        className="edit-bar-summary-text"
        name="summary-form"
        id="summary-form"
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" className="btn" value="Apply Summary" />
      <button className="btn" onClick={editSummary}>
        Edit summary
      </button>
    </form>
  );
};

const ContactForm = ({ contacts, setContacts }) => {
  const addContact = (event) => {
    event.preventDefault();
    const selectElement = document.querySelector("#contact-select"); // select the dropdown
    const name = selectElement.options[selectElement.selectedIndex].text; // get the selected name
    const link = document.querySelector("#link"); // get the text from contact link
    const linkText = document.querySelector("#link-text"); // text from contact text

    if (selectElement.selectedIndex == 0) {
      return;
    }

    // Updating the state:

    setContacts([
      ...contacts,
      {
        contactName: name,
        contactLink: link.value,
        contactText: linkText.value,
      },
    ]);

    // Reseting the form:

    selectElement.selectedIndex = 0;
    link.value = "";
    linkText.value = "";
  };

  const delContact = (name) => {
    const tempList = contacts.filter((elem) => elem.contactName != name);
    setContacts(tempList);
  };

  const editContact = (name) => {
    const tempContact = contacts.filter((elem) => elem.contactName == name)[0]; // temp contact Object
    const link = document.querySelector("#link");
    const linkText = document.querySelector("#link-text");
    const selectElement = document.querySelector("#contact-select");

    // Setting the form:

    link.value = tempContact.contactLink;
    linkText.value = tempContact.contactText;

    for (let i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].text == tempContact.contactName) {
        selectElement.options[i].selected = true;
      }
    }

    // Deleting the contact:

    delContact(name);
  };

  return (
    <>
      <form className="edit-bar-contact" onSubmit={addContact}>
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
      <div className="added-contacts">
        {contacts.map((elem) => {
          return (
            <Fragment key={elem.contactName}>
              <p>{elem.contactName}</p>
              <button
                className="btn"
                onClick={() => editContact(elem.contactName)}
              >
                Edit Contact
              </button>
              <button
                onClick={() => delContact(elem.contactName)}
                className="btn"
              >
                Delete Contact
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

const ExperienceForm = ({experiences, setExperiences}) => {
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
      <label htmlFor="company">Company Name:</label>
      <input id="company" type="text" />
      <label htmlFor="experience-description">
        Experience description (Separate the items with "--"):
      </label>
      <textarea
        name="experience-description"
        id="experience-description"
        cols="30"
        rows="3"
        placeholder="-- Exemple text"
      ></textarea>
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
      <label htmlFor="location">Location: </label>
      <input id="location" type="text" />
      <button className="btn">Apply Education</button>
    </form>
  );
};

const EditBar = ({ contacts, setContacts, experiences, setExperiences }) => {
  return (
    <div className="edit-bar">
      <SummaryForm />
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <ExperienceForm />
      <SkillsForm />
      <EducationForm />
    </div>
  );
};

export default EditBar;
