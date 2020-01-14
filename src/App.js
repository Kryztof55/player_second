import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';

import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash.js";
import logo from './logo.svg';


import Header from './components/moleculas/headerRep/headerRep'
import HeaderBuscador from './components/moleculas/headBuscador/headBuscador';
import Player from './components/organismos/player/player';
import Test from './components/atomos/testredux/test'
import './App.css';
import './scss/configurations.scss';

class  App extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: null,
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      playing: false,
      position: 0,
      duration: 0,
    }
    this.playerCheckInterval = null;
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {

      // Set token
      this.setState({ loggedIn: true });
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
      this.setState({
        token: _token
      });
    }
  
  }
  checkForPlayer() {
    const { token } = this.state;
  
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({
        name: "Matt's Spotify Player",
        getOAuthToken: cb => { cb(token); },
      });
     this.createEventHandlers();
  
      // finally, connect!
      this.player.connect();
    }
  }
  createEventHandlers() {
    this.player.on('initialization_error', e => { console.error(e); });
    this.player.on('authentication_error', e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    this.player.on('account_error', e => { console.error(e); });
    this.player.on('playback_error', e => { console.error(e); });

    // Playback status updates
    this.player.on('player_state_changed', state => this.onStateChanged(state));

    // Ready
    this.player.on('ready', async data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      await this.setState({ deviceId: device_id });
      this.transferPlaybackHere();
    });
  }
  onStateChanged(state) {
    // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing
      });
    }
  }
  onPrevClick() {
    this.player.previousTrack();
  }
  
  onPlayClick() {
    this.player.togglePlay();
  }
  
  onNextClick() {
    this.player.nextTrack();
  }
  transferPlaybackHere() {
    const { deviceId, token } = this.state;
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "device_ids": [ deviceId ],
        "play": false,
      }),
    });
  }
  render(){
    const {
      token,
      loggedIn,
      artistName,
      trackName,
      albumName,
      error,
      position,
      duration,
      playing,

    } = this.state;
    return (

      <Provider store={store}>
        <div className="App">
          <Header/>
          

          {error && <p>Error: {error}</p>}
          {!this.state.token && (
                  
                  <a
                    className=""
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                    Iniciar Spotify
                  </a>
          )}
          {this.state.token && (
            <React.Fragment>
              <Test/>
              <HeaderBuscador/>
              <div>
                <p>Artist: {artistName}</p>
                <p>Track: {trackName}</p>
                <p>Album: {albumName}</p>
                <p>
                  <button onClick={() => this.onPrevClick()}>Previous</button>
                  <button onClick={() => this.onPlayClick()}>{playing ? "Pause" : "Play"}</button>
                  <button onClick={() => this.onNextClick()}>Next</button>
                </p> 
              </div>
              <Player/>
          </React.Fragment>
        )}
      </div>
      </Provider>

    );
  }
}

export default App;
