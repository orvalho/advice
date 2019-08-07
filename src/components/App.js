import '../scss/App.scss';

import React from 'react';

import Header from './Header';
import AdviceBox from './AdviceBox';
import AdviceList from './AdviceList';

export default() => {
  return (<div className="app">
    <div className="wrapper">
      <Header/>
      <AdviceBox/>
      <AdviceList/>
    </div>
  </div>);
};
