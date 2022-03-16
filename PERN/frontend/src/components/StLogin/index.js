import React, { Component } from 'react';
import './styles.css';

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {student_code: '', student_mail:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    if(event.target.name === "student_code"){
      this.setState({student_code: event.target.value});
    }

    if(event.target.name === "student_mail"){
      this.setState({student_mail: event.target.value});
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
        <input type="number" className="Login-input" 
          value={this.state.student_code} name="student_code" onChange={this.handleChange} 
          placeholder="Student code"/><br/>

        <input type="email" className="Login-input"  
          value={this.state.student_mail} name="student_mail" onChange={this.handleChange} 
          placeholder="Student mail" /><br/>

        <input type="submit" className="Login-button" value="Acceder" />
      </form>
      </header>
    </div>
    );
  }
}

export default StudentLogin;
