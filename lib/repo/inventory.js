var fs = require('file-system');
var request = require('request');
var productApi = require('../apis/productApi.js');
var prdAndInv = require('../apis/prdAndInv.js');
//var prdByFilter = require('../apis/prodByFilter.js')

var inventory = (app, prd) => {
	var url = 'http://autumn-resonance-1298.getsandbox.com/inventory';

	request(
		{
			url: url,
			json: true,
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				var content = JSON.stringify(body);
				productApi.inventoryApi(app, body);
				var invent = body;
				prdAndInv(app, prd, invent);
				// In case if you want to save to a JSON file
				//prdByFilter(app, prd, invent);
				/*fs.writeFile('../model/inventory.json', content, 'utf8', function(err) {
					if (err) {
						return console.log(err);
					}
				}); */
			}
		}
	);
};

module.exports = inventory;
