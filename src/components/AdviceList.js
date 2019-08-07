import React from 'react';
import {connect} from 'react-redux';

const AdviceList = props => {
  return (<div className="advice-list ui celled list">
    {props.advice.map(txt => <div className="item" key={Math.random()}>{txt}</div>)}
  </div>);
};

const mapStateToProps = state => ({advice: state.advice});

export default connect(mapStateToProps)(AdviceList);
