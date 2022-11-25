import React, { useEffect } from 'react';

import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import Routes from './src/Routes';

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
const App = () => {

  useEffect(() => {
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <Routes />

      </SafeAreaView>

    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
