import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
