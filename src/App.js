import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Infobox from "./Infobox";

function App() {
    const [inputText, setInputText] = useState("");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);
    const [queryState, setQueryState] = useState("nothing");

    return (
        <div className="App">
            <h1>The Search Engine</h1>
            <Search
                inputText={inputText}
                setInputText={setInputText}
                query={query}
                setQuery={setQuery}
                setResults={setResults}
                loading={loading}
                setLoading={setLoading}
                setQueryState={setQueryState}
            />
            <Infobox
                results={results}
                loading={loading}
                queryState={queryState}
                setQuery={setQuery}
            />
        </div>
    );
}

export default App;
