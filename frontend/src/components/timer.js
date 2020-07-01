import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Timer extends Component{
  constructor(props){
    super(props)
    this.state={
      hour:0,
      min:0,
      sec:0,
      days:0,
    }
  }
  changeTime(){
    var t=Date.parse('2020-06-30T09:00:00.000Z')-Date.parse(new Date());
    var s=Math.floor((t/1000)%60);
    var m=Math.floor((t/(1000*60))%60);
    var h=Math.floor((t/(1000*60*60))%24);
    var d=Math.floor(t/(1000*60*60*24));
    console.log(`sec:${s}, min:${m}, hour:${h}, days:${d}`);
    this.setState({
      sec:s,
      min:m,
      hour:h,
      days:d,
    })
  }
  componentDidMount(){
    this.changeTime();
    setInterval(()=>{this.changeTime()},1000);
  }
  render(props){
    const {hour,min,sec}=this.state;
    const {subcode}=this.props;
    if(hour<0 && min<0 && sec<0){
      return <Redirect to={`/endpaper?Subject_Code=${subcode}`}/>
    }
    else{
    return(
      <React.Fragment>
      {min>9?min:"0"+min}:{sec>9?sec:"0"+sec}
      </React.Fragment>
    );
  }
}
}
export default Timer;
