import React,{Component} from 'react';
import './project.css';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

class login extends Component{
  constructor(){
    super();
    this.state={
      fname:'',
      email:'',
      pass:'',
      fname_err:'',
      email_err:'',
      pass_err:'',
      success:0,
    }
  }
  clickHandler(event){
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
  submitHandler(event){
    event.preventDefault();
    console.log(this.state);
    const {email,pass,fname}=this.state;
    if(email===''){
      this.setState({
        email_err:'*fill Email Address',
      })
    }
    if(pass===''){
      this.setState({
        pass_err:'*fill Password',
      })
    }
    if(fname===''){
      this.setState({
        fname_err:'*fill ur Name',
      })
    }
    axios.post(`http://localhost:5000/login`,this.state)
      .then(response=>{
        console.log(response.data);
        this.setState({
          success:response.data.length,
        })
        console.log(this.state.success);
        if(!this.state.success){
          alert(`Invalid Email and Password`);
        }
      })
      .catch(error=>{
        console.log(error);
      })
  }
  render(){
    const {success,email_err,pass_err,fname_err}=this.state;
    if(success){
      return <Redirect to="/home"/>
    }
    else{
    return(
      <div className="container login-div">
        <div className="row login-row">
          <div className="col-md-3">
          </div>
          <div className="col-md-5 login-col">
            <h1 className="login-head"><b>LOGIN DETAILS</b></h1>
            <hr className="login-hr"/>
            <form onSubmit={this.submitHandler.bind(this)}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="fname" onChange={this.clickHandler.bind(this)}/>
              <span className="text-danger">{fname_err}</span>
            </div>
            <div className="form-group">
              <label>Reg. No:</label>
              <input type="text" className="form-control" name="email" onChange={this.clickHandler.bind(this)}/>
              <span className="text-danger">{email_err}</span>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" name="pass" onChange={this.clickHandler.bind(this)}/>
              <span className="text-danger">{pass_err}</span>
            </div>
            <div className="form-group">
              <input type="submit" value="Hit It!" className="btn btn-success form-control"/>
            </div>
            <hr className="hr-end"/>
            <p>Don't you have account?
            <Link to="/signup" className="a-login">Register Now</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
}

export default login;
