import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Counters from './components/Counter/Counters';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Counters/>
    </Provider>
  );
}

export default App;
