const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require("moment")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sourabhamohite2812:wXzbwlWssiEAjJL1@cluster0.m7awpol.mongodb.net/shubham-22", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let IpAdd = req.ip;
        let url = req.originalUrl
        let date = moment().format('YYYY-MM-DD, h:mm:ss a')
        console.log(`${date} ${IpAdd} ${url}`)
        next();
}
  );
app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
