import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './state';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Desi Blogger
    </div>
    </Provider>
  );
};


export default App;
