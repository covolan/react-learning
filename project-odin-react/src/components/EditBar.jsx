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

const ExperienceForm = ({ experiences, setExperiences }) => {
  const createExp = (event) => {
    event.preventDefault();

    // Getting the elements from page

    const role = document.querySelector("#role");
    const fromElem = document.querySelector("#from");
    const to = document.querySelector("#to");
    const currentSelect = document.querySelector("#current");
    const company = document.querySelector("#company");
    const expDesc = document.querySelector("#experience-description");
    let finalDate;

    // Logic to select date until or current job

    if (currentSelect.selectedIndex === 0) {
      finalDate = to.value;
    } else {
      finalDate = "current";
    }

    // Setting the experiences based on the inputed values

    setExperiences([
      ...experiences,
      {
        role: role.value,
        from: fromElem.value,
        until: finalDate,
        company: company.value,
        description: expDesc.value,
      },
    ]);

    // Reseting the form

    role.value = "";
    fromElem.value = "";
    to.value = "";
    currentSelect.selectedIndex = 0;
    company.value = "";
    expDesc.value = "";
  };

  const editExp = (expCompany) => {
    // Getting the elements from the page

    const role = document.querySelector("#role");
    const fromElem = document.querySelector("#from");
    const to = document.querySelector("#to");
    const currentSelect = document.querySelector("#current");
    const company = document.querySelector("#company");
    const expDesc = document.querySelector("#experience-description");

    // Setting a temporary list and object

    const tempList = experiences.filter((elem) => elem.company === expCompany);
    const tempExp = tempList[0];

    // getting the data from object an putting on the form

    role.value = tempExp.role;
    fromElem.value = tempExp.from;
    if (tempExp.until == "current") {
      currentSelect.selectedIndex = 1;
    } else {
      to.value = tempExp.until;
    }
    company.value = tempExp.company;
    expDesc.value = tempExp.description;

    // Deleting the object

    delExp(expCompany);
  };

  // Function to delete the object
  // TODO: Better logic to check the selected object

  const delExp = (expCompany) => {
    const tempList = experiences.filter((elem) => elem.company != expCompany);
    setExperiences(tempList);
  };

  return (
    <Fragment>
      <form className="edit-bar-experience" onSubmit={createExp}>
        <label htmlFor="role">Role: </label>
        <input id="role" type="text" />
        <label htmlFor="from">Date: from </label>
        <input id="from" type="date" /> to <input id="to" type="date" /> or
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
      <div className="experiences">
        {experiences.map((exp) => {
          return (
            <Fragment key={exp.from}>
              <p>
                {exp.role} at {exp.company}
              </p>
              <button className="btn" onClick={() => editExp(exp.company)}>
                Edit experience
              </button>
              <button className="btn" onClick={() => delExp(exp.company)}>
                Delete experience
              </button>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

const SkillsForm = ({ skills, setSkills }) => {
  const addSkill = (event) => {
    event.preventDefault();
    const skillInput = document.querySelector("#skill");

    setSkills([...skills, skillInput.value]);

    skillInput.value = "";
  };

  const editSkill = (selectedSkill) => {
    const skillInput = document.querySelector("#skill");
    skillInput.value = selectedSkill;

    delSkill(selectedSkill);
  };

  const delSkill = (selectedSkill) => {
    const tempSkills = skills.filter((elem) => elem != selectedSkill);
    setSkills([tempSkills]);
    console.log(skills, skills.length, skills[0]);
  };

  return (
    <Fragment>
      <form className="edit-bar-skills" onSubmit={addSkill}>
        <label htmlFor="skill">Skill name: </label>
        <input id="skill" type="text" />
        <button className="btn">Apply Skill</button>
      </form>
      <div className="skills">
        {skills.map((elem) => {
          return (
            <Fragment key={elem}>
              <p>{elem}</p>
              <button className="btn" onClick={() => editSkill(elem)}>
                Edit Skill
              </button>
              <button className="btn" onClick={() => delSkill(elem)}>
                Delete Skill
              </button>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

const EducationForm = ({education, setEducation}) => {
  const addEducation = (event) => {
    event.preventDefault();

    const title = document.querySelector("#title");
    const role = document.querySelector("#education-role");
    const date = document.querySelector("#date-conclusion");
    const dateCurrent = document.querySelector("#date-current");
    const university = document.querySelector("#university-name");
    const location = document.querySelector("#location");
    let finalDate;

    if (dateCurrent.selectedIndex != 0) {
      finalDate = date.value;
    } else {
      finalDate = "current";
    }

    setEducation([
      ...education,
      {
        title: title.value,
        role: role.value,
        conclusion: finalDate,
        university: university.value,
        location: location.value,
      }
    ])

    title.value = "";
    role.value = "";
    date.value = "";
    dateCurrent.selectedIndex = 0;
    university.value = "";
    location.value = "";
  }
  
  return (
    <form className="edit-bar-education" onSubmit={addEducation}>
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

const EditBar = ({
  contacts,
  setContacts,
  experiences,
  setExperiences,
  skills,
  setSkills,
  education,
  setEducation,
}) => {
  return (
    <div className="edit-bar">
      <SummaryForm />
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <ExperienceForm
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <SkillsForm skills={skills} setSkills={setSkills} />
      <EducationForm education={education} setEducation={setEducation} />
    </div>
  );
};

export default EditBar;
