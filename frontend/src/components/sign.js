import React,{Component} from 'react';
import './project.css';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';

class signup extends Component{
  constructor(){
    super();
    this.state={
      fname:'',
      email:'',
      pass:'',
      dob:'',
      gender:'',
      success:'',
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
    axios.post(`http://localhost:5000/signup`,this.state)
      .then(response=>{
        this.setState({
          success:response.data,
        })
        console.log(this.state.success);
      })
      .catch(error=>{
        console.log(error);
      })
  }
  render(){
    const {success}=this.state;
    if(success){
      alert(`You have submitted successfully, go back and login`);
      return <Redirect to="/"/>
    }
    else{
    return(
      <div className="container login-div">
        <div className="row signup-row">
          <div className="col-md-3">
          </div>
          <div className="col-md-5 login-col">
            <h1 className="login-head"><b>SIGNUP DETAILS</b></h1>
            <hr className="login-hr"/>
            <form onSubmit={this.submitHandler.bind(this)}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="fname" onChange={this.clickHandler.bind(this)}/>
            </div>
            <div className="form-group">
              <label>Reg No:</label>
              <input type="text" className="form-control" name="email" onChange={this.clickHandler.bind(this)}/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" name="pass" onChange={this.clickHandler.bind(this)}/>
            </div>
            <div className="form-group">
            <label>Date Of Birth:</label>
            <input type="date" className="form-control" name="dob" onChange={this.clickHandler.bind(this)}/>
          </div>
        <div className="form-group">
          <label>Gender:</label>
          <select className="form-control" name="gender" onChange={this.clickHandler.bind(this)}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>
            <div className="form-group">
              <input type="submit" value="Hit It!" className="btn btn-success form-control"/>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
}

export default signup;
