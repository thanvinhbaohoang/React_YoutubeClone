import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  // here's what our constructor would look like
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      videos: [],
      // eslint-disable-next-line react/no-unused-state
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
    search('pixar');
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <VideoList videos={this.state.videos} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
