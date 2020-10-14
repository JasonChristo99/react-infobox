import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Infobox from "./Infobox";

function App() {
    const [inputText, setInputText] = useState("");
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <div className="App">
            <h1>Infobox Search Engine</h1>
            <Search
                inputText={inputText}
                setInputText={setInputText}
                setResults={setResults}
                loading={loading}
                setLoading={setLoading}
            />
            <Infobox results={results} loading={loading} />
        </div>
    );
}

export default App;
