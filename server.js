const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/User-data', {
  useNewUrlParser : true,
  useCreateIndex : true
})

const User = mongoose.model('User' , {
  firstName :{
    type : String
  },
  lastName :{
    type : String
  },
  DOB :{
    type : Date
  },
  gender:{
    type : String
  },
  number :{
    type : Number
  }
})

const app = express();
const port = process.env.PORT || 5000;

const publicDirectoryPath = path.join(__dirname,'../gym-site/client/build');

app.use(express.static(publicDirectoryPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath ,"index.html"));
});

app.post('/api' ,(req, res) => {
  const user = new User ({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    DOB : req.body.DOB,
    gender : req.body.gender,
    number : req.body.number
  })

  user.save().then(()=>{
      console.log('Save successfully');
      //res.send('Save successfully');
  }).catch((error)=>{
     console.log(error);
  })
  //console.log(req.body.firstName);
})


app.listen(port, () => console.log(`Listening on port ${port}`));