import React,{Component} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';

class logout extends Component{
  constructor(){
    super();
    this.state={
      log:false,
    }
  }
  componentDidMount(){
    axios.post('http://localhost:5000/logout')
    .then(response=>{
      this.setState({
        log:response.data.log,
      })
      console.log(response.data.log);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  render(){
    var {log}=this.state;
    if(log){
      return <Redirect to="/"/>
    }
    else{
      return <p>Please Wait we are exiting...</p>
    }
  }
}

export default logout;
