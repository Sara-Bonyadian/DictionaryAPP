import React,{useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} placeholder="Type a word..." autoFocus={true}/>
        </form>
      </section>
      <section>
        <h3>Here you can see the definition</h3>
        <p>This is where the definition will go once you search for a word.</p>
      </section>
    </div>
  );
}