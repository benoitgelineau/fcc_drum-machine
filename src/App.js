import React, { Component } from 'react';
import { sounds } from './sounds';
import { Buttons } from './components/Buttons';
import { Power } from './components/Power';
import { Display } from './components/Display';
import { Volume } from './components/Volume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
      text: '',
      volume: 50
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeypress);
  }

  handleKeyPress(e) {
    const key = e.key.toUpperCase(),
          keys = Object.keys(sounds),
          sound = document.getElementById(key),
          volume = this.state.volume / 100;

    if (this.state.check && keys.indexOf(key) !== -1) {

      sound.parentNode.style = 'background-color: #F80; color: white';
      setTimeout(() => sound.parentNode.style = 'background-color: inherit; color: inherit', 200);

      sound.volume = volume;
      sound.currentTime = 0;
      sound.play();

      this.setState({
        text: sound.parentNode.id
      });
    }
  }

  handleClick(e) {
    const button = e.target,
          sound = button.firstElementChild;

    button.style = 'background-color: #F80; color: white';
    setTimeout(() => button.style = 'background-color: inherit; color: inherit', 200);

    sound.volume = this.state.volume / 100;
    sound.currentTime = 0;
    sound.play();

    this.setState({
      text: e.target.id
    });
  }

  toggleCheck() {
    this.setState(prevState => ({
      text: '',
      check: !prevState.check
    }));
  }

  handleVolume() {
    const level = document.getElementById('volume').value;

    this.setState({
      volume: level
    });
  }

  render() {
    const { check } = this.state;
    return (
      <div id="drum-machine">
        <Buttons onClick={this.handleClick} isChecked={check}/>
        <div id="settings">
          <Power onChange={this.toggleCheck} checked={check}/>
          <Display text={this.state.text} isChecked={check}/>
          <Volume value={this.state.volume} onChange={this.handleVolume}/>
        </div>
      </div>
    );
  }
}

export default App;
