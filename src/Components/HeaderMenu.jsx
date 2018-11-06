import React from 'react';
import './HeaderMenu.css';

const marvelLogoUrl = 'http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg';

const HeaderMenu = () => (
  <div className="header-container">
    <img src={marvelLogoUrl} alt="marvel" className="header-logo" />
  </div>
);

export default HeaderMenu;
