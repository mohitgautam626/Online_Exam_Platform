import React,{Component} from 'react';
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import './project.css';
import QueryString from 'query-string';
import Topic from './topic_exam';
import QCode from './q_code';
import QBar from './question_bar';

class Home extends Component{
  constructor(){
    super()
    this.state={
      questions:[],
      arr:[],
      detail:[],
      option:'',
      response:0,
      exam:[],
    }
  }

  async postData1(){
    const res=await axios.post(`http://localhost:5000/home`,this.state);
    return await res;
  }

  componentDidMount(){
    this.postData1().then(response=>{
        this.setState({
          detail:response.data,
        })
      })

      const value=QueryString.parse(this.props.location.search);
      const sub_code=value.Subject_Code;
      const q=value.que;

      var sub={
        sc:sub_code,
        que:q,
      }

      axios.post(`http://localhost:5000/exam_paper_2`,sub)
        .then(response=>{
        this.setState({
          exam:response.data,
        })
        console.log(`We Are receiving:${response.data}`);
      })
      .catch(error=>{
        console.log(error);
      })

      axios.post('http://localhost:5000/sub_paper',sub)
      .then(response=>{
        this.setState({
          arr:response.data,
        })
      })

      axios.post('http://localhost:5000/sub_paper_question',sub)
      .then(response=>{
        this.setState({
          questions:response.data,
        })
      })
  }

  clickOption(val){
    this.setState({
      option:val,
    })
  }

  async postoption(val){
    const res=await axios.post(`http://localhost:5000/option`,val);
    return await res;
  }

  nextQuestion(sub,q){
    const {option}=this.state;
    var opt={
      sub:sub,
      option:option,
      que:q,
    }
    console.log(opt);
    this.postoption(opt).then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
    var que=parseInt(q,10);
    que+=1;
    if(que<=3){
    window.location=`/qpaper?Subject_Code=${sub}&que=${que}`;
    }
    else {
      alert(`Total questions limit exceded`);
      window.location=`/qpaper?Subject_Code=${sub}&que=${que-1}`;
    }
  }

  skipnextQuestion(sub,q){
    var que=parseInt(q,10);
    que+=1;
    if(que<=3){
    window.location=`/qpaper?Subject_Code=${sub}&que=${que}`;
    }
    else {
      alert(`Total questions limit exceded`);
      window.location=`/qpaper?Subject_Code=${sub}&que=${que-1}`;
    }
  }

  prevQuestion(sub,q){
    if(q>0){
    window.location=`/qpaper?Subject_Code=${sub}&que=${q}`;
    }
    else {
      alert(`This is the initial question`);
      window.location=`/qpaper?Subject_Code=${sub}&que=${q+1}`;
    }
  }

  render(){
    const {arr,detail,questions,exam}=this.state;
    const value=QueryString.parse(this.props.location.search);
    const sub_code=value.Subject_Code;
    const q=value.que;

    var name,reg;
    detail.map((val,index)=>{
        name=val.Name;
        reg=val.Reg_No;
    })

    return(
      <div className="container-fluid qpaper-contain">
      <div className="row">
      <div className="col-xs-2 sidenav">
      <div className="qpaper-head">
      <h3>Encountered:30</h3>
      </div>
      <div className="qpaper-head">
      <h3>Answered:20</h3>
      </div>
      <div className="qpaper-head">
      <h3>Unanswered:10</h3>
      </div>
      <div className="que-div">
      <QBar name={arr} code={sub_code} que={q}/>
      </div>
      </div>
      <div className="col-xs-10">
      <div className="row back2">
      <div className="time1 col-xs-6">
      <b>Topic:<Topic name={exam}/></b>
      </div>
      <div className="col-xs-3">
      </div>
      <div className=" time4 col-xs-3">
      <div className="time2">
      Time Remaining:
      </div>
      <div className="time3">
      <b>55:00</b>
      </div>
      </div>
      </div>
      <div className="row back">
      <div className="time1 col-xs-6">
      <QCode name={questions}/>
      </div>
      </div>
      {
        questions.map((item,index)=>{
          const a='a';
          const b='b';
          const c='c';
          const d='d';

          return(
            <div className="qcontent" key={index}>
            <h4>Q:{item.Ques}</h4>
            <input type="radio" name="a" onClick={()=>this.clickOption(a)} value={item.Opt_A}/>{item.Opt_A}<br/>
            <input type="radio" name="a" onClick={()=>this.clickOption(b)} value={item.Opt_B}/>{item.Opt_B}<br/>
            <input type="radio" name="a" onClick={()=>this.clickOption(c)} value={item.Opt_C}/>{item.Opt_C}<br/>
            <input type="radio" name="a" onClick={()=>this.clickOption(d)} value={item.Opt_D}/>{item.Opt_D}<br/>
            </div>
          );
        })
      }
      <div className="q-footer row">
      <div className="col-xs-8">
      </div>
      <div className="q-buttons col-xs-3">
      <div className="col-xs-6">
      <Link onClick={()=>{this.skipnextQuestion(sub_code,q)}}><i className="fa fa-forward">Skip & Next</i></Link>
      </div>
      <div className="col-xs-3">
      <Link onClick={()=>{this.nextQuestion(sub_code,q)}}><i className="fa fa-chevron-circle-right">Next</i></Link>
      </div>
      <div className="col-xs-3">
      <Link onClick={()=>{this.prevQuestion(sub_code,q-1)}}><i className="fa fa-chevron-circle-left">Prev</i></Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Home;
