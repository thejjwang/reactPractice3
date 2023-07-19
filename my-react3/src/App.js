import React from "react";
// import ToggleButton from "./ToggleButton";
// import ColorChanger from "./ColorChanger";
// import NameList from "./NameList";
// import RandomQuote from "./RandomQuote";
// import ToDoList from "./ToDoList";
import "./App.css";
// import Greeting from "./Greeting";
// import Counter from "./Counter";
// import ToDoList2 from "./ToDoList2";
// import NumbersList from "./NumbersList";
// import Message from "./Message";
// import Timer from "./Timer";
import ProfileForm from "./ProfileForm";
import Profile from "./Profile";
import TabularData from "./TabularData";
const myArr = [1, 3, 7, 8];
function App() {
  return (
    <>
      {/* <ToggleButton />
      <ColorChanger /><br />
      <NameList />
      <RandomQuote /> */}
      {/* <ToDoList /> */}
      {/* <Greeting name={'jj'}/>
      <Counter />
      <ToDoList2 array={myArr}/> */}
        {/* <LoginForm /> */}
        {/* <Message />
        <NumbersList array={myArr}/>
        <Timer /> */}
        <ProfileForm />
        <Profile />
        <TabularData />
    </>
  );
}

export default App;
