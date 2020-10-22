import React, { useEffect } from "react";
import "./Search.css";

const Search = ({
    inputText,
    setInputText,
    query,
    setQuery,
    setResults,
    loading,
    setLoading,
    setQueryState,
}) => {
    const EXAMPLE_CALL =
        "https://api.duckduckgo.com/?q=TERM&format=json&no_redirect=1&skip_disambig=1&pretty=1&no_html=1";

    const fetchResults = async (query) => {
        try {
            let results = await fetch(EXAMPLE_CALL.replace("TERM", query));
            let resultsObj = await results.json();
            console.log(resultsObj);
            setResults(resultsObj);
            if (resultsObj.Abstract == "") {
                setQueryState("noanswer");
            } else {
                setQueryState("ok");
            }
        } catch (err) {
            console.log("An error occured");
            setQueryState("error");
        }
    };

    useEffect(() => {
        console.log("use effect new query : " + query);
        if (inputText.startsWith("Redir:")) {
            console.log("redir");
            fetchResults(query.replace("Redir:", ""));
            setInputText("");
        } else if (query !== "") {
            console.log("searching");
            fetchResults(query);
            setInputText("");
        }
    }, [query]);

    const updateInputText = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitQuery = (e) => {
        e.preventDefault();
        console.log("Submit");
        setQuery(inputText);
    };

    return (
        <div>
            {/* <h3>Enter a search term:</h3> */}
            <form>
                <input
                    type="text"
                    placeholder="Enter a search term..."
                    onChange={updateInputText}
                    value={inputText}
                />
                <button type="submit" onClick={submitQuery}>
                    <i className="fa fa-search"></i>
                </button>
                {/* <button onClick={submitQuery} type="submit">Submit</button> */}
            </form>
        </div>
    );
};

export default Search;
