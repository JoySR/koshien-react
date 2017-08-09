import React from 'react';

const Footer = (props) => (
  <div className="footer">
    <p>
      &copy;&nbsp;
      <a href={props.url}>{props.author}</a>
      {props.startDate} - {props.endDate}
    </p>
  </div>
);

Footer.defaultPropTypes = {
  url: 'https://joysr.com',
  author: 'Hanna',
  startDate: '',
  endDate: ''
};

export default Footer;
