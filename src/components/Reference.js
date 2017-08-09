import React from 'react';
import {getImageUrl} from "../controller/controller";

const Reference = (props) => (
  <div className="section" id="reference">
    <h2>
      <i className="fa fa-book" />
      参考
    </h2>
    <ul>
      {
        props.linkList.map(link => {
          return (
            <li key={link.url}>
              <a href={link.url}>
                <img
                  src={getImageUrl(link.image)}
                  alt={link.name}
                />
              </a>
            </li>
          )
        })
      }
    </ul>
  </div>
);

Reference.defaultProps = {
  linkList: []
};

export default Reference;
