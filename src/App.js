import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";

export default function App() {
  const codingChallenge = (
    <div>
      <h1> Coding Challenge</h1>
      <ol>
        <li>
          Please develop a small web app for searching Rick & Morty  characters.
        </li>
        <li>
          When the user types something into the search bar they should be
          presented with suggested character names after they stop typing
        </li>
        <li>
          If the user presses enter on one of the suggestions, the character
          results for the entered search term should be shown.
        </li>
        <li>
          If the user clicks on one of the suggestions, the results for that
          suggestion should be shown.
        </li>
      </ol>
    </div>
  );
  const [apiData, setApiData] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");

  axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    setApiData(response.data.info.count);
  });
  const onChange = (text) => {
    setText(text);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = apiData.filter((item) => {
        console.log(item);
        if (item.name.includes(text)) return item.name;
        return false;
      });
      console.log("tets", matches);
    }
    setSuggestions(matches);
    setText(text);
  };
  return (
    <div className="App">
      <>{codingChallenge}</>
      <div>
        <input
          placeholder="Enter search criteria"
          type="search"
          onChange={(e) => onChange(e.target.value)}
          value={text}
        />
      </div>
    </div>
  );
}
