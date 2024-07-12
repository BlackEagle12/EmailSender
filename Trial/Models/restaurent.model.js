const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurentSchema = new Schema({
	imageUrl: {
		type: String,
		required: true,
	},
	restaurentName: {
		type: String,
		required: true,
	},
	cusion: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
});

const Restaurent = mongoose.model("restaurent", RestaurentSchema);
module.exports = Restaurent;
