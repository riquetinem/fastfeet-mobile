import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';

import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import App from './App';

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
