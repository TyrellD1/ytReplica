import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import VideoItem from './components/VideoItem'
import youtube from './apis/youtube'

class App extends React.Component {
    state = { results: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('tony robbins')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('search', {
            params: {
                q: term
            }
        })
        
        this.setState({ results: response.data.items, selectedVideo: response.data.items[0] })
    }

    onResultSelect = (result => {
        this.setState({ selectedVideo: result });
    })

    render() {
        return (
            <div className="masterContainer d-flex flex-column">
                    <Navbar
                        onFormSubmit={this.onTermSubmit}
                    />
                <div className="d-flex flex-row">
                    <VideoItem 
                        video={this.state.selectedVideo}
                    />
                    <SearchResults 
                        results={this.state.results}   
                        onResultSelect={this.onResultSelect} 
                    />
                </div>
            </div>
        )
    }

    componentDidMount() {
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));

