import React, { Component } from 'react';
require('./renderer.js');
// import {createStackNavigator, createAppContainer} from 'react-navigation';

let temp = null;

fetch('https://oauth.vk.com/authorize?client_id=6880798&display=page&redirect_uri=https://oauth.vk.com/blank.html&display=page&scope=messages,offline&response_type=token&v=5.92')
  .then((res) => {
    temp = res;
  })

 /*  const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  }); */
class App extends Component {
  render() {
    return (
      <div class="dialogues">
        <ul>
          <p>{temp}</p>
        </ul>
      </div>
    )
  }
}

export default App
