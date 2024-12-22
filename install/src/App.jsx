import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  // let arr = ['shehzeen', 19 , 'true', 'js']
  // let arr = 0 ||  ['shehzeen', 19 , 'true', 'js']
  // console.log(arr);

  return (
    <>
      <Cards
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPso8yha9Y63fjz7GWsz2I6DFgIQ59JLl3w&s"
        title="Person 1"
        desc="This is a sample card of person 1"
      />
      {/* <select>
      {
      arr.map((e) => {
        return (
            <option>{e}</option>
        );
      })
      }
      </select> */}
      {/* <Button name= "Logout"/>
      <Button name= "Login"/>
      <Student StdName= "shanza" stdAge= {17} isStudent= {true}/>
      <Student StdName= "shehzeen" stdAge= {19} isStudent= {false}/>  */}
    </>
  );
}

export default App;
// import Button from "./Button/Button";
// import Student from "./Student/Student";
// import Data from "./Data";
import { Cards } from "./components/Cards/Cards";
