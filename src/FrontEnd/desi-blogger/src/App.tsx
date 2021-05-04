import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './state';
import { CustomComponentList } from './components/custom-component-list';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

const App = () => {
  initializeIcons();
  return (
    <Provider store={store}>
      <div>
       <CustomComponentList></CustomComponentList>
    </div>
    </Provider>
  );
};


export default App;
