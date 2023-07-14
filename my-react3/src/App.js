import React from "react";
import ToggleButton from "./ToggleButton";
import ColorChanger from "./ColorChanger";
import NameList from "./NameList";
import RandomQuote from "./RandomQuote";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <ToggleButton />
      <ColorChanger /><br />
      <NameList />
      <RandomQuote />
      <ToDoList />
    </>
  );
}

export default App;
