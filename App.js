import React from 'react';
import { View, Text } from 'react-native';
import MainNavigator from './components/Navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/lib/storage'
import { setLocalNotification } from './utils/helpers'

const REDUCER_KEY = 'Flashcards:reducer'

const config = {
  key: REDUCER_KEY,
  storage
}

const reducer = persistReducer(config, reducers)
const store = createStore(reducer)
const persistor = persistStore(store)

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Text>Loading...</Text>}
          persistor={persistor}
        >
          <View style={{flex: 1}}>
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
