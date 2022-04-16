import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';

youtubeSearch('pixar').then((videos) => {
  console.log(videos);
});

// eslint-disable-next-line no-undef
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
const root = createRoot(document.getElementById('main'));
root.render(<App />);
