import React from "react";
import ToggleButton from "./ToggleButton";
import ColorChanger from "./ColorChanger";
import NameList from "./NameList";
import RandomQuote from "./RandomQuote";

function App() {
  return (
    <>
      <ToggleButton />
      <ColorChanger /><br />
      <NameList />
      <RandomQuote />
    </>
  );
}

export default App;
