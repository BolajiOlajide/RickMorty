import React, { Component } from 'react';
import{ connect } from 'react-redux';

// actions
import login from '../actions/auth.action';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login = (event) => {
    console.log(this.props);
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  onChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if (this.props.auth.value) {
      this.props.history.push('/characters');
    }
    return (
      <div className="container">
        <div className="row">
    		<div className="span12">
    			<form className="form-horizontal">
            <fieldset>
    			    <div id="legend">
    			      <legend className="">Login</legend>
    			    </div>
    			    <div className="control-group">
    			      <label className="control-label"  htmlFor="username">Username</label>
    			      <div className="controls">
    			        <input type="text" id="username" name="username" placeholder="" className="input-xlarge" onChange={this.onChangeText} />
    			      </div>
    			    </div>
    			    <div className="control-group">
    			      <label className="control-label" htmlFor="password">Password</label>
    			      <div className="controls">
    			        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" onChange={this.onChangeText} />
    			      </div>
    			    </div>
    			    <div className="control-group">
    			      <div className="controls">
    			        <button className="btn btn-success" onClick={this.login}>Login</button>
    			      </div>
    			    </div>
    			  </fieldset>
    			</form>
    		</div>
    	</div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
