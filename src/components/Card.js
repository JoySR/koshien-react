import React from 'react';

const Card = (props) => (
  <div className="hide" id="card-bg">
    <div className="card-cover" />
    <div className="single-card">
      <div className="card-header clearfix">
        <h3 id="school-name"><i className="fa fa-university" /></h3>
        <span id="school-prefecture" />
        <p id="school-count"><i className="fa fa-flag" /></p>
        <span id="close"><i className="fa fa-close" /></span>
      </div>
      <table id="card-content">
      </table>
    </div>
  </div>
);

export default Card;
