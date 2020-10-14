import React, { useState, useEffect } from "react";

const Infobox = ({ results, loading }) => {
    
    return (
        <div>
            <h2>InfoBox of Results</h2>
            <br />
            {loading ? (
                <img src="http://bullandgoatbrewery.com/wp-content/uploads/2018/08/spinner.gif" />
            ) : (
                <>
                    <h1>Heading: {results.Heading}</h1>
                    <h1>Abstract Text: {results.AbstractText}</h1>
                </>
            )}
        </div>
    );
};

export default Infobox;
