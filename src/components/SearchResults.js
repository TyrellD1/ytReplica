import React from 'react';
import ResultItem from './ResultItem'

const SearchResults = ({ results, onResultSelect }) => {
    const resultsList = results.map((result) => {
        return <ResultItem onResultSelect={onResultSelect} result={result} key={result.id.videoId} />;
    });
    
    return(
        <div className="searchResultsContainer">
            {resultsList}
        </div>
    )
}

export default SearchResults;