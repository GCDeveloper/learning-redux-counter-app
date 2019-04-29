import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import './App.css';
import Counters from './components/Counter/Counters';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Counters/>
    </Provider>
  );
}

export default App;
