const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		varients: [],
		prices: [],
		category: { type: String, required: true },
		image: { type: String },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzaModel;
