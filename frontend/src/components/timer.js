import React,{Component} from 'react';

class Timer extends Component{
  constructor(){
    super()
    this.state={
      hour:0,
      min:0,
      sec:0,
    }
  }
  render(){
    const {hour,min,sec}=this.state;
    return(
      <React.Fragment>
      {hour}:{min}:{sec}
      </React.Fragment>
    );
  }
}

export default Timer;
