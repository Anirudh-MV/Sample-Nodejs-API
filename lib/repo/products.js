var fs = require('file-system');
var productApi = require('../apis/productApi.js');
var request = require('request');
var inventoryy = require('../repo/inventory.js');

var products = app => {
	var url = 'http://autumn-resonance-1298.getsandbox.com/products';
	request(
		{
			url: url,
			json: true,
		},
		(error, response, body) => {
			//console.log(`hell ya:${JSON.stringify(body)}`)
			if (!error && response.statusCode === 200) {
				var content = JSON.stringify(body);
				var prd = body;
				inventoryy(app, prd);
				productApi.productApi(app, body);
				// In case if you want to save it to a JSON file
				/*fs.writeFile("../model/products.json", content, 'utf8', function (err) {
            if (err) {
                return console.log(`error:${err}`);
            }
            console.log("The file was saved!");
        });   */
			}
		}
	);
};
module.exports = products;
