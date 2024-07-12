const express = require("express");
const router = express.Router();
const Restaurent = require("../Models/restaurent.model");

router.get("/", async (req, res, next) => {
	try {
		var result = await Restaurent.find({}, { __v: 0 });
		// var result = await Restaurent.find({price:699},{__v:0});
		res.send(result);
	} catch (error) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	var restaurent = new Restaurent({
		imageUrl: req.body.imageUrl,
		restaurentName: req.body.restaurentName,
		cusion: req.body.cusion,
		rating: req.body.rating,
	});

	try {
		var result = await restaurent.save();
		res.send(result);
	} catch (error) {
		next(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		var restaurent = await Restaurent.findById(req.params.id, { __v: 0 });
		// var restaurent = await Restaurent.findOne({_id: req.params.id}, {__v:0})
		res.send(restaurent);
	} catch (error) {
		next(err);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		var restaurent = await Restaurent.findByIdAndUpdate(
			req.params.id,
			{
				imageUrl: req.body.imageUrl,
				restaurentName: req.body.restaurentName,
				cusion: req.body.cusion,
				rating: req.body.rating,
			},
			{
				new: true,
			}
		);
		res.send(restaurent);
	} catch (error) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		var restaurent = await Restaurent.findByIdAndDelete(req.params.id, {
			__v: 0,
		});
		// var Restaurents = await Restaurents.findOne({_id: req.params.id}, {__v:0})
		res.send(restaurent);
	} catch (error) {
		next(err);
	}
});

module.exports = router;
