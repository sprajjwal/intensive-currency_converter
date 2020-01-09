# [Currency Converter](http://convertyourcurrency.herokuapp.com)

This is a currency converter that uses [Fixer](https://www.fixer.io)'s data to correctly convert rates between different currencies.

The rates are updated ***every 2 hours***.

## Usage

Go to the live [link](http://convertyourcurrency.herokuapp.com) to use the website.

Additionally, you can run it locally by running `node server.js` after edditing line 222 on server.js from

    app.listen(process.env.PORT, () => console.log('Currency converter listening'))

to

    app.listen(3000, () => console.log('Currency converter listening'))

Make sure to first install all needed packages by running 

    npm install

This should run the node server and the page should be live on `localhost:3000`

## Technologies used

This project used the following technologies:

- Node.js
- Javascript
- HTML
- CSS
- heroku(for deployment)

## Special Features

- This currency converter automatically does API calls for fresh rates every 2 hrs.
- It holds the rates server side.
- All the available currencies are updated dynamically.
- All the calculations and conversions are done server side resulting into the api Key being hidden very efficiently. This also results in a faster fetch as the server has been holding data and isn't relying on getting live rates from the external API.
