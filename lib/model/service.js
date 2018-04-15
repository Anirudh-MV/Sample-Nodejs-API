var prdByFilter = require('../apis/prodByFilter.js');
var prdAndInv = require('../apis/prdAndInv.js');
var request = require('request');
var products = require('../repo/products.js');
var inventoryy = require('../repo/inventory.js');


var appRouter = async function(app) {
     // product API
await products(app);
 // Iventory API
 //await inventoryy(app);
   /* try{
    prdAndInv(app);

    //Product & Inventory API By Filter
    prdByFilter(app);
    } catch(error){
        console.log(`error`)
    }*/
};

module.exports = appRouter;
