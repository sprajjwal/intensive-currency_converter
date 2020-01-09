const apiKey = process.env.apiKey; // grabs api key from env

// required imports and env setup
const express = require('express')
const app = express()

const fetch = require('node-fetch');
const schedule = require('node-schedule');
const http = require('http');
const url = require('url');

app.set('view engine', 'ejs');

process.env.TZ = 'America/Los_Angeles' 

let data = {
    "success": true,
    "timestamp": 1519296206,
    "base": "USD",
    "date": "2020-01-06",
    "rates": {
        "GBP": 0.72007,
        "JPY": 107.346001,
        "EUR": 0.813399,
    }
} 

var j = schedule.scheduleJob('0 0 */2 * * *', async function(){
    try {
        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
        const myJson = await response.json()
        data = myJson
    } catch(error) {
        console.log(error)
    }
});

app.use("/static", express.static('./static/')); 

// routes and methods
// index route that has the main page
app.get('/', function(req, res) {  
    res.render('index');
});


// data route that has the rates
app.get('/data', async function(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const from = parseFloat(data["rates"][queryObject.from])
    const to = parseFloat(data["rates"][queryObject.to])
    const amount = parseFloat(queryObject.amount)
    const val = amount * (to/from)
    res.json(val)
})

const port = 3000
port = process.env.PORT
app.listen(port, () => console.log(`Currency converter listening on port ${port}!`))

// helpers
async function get_json(){
    try {
        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
        const myJson = await response.json()
        data = myJson
    } catch(error) {
        console.log(error)
    }
}
