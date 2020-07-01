var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var request=require('request');
var mysql=require('mysql');

var app=express();

app.use(cors());
app.use(express.json());
app.use(express.static('views'));

app.set('view engine','ejs');

var urlencodedParser=bodyParser.urlencoded({extended:false});
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'online_exam',
});

connection.connect(err=>{
  if(err){
  throw err;
}
else{
  console.log('connected');
}
})

var name="";
var reg="";
var dob="";
var gender="";
var subcode="";

app.get(`/login`,function(req,res){
  res.send(`Yes, It is working...`);
})

app.post('/login',urlencodedParser,function(req,res){
  var item=req.body;
  connection.query("SELECT * FROM student_login WHERE Reg_No='"+item.email+"'and Pass='"+item.pass+"'",(err,result,fields)=>{
    if(err){
      return res.send(err);
    }
    else{
      name=item.fname;
      reg=item.email;
      pass=item.pass;
      return res.send(result);
    }
  })
})

app.post('/signup',urlencodedParser,function(req,res){
  var item=req.body;
  connection.query("INSERT INTO student_login(Name,Reg_No,Pass,DOB,Gender) VALUES('"+item.fname+"','"+item.email+"','"+item.pass+"','"+item.dob+"','"+item.gender+"')",(err,result)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send('true');
    }
  });
})

app.post('/home',urlencodedParser,function(req,res){
  connection.query("SELECT * FROM student_login WHERE Reg_No='"+reg+"'and Pass='"+pass+"'",function(err,result,fields){
  res.send(result);
})
})

app.post('/marks',urlencodedParser,function(req,res){
  connection.query("SELECT * FROM exam_details WHERE Student_ID='"+reg+"'",function(err,result,fields){
  res.send(result);
})
})

app.post('/exam_paper',urlencodedParser,(req,res)=>{
  var item=req.body;
  connection.query("SELECT * FROM exam_papers WHERE Programme='"+item.pgm+"' and Branch='"+item.branch+"' and Year='"+item.year+"'",(err,result,fields)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send(result);
    }
  })
})

app.post('/logout',urlencodedParser,function(req,res){
  name='';
  reg='';
  const log=true;
  res.send({log});
})

app.post('/sub_paper',(req,res)=>{
  var su=req.body;
  var scode=su.sc;
  connection.query(`SELECT * FROM ${scode}`,(err,result,fields)=>{
    if(err){
      return res.send(err)
    }
    else{
      return res.send(result);
    }
  })
})

app.post('/sub_paper_question',(req,res)=>{
  var su=req.body;
  var scode=su.sc;
  var question=su.que;
  connection.query("SELECT * FROM "+scode+" WHERE QID='"+question+"'",(err,result,fields)=>{
    if(err){
      return res.send(err)
    }
    else{
      return res.send(result);
    }
  })
})

app.post('/update',urlencodedParser,function(req,res){
  var item=req.body;
  connection.query("UPDATE student_login SET HA='"+item.ha+"', PA='"+item.pa+"', BG='"+item.bg+"' WHERE Name='"+name+"'",function(err,result,fields){
    if(err){
      return res.send(err);
    }
    else{
      return res.send('Uploaded');
    }
  })
})

app.post('/exam_paper_2',urlencodedParser,function(req,res){
  var item=req.body;
  connection.query("SELECT * FROM exam_papers WHERE Subject_Code='"+item.sc+"'",(err,result,fields)=>{
    if(err){
    return res.send(err);
  }
    else{
      return res.send(result);
    }
  });
})

app.post('/option',(req,res)=>{
  var item=req.body;
  connection.query("UPDATE response SET Q"+item.que+"='"+item.option+"' WHERE Name='"+name+"' AND Reg_No='"+reg+"' AND Subject_Code='"+item.sub+"'",(err,result,field)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send("Option Lodged");
    }
  })
})

app.post('/test_register',urlencodedParser,(req,res)=>{
  var item=req.body;
  subcode=item.sc;
  connection.query("INSERT INTO response(Subject_Code,Reg_No,Name) VALUES('"+subcode+"','"+reg+"','"+name+"')",(err,result)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send('Inserted Successfully');
    }
  })
})

app.post('/answers',urlencodedParser,(req,res)=>{
  var item=req.body;
  connection.query("SELECT * FROM response WHERE Subject_Code='"+subcode+"' AND Reg_No='"+reg+"'",(err,result,field)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send(result);
    }
  })
})

app.post('/answers2',urlencodedParser,(req,res)=>{
  var item=req.body;
  connection.query("SELECT * FROM exam_papers WHERE Subject_Code='"+subcode+"'",(err,result,field)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send(result);
    }
  })
})

app.post('/answers3',urlencodedParser,(req,res)=>{
  var item=req.body;
  connection.query(`SELECT * FROM ${subcode}_ans`,(err,result,field)=>{
    if(err){
      return res.send(err);
    }
    else{
      return res.send(result);
    }
  })
})

app.listen(5000);
