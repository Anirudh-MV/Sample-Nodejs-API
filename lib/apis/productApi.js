var request = require('request');
var productApi = (app, resp) => {
	app.get('/api/products', (req, res, body) => {
		console.log(`Products::${JSON.stringify(resp)}`);
		res.status(200).send(resp);
	});
};

var inventoryApi = (app, results) => {
	app.get('/api/inventory', function(req, res, body) {
		console.log(`inventory:${JSON.stringify(results)}`);
		res.status(200).send(results);
	});
};

module.exports.inventoryApi = inventoryApi;
module.exports.productApi = productApi;
