import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search-bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  // here's what our constructor would look like
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    const search = (text) => {
      youtubeSearch(text).then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
    };
    // in App constructor before you use this.search
    this.search = debounce(search, 500);
    search('pixar');
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
