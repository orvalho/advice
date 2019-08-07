import '../scss/Header.scss';

import React from 'react';

import GoogleAuth from './GoogleAuth';

export default() => {
  return (<div className="header">
    <div className="heading">take my advice<br/>
      <span className="subheading">i don't use it anyway</span>
    </div>
    <GoogleAuth/>
  </div>);
};
