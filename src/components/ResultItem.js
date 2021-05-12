import React from 'react'

const ResultItem = ({ result, onResultSelect }) => {
    return (
        <div onClick={() => onResultSelect(result)} className="searchResultContainer">
            <img className="searchResultsThumbnail" src={result.snippet.thumbnails.high.url} alt=""></img>
            <div className="d-flex flex-column my-auto px-3">
                <h2 className="searchResultsTitle">{result.snippet.title}</h2>
            </div>
        </div>
    )
}

export default ResultItem;  