/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {styles} from './src/styles/style';
import Header from './src/components/common/Header';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './src/reducers/index';
import TaskList from  './src/components/Home/TaskList';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers,compose(applyMiddleware(thunk, logger)))}>
        <View>
          <Header style={styles.container} title={"Home"}/>
          <TaskList />
        </View>
      </Provider>
    );
  }
}

