import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addAdvice} from '../actions';

class AdviceBox extends Component {
  state = {
    input: ''
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.addAdvice(this.state.input.trim());
      this.setState({input: ''});
    }
  };

  render() {
    if (this.props.auth) {
      return (<form className="advice-box ui form" onSubmit={this.onSubmit}>
        <div className="field"><input onChange={e => this.setState({input: e.target.value})} value={this.state.input} placeholder="Enter an advice"/></div>
      </form>);
    }
    return null;
  }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {addAdvice})(AdviceBox);
