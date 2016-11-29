import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app'

export default class sample extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('sample', () => sample);
