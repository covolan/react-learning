import { Fragment, useState } from "react";
import Curriculum from "./components/Curriculum";
import "./style/style.css";
import EditBar from "./components/EditBar";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      contactName: "GitHub",
      contactLink: "/",
      contactText: "Test",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      role: "Assumenda quia",
      from: "2016-11-30",
      until: "current",
      company: "Obcaecati",
      description:
        "-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit praesentium obcaecati recusandae. -- Vitae numquam inventore quasi nemo. Dignissimos sequi, assumenda quia nostrum provident a nemo quis magnam, minus ratione enim.",
    },
  ]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([
    {
      title: "Excepturi",
      role: "Asperiores atque nostrum",
      conclusion: "2010-10-22",
      university: "Vitae numquam inventore",
      location: "quasi nemo",
    },
  ]);

  return (
    <main>
      <EditBar
        contacts={contacts}
        setContacts={setContacts}
        experiences={experiences}
        setExperiences={setExperiences}
        skills={skills}
        setSkills={setSkills}
        education={education}
        setEducation={setEducation}
      />
      <Curriculum
        skills={skills}
        contacts={contacts}
        experiences={experiences}
        education={education}
      />
    </main>
  );
};

export default App;
