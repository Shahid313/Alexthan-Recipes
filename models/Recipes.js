const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
name:{
    type: String,
},
description: {
    type: String,
},
difficulty:{
    type: String,
},
ingredients:{
    type: Array,
},
steps:{
    type: Array,
},


})

const Recipes = mongoose.model('Recipes', RecipesSchema);

module.exports = Recipes;