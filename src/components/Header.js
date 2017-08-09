import React from 'react';
import config from "../config/config";

const Header = (props) => (
  <div className="header">
    <div className="header-wrap">
      <h1 id="site-title">{config.siteName}</h1>
      <ul className="nav">
        <li key="game"><a href="#game"><i className="fa fa-calendar" />日程</a></li>
        <li key="reference"><a href="#reference"><i className="fa fa-book" />参考</a></li>
      </ul>
      <div className="toggle-nav hide"><i className="fa fa-navicon" /></div>
    </div>
  </div>
);

export default Header;
