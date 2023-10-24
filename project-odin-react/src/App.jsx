import { Fragment, useState } from "react";
import Curriculum from "./components/Curriculum";
import "./style/style.css";
import EditBar from "./components/EditBar";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      contactName: "GitHub: ",
      contactLink: "/",
      contactText: "Test",
    },
  ]);

  return (
    <main>
      <EditBar contacts={contacts} setContacts={setContacts} />
      <Curriculum contacts={contacts} />
    </main>
  );
};

export default App;
