import { Fragment, useState } from "react";
import Curriculum from "./components/Curriculum";
import "./style/style.css";
import EdditBar from "./components/EdditBar";

const App = () => {
  return (
    <main>
      <EdditBar />
      <Curriculum />
    </main>
  );
};

export default App;
