import { Fragment, useState } from "react";
import Curriculum from "./components/Curriculum";
import "./style/style.css";
import EditBar from "./components/EditBar";

const App = () => {
  return (
    <main>
      <EditBar />
      <Curriculum />
    </main>
  );
};

export default App;
