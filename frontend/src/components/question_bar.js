import React from 'react';
import {Redirect,Link} from 'react-router-dom';

class QBar extends React.Component{
  clickQ(sub,index){
    window.location=`/qpaper?Subject_Code=${sub}&que=${index+1}`;
  }
  render(props){
    var arr=this.props.name;
    var sub_code=this.props.code;
    return(
      <React.Fragment>
      {
        arr.map((item,index)=>{
          const i=index;
          return(
            <div className="que" key={index}>
            <Link onClick={()=>{this.clickQ(sub_code,i)}}>Question-{index+1}</Link>
            </div>
          );
        })
      }
      </React.Fragment>
    );
  }
}

export default QBar;
