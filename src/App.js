import React from "react";
import logo from "./logo.svg";
import frejapuppy from "./frejapuppy.jpg";
import friends from "./friends.jpg";
import honey from "./honey.jpg";
import "./App.css";
import MyButton from "./components/MyButton";
import MyImgCard from "./components/MyImgCard";
import MyTitle from "./components/MyTitle";
import MyImgCardWtitle from "./components/MyImgCardWtitle";
import MyLink from "./components/MyLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyTitle title="Pictures" />
        <MyImgCardWtitle imgSrc={frejapuppy} />
        <MyButton title="Tryck här" />
        <MyLink href="./index.js" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <MyImgCard src={friends} />
        <MyButton title="Eller här" />
        <MyLink href="./index.js" />
        <MyImgCardWtitle imgSrc={honey} title="Family" />
        <MyButton title="Varför inte här??" />
        <MyLink href="./index.js" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
