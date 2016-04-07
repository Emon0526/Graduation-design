var express = require('express');
var router = express.Router();
var models = require('../models');
var Cart = models.cart;
var add = require('../service/add');

router.get("/",function(req,res) {
    res.render('add');
})

module.exports = router;
