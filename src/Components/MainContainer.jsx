import React from 'react';
import { Provider } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import MainContentContainer from './MainContentContainer';
import store from '../store';

const MainContainer = () => (
  <Provider store={store}>
    <div>
      <HeaderMenu />
      <MainContentContainer />
    </div>
  </Provider>
);

export default MainContainer;
