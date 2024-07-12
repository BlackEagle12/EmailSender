const express = require("express");
const router = express.Router();
const Product = require("../Models/products.model");

router.get("/", async (req, res, next) => {
	try {
		var result = await Product.find({}, { __v: 0 });
		// var result = await Product.find({price:699},{__v:0});
		res.send(result);
	} catch (error) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	var product = new Product({
		name: req.body.name,
		price: req.body.price,
	});

	try {
		var result = await product.save();
		res.send(result);
	} catch (error) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		var product = await Product.findById(req.params.id, { __v: 0 });
		// var product = await Product.findOne({_id: req.params.id}, {__v:0})
		res.send(product);
	} catch (error) {
		next(err);
	}
});

router.patch("/:id", async (req, res, next) => {
	try {
		var product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.send(product);
	} catch (error) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		var product = await Product.findByIdAndDelete(req.params.id, { __v: 0 });
		// var product = await Product.findOne({_id: req.params.id}, {__v:0})
		res.send(product);
	} catch (error) {
		next(err);
	}
});

module.exports = router;
