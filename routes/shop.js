const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  //console.log('shop.js', adminData.products);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', {prods:products, pageTitle:'Shop', path:'/'}); 
});

module.exports = router;

/**
 res.render is a built in funciton in express
 It tells to send the file in views which corresponds to the view engine
 It even figures out the path to it. So we do not need to use path.join()

 In this route, i want to show products which user have added through the route 'add-product'
 i put the data in the middleware and name it products. 
 then i pass this data in the res.render() function

 Now in shop.pug, i can use these data 
 
 */
