var request = require('request');
var productApi = function(app, resp) {
  
    app.get('/api/products', function(req, res, body) {
        console.log(`Products::${JSON.stringify(resp)}`);
        res.status(200).send(resp);
    });
};

var inventoryApi = function(app, results){
	app.get('/api/inventory', function(req, res, body) {
        console.log(`inventory:${JSON.stringify(results)}`);
		res.status(200).send(results);
    });
}

module.exports.inventoryApi = inventoryApi;
module.exports.productApi = productApi;