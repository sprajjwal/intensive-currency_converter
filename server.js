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
    "timestamp": 1578590407,
    "base": "EUR",
    "date": "2020-01-09",
    "rates": {
        "AED": 4.079604,
        "AFN": 85.911796,
        "ALL": 122.38341,
        "AMD": 532.709749,
        "ANG": 1.859726,
        "AOA": 537.879511,
        "ARS": 66.440777,
        "AUD": 1.62039,
        "AWG": 1.999244,
        "AZN": 1.88709,
        "BAM": 1.955542,
        "BBD": 2.24187,
        "BDT": 94.259911,
        "BGN": 1.9565,
        "BHD": 0.41874,
        "BIF": 2094.763921,
        "BMD": 1.110691,
        "BND": 1.501086,
        "BOB": 7.677768,
        "BRL": 4.533397,
        "BSD": 1.110336,
        "BTC": 0.000142,
        "BTN": 78.944966,
        "BWP": 11.843555,
        "BYN": 2.355853,
        "BYR": 21769.550828,
        "BZD": 2.23807,
        "CAD": 1.454039,
        "CDF": 1872.625301,
        "CHF": 1.079914,
        "CLF": 0.030846,
        "CLP": 851.119665,
        "CNY": 7.722193,
        "COP": 3620.798328,
        "CRC": 635.876317,
        "CUC": 1.110691,
        "CUP": 29.433321,
        "CVE": 110.679922,
        "CZK": 25.231566,
        "DJF": 197.392019,
        "DKK": 7.473153,
        "DOP": 59.086376,
        "DZD": 132.799811,
        "EGP": 17.766954,
        "ERN": 16.660221,
        "ETB": 35.596555,
        "EUR": 1,
        "FJD": 2.403092,
        "FKP": 0.902859,
        "GBP": 0.850238,
        "GEL": 3.210048,
        "GGP": 0.850184,
        "GHS": 6.347609,
        "GIP": 0.902859,
        "GMD": 56.867774,
        "GNF": 10462.712537,
        "GTQ": 8.566037,
        "GYD": 232.785692,
        "HKD": 8.626263,
        "HNL": 27.555691,
        "HRK": 7.446848,
        "HTG": 109.242905,
        "HUF": 332.674596,
        "IDR": 15376.411309,
        "ILS": 3.851445,
        "IMP": 0.850184,
        "INR": 79.048459,
        "IQD": 1322.278075,
        "IRR": 46765.660383,
        "ISK": 137.559212,
        "JEP": 0.850184,
        "JMD": 147.727228,
        "JOD": 0.787483,
        "JPY": 121.584606,
        "KES": 112.841969,
        "KGS": 77.391639,
        "KHR": 4534.953048,
        "KMF": 493.063638,
        "KPW": 999.656488,
        "KRW": 1287.790866,
        "KWD": 0.337106,
        "KYD": 0.925264,
        "KZT": 418.108403,
        "LAK": 9868.492733,
        "LBP": 1679.365159,
        "LKR": 201.355839,
        "LRD": 209.509927,
        "LSL": 15.782976,
        "LTL": 3.279583,
        "LVL": 0.671846,
        "LYD": 1.569434,
        "MAD": 10.675406,
        "MDL": 19.20837,
        "MGA": 4060.687833,
        "MKD": 61.49011,
        "MMK": 1633.275433,
        "MNT": 3046.253856,
        "MOP": 8.884731,
        "MRO": 396.516634,
        "MUR": 40.614199,
        "MVR": 17.160352,
        "MWK": 819.119103,
        "MXN": 20.93425,
        "MYR": 4.543284,
        "MZN": 68.696375,
        "NAD": 15.782931,
        "NGN": 401.511655,
        "NIO": 37.456481,
        "NOK": 9.860596,
        "NPR": 126.312954,
        "NZD": 1.680626,
        "OMR": 0.427619,
        "PAB": 1.110336,
        "PEN": 3.689163,
        "PGK": 3.754033,
        "PHP": 56.276549,
        "PKR": 171.657298,
        "PLN": 4.24283,
        "PYG": 7232.334491,
        "QAR": 4.044012,
        "RON": 4.776531,
        "RSD": 117.644639,
        "RUB": 68.082162,
        "RWF": 1039.607121,
        "SAR": 4.166919,
        "SBD": 9.221324,
        "SCR": 15.216826,
        "SDG": 50.147354,
        "SEK": 10.539934,
        "SGD": 1.50141,
        "SHP": 1.467114,
        "SLL": 10801.473284,
        "SOS": 646.422713,
        "SRD": 8.283574,
        "STD": 23947.383357,
        "SVC": 9.715568,
        "SYP": 572.005911,
        "SZL": 15.782489,
        "THB": 33.609749,
        "TJS": 10.758915,
        "TMT": 3.88742,
        "TND": 3.118844,
        "TOP": 2.549592,
        "TRY": 6.517953,
        "TTD": 7.493696,
        "TWD": 33.287337,
        "TZS": 2554.262406,
        "UAH": 26.784054,
        "UGX": 4091.497222,
        "USD": 1.110691,
        "UYU": 41.586873,
        "UZS": 10620.125459,
        "VEF": 11.093032,
        "VND": 25737.495742,
        "VUV": 128.53683,
        "WST": 2.926412,
        "XAF": 655.863331,
        "XAG": 0.062012,
        "XAU": 0.000716,
        "XCD": 3.001699,
        "XDR": 0.804995,
        "XOF": 651.975604,
        "XPF": 119.815822,
        "YER": 278.06146,
        "ZAR": 15.784589,
        "ZMK": 9997.554021,
        "ZMW": 15.488818,
        "ZWL": 357.642622
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

// app.listen(process.env.PORT, () => console.log(`Currency converter listening`))
app.listen(3000, () => console.log(`Currency converter listening`))

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
