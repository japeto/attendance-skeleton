import React, { Component } from 'react';
import './styles.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {user_email: '', user_pass:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    if(event.target.name === "user_email"){
      this.setState({user_email: event.target.value});
    }

    if(event.target.name === "user_pass"){
      this.setState({user_pass: event.target.value});
    }
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  render() {
    return (
    <div className="Login">
      <header className="Login-body">
      <form onSubmit={this.handleSubmit}>
        <input type="email" className="Login-input" 
          value={this.state.user_email} name="user_email" onChange={this.handleChange} 
          placeholder="User email"/><br/>

        <input type="password" className="Login-input"  
          value={this.state.user_pass} name="user_pass" onChange={this.handleChange} 
          placeholder="User password" /><br/>

        <input type="submit" className="Login-button" value="Acceder" />
      </form>
      </header>
    </div>
    );
  }
}

export default UserLogin;
