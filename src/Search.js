import React, { useEffect } from "react";

const Search = ({ inputText, setInputText, setResults }) => {

    const EXAMPLE_CALL =
        "https://api.duckduckgo.com/?q=TERM&format=json&pretty=1&no_redirect=1&skip_disambig=1&pretty=1&no_html=1";


    const fetchResults = async (query) => {
        let results = await fetch(EXAMPLE_CALL.replace("TERM", query));
        let resultsObj = await results.json();
        console.log(resultsObj);
        setResults(resultsObj);
    };

    const updateInputText = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitQuery = (e) => {
        e.preventDefault();
        console.log("Submit");
        fetchResults(inputText);
        setInputText("");
    };

    return (
        <div>
            <h1>Search</h1>
            <form>
                <input
                    type="text"
                    onChange={updateInputText}
                    value={inputText}
                />
                <button onClick={submitQuery} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Search;
