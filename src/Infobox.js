import React, { useState, useEffect } from "react";
import "./Infobox.css";

const Infobox = ({ results, loading, queryState, setQuery }) => {
    return (
        <div className={queryState !== "nothing" ? "infobox" : ""}>
            {/* <h4>Results</h4> */}
            {/* <br /> */}
            {loading ? (
                <img src="http://bullandgoatbrewery.com/wp-content/uploads/2018/08/spinner.gif" />
            ) : (
                <>
                    {queryState === "ok" && (
                        <h2 className="topic">
                            {/* Topic:  */}
                            {results.Heading}
                        </h2>
                    )}
                    {queryState === "ok" && results.Image !== undefined && (
                        <div>
                            <img
                                className="topic-img"
                                src={results.Image}
                            ></img>
                        </div>
                    )}
                    {queryState === "ok" && (
                        <div className="caption">
                            Source: {results.AbstractSource}
                        </div>
                    )}
                    {queryState === "ok" && (
                        <p className="infobox-desc">
                            {/* Description:  */}
                            {results.AbstractText}
                        </p>
                    )}
                    {queryState === "error" && (
                        <p className="infobox-error">
                            An error occured... Please try again.
                        </p>
                    )}
                    {queryState === "noanswer" && results.Type !== "D" && (
                        <p className="infobox-error">
                            Couldn't find an answer for that... Please try
                            something else.
                        </p>
                    )}
                    {queryState === "noanswer" && results.Type === "D" && (
                        <p className="infobox-error">
                            A disambiguation has occured... Please try the
                            related topics below.
                        </p>
                    )}
                    {queryState !== "error" &&
                        results.RelatedTopics !== undefined &&
                        results.RelatedTopics.length > 0 && (
                            <div className="caption related">
                                <p>Most related topic:</p>
                                <a
                                    // href={results.RelatedTopics[0].FirstURL}
                                    href="javascript:void(0)"
                                    // target="blank"
                                    onClick={(e) =>
                                        setQuery(
                                            // "Redir:" +
                                            results.RelatedTopics[0].Text.split(
                                                " "
                                            )[0] +
                                                " " +
                                                results.RelatedTopics[0].Text.split(
                                                    " "
                                                )[1]
                                        )
                                    }
                                >
                                    {results.RelatedTopics[0].Icon !==
                                        undefined &&
                                        results.RelatedTopics[0].Icon.URL !==
                                            "" && (
                                            <img
                                                className="related-img"
                                                src={
                                                    results.RelatedTopics[0]
                                                        .Icon.URL
                                                }
                                            ></img>
                                        )}
                                    {results.RelatedTopics[0].Text.length >
                                        15 && (
                                        <p>
                                            {results.RelatedTopics[0].Text.substring(
                                                0,
                                                15
                                            )}
                                            ...
                                        </p>
                                    )}
                                    {results.RelatedTopics[0].Text.length <=
                                        15 && (
                                        <p>{results.RelatedTopics[0].Text}</p>
                                    )}
                                </a>
                            </div>
                        )}
                </>
            )}
        </div>
    );
};

export default Infobox;
