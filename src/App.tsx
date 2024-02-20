import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks'; 

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0)
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  }
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks
  });
  console.log(tracks);
  const currentTrack = tracks ? tracks[trackIndex]?.track : null;
  const AlbumCover = ({ track }) =>  {
    const src = track.album.images[0].url;
    return (
        <img src={src} style={{ width: 400, height: 400 }} />
    );
  }
  const TrackURL = ({ track }) => {
    const src = track.external_urls[0].spotify;
    return (
      <audio src={src} autoPlay controls />
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue au BDS</h1>
      </header>
      <div className="App-images">
      <AlbumCover track={currentTrack} />
      </div>
      <div className="App-buttons"></div>
      <TrackURL track={currentTrack} />
      <button onClick={goToNextTrack}>
        Next track
      </button>
      <p>{tracks === undefined ? 'None' : tracks.length}</p>
      <p>{currentTrack?.name}</p>
      <p>{currentTrack?.artists[0]?.name}</p>
    </div>
  );
};

export default App;
