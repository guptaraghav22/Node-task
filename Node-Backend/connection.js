const mongoose = require('mongoose');
const express = require("express")
const cors = require('cors');
const mongoDBURL = 'mongodb://127.0.0.1/Assignment'
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000', };

app.use(cors(corsOptions));

const bodyparser = require('body-parser')
app.use(cors());
app.use(bodyparser.json())

const userSchema = new mongoose.Schema({

  variable1: String,
  timestamp1: Date,
  variable2: String,
  timestamp2: Date,
  variable3: String,
  timestamp3: Date,
  variable4: String,
  timestamp4: Date,
  variable5: String,
  timestamp5: Date,
  variable6: String,
  timestamp6: Date,
  variable7: String,
  timestamp7: Date,
  variable8: String,
  timestamp8: Date,
  variable9: String,
  timestamp9: Date,
  variable10: String,
  timestamp10: Date,

})

const User = mongoose.model('NodeAssignment', userSchema);



const newUser = new User({
  variable10: "String",
  timestamp10: "Date",
});

const TimeSeries = mongoose.model('TimeSeries', userSchema);

app.post('/api/data', async (req, res) => {
  try {
    const data = req.body;
    let arr = data.headers
    console.log(arr.data)
    const newData = new TimeSeries(arr.data);
    
    const newData1 = new TimeSeries({
      variable1: arr.data[0].variable,
      timestamp1: arr.data[0].timestamp,
      variable2: arr.data[1].variable,
      timestamp2: arr.data[1].timestamp,
      variable3: arr.data[2].variable,
      timestamp3: arr.data[2].timestamp,
      variable4: arr.data[3].variable,
      timestamp4: arr.data[3].timestamp,
      variable5: arr.data[4].variable,
      timestamp5: arr.data[4].timestamp,
      variable6: arr.data[5].variable,
      timestamp6: arr.data[5].timestamp,
      variable7: arr.data[6].variable,
      timestamp7: arr.data[6].timestamp,
      variable8: arr.data[7].variable,
      timestamp8: arr.data[7].timestamp,
      variable9: arr.data[8].variable,
      timestamp9: arr.data[8].timestamp,
      variable10: arr.data[9].variable,
      timestamp10: arr.data[9].timestamp,
    });
    newData1.save();

    res.json({ message: 'Data recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});


app.listen(2000,()=>{console.log("Node js server running on 2000")})