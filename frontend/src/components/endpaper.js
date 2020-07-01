import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import QueryString from'query-string';
import './project.css';
import axios from 'axios';

class Endpaper extends Component{
  constructor(){
    super();
    this.state={
      checked:0,
      results:[],
      details:[],
      answers:[],
      marks:0,
    }
  }
  async postData(datas){
    const res=await axios.post('http://localhost:5000/answers',datas);
    return await res;
  }
  async postData2(datas){
    const res=await axios.post('http://localhost:5000/answers2',datas);
    return await res;
  }
  async postData3(datas){
    const res=await axios.post('http://localhost:5000/answers3',datas);
    return await res;
  }
  componentDidMount(){
    var value=QueryString.parse(this.props.location.search);
    var subcode=value.Sub_Code;
    var datas={
      subcode:subcode,
    }

    this.postData(datas).then(res=>{
      this.setState({
        results:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

    this.postData2(datas).then(res=>{
      this.setState({
        details:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

    this.postData3(datas).then(res=>{
      this.setState({
        answers:res.data,
      })
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })

    const {results,answers}=this.state;
    results.map((val1,index1)=>{
      answers.map((val2,index2)=>{

      })
    })
  }
  render(){
    const {results,details,answers,marks}=this.state;
    return(
      <>
      <div className="container-fluid">
      <div className="row">
      <div className="col-xs-3">
      </div>
      <div className="col-xs-6 end-div">
      <h1 className="end-h1"><b>Test Result</b></h1>
      <hr className="mark-hr"/>
      <table className="table table-striped table-bordered table-hover">
      <tbody>
      {
        results.map((item,index)=>{
          return(
      <React.Fragment key={index}>
      <tr>
      <td className="end-td2"><b>Name:</b></td>
      <td className="end-td2">{item.Name}</td>
      </tr>
      <tr>
      <td className="end-td2"><b>Reg No:</b></td>
      <td className="end-td2">{item.Reg_No}</td>
      </tr>
      </React.Fragment>
      );
      })
      }
      {
        details.map((item,index)=>{
          return(
            <React.Fragment key={index}>
            <tr>
            <td className="end-td2"><b>Subject Name:</b></td>
            <td className="end-td2">{item.Subject_Name}</td>
            </tr>
            <tr>
            <td className="end-td2"><b>Branch:</b></td>
            <td className="end-td2">{item.Branch}</td>
            </tr>
            </React.Fragment>
          );
        })
      }
      <tr>
      <td className="end-td2"><b>Marks Obtained:</b></td>
      <td className="end-td2">24</td>
      </tr>
      <tr>
      <td className="end-td2"><b>Out Of:</b></td>
      <td className="end-td2">30</td>
      </tr>
      </tbody>
      </table>
      <div className="row">
      <div className="col-xs-4">
      </div>
      <div className="col-xs-4">
      </div>
      <div className="col-xs-4">
      <Link to={`/home`} className="end-td2"><i className="fa fa-forward"></i>Back to home</Link><br/><br/>
      </div>
      </div>
      </div>
      </div>
      </div>
      <br/>
      </>
    );
  }
}

export default Endpaper;
