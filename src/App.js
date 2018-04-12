import React, { Component } from "react";
import Bootstrap from "./components/Bootstrap";
import Panel from "./components/Panel";
import Wrapper from  "./components/Wrapper";
import Rules from "./components/Rules"
import HanziCard from "./components/HanziCard";
import hanzi from "./hanzi.json";
import "./App.css";

class App extends Component {
  //Set the information from the Hanzi.json information to be the default info in an array.
  state = {
    Hanzi
  };

  //Set up a object to handle flipping


  //Set another object to handle fliping back


  //Set up the layout of the page
  render() {
    return (
    // <Navbar/>
    // <Panel/>
    <Wrapper>
      <Rules> Place holder information will be pladed here</Rules>
      {this.state.hanzi.map(hanzi => (
        <HanziCard
        id={hanzi.id}
        key={hanzi.id}
        name={hanzi.name}
        image={hanzi.image}
        pinyin={hanzi.pinyin}
        strokes={hanzi.strokes}
        clicked={hanzi.clicked}
        />
      ))}
    </Wrapper>
    );
  }
}

export default App;