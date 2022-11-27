const express = require('express');
const cors = require('cors');
var body_parser = require('body-parser');
const connect_db = require('./connect_db');
var app = express();
connect_db();
app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
const path = require('path');
let Recipes = require('./models/Recipes');
const mongoose  = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/add', (req, res) => {
	res.render('add');
});

app.post('/store', (req, res) => {
    var rname = req.body.rname;
    var rdescription = req.body.rdescription;
    var rdifficulty = req.body.rdifficulty;
    var ringredient = req.body.ingredients;
    var rsteps = req.body.steps;

    const newRecipe = new Recipes({
        "name":rname,
        "description":rdescription,
        "difficulty":rdifficulty,
        "ingredients":ringredient,
        "steps":rsteps,

    });

    newRecipe.save();
    return res.redirect('/');
});

app.get('/', (req, res) => {
    Recipes.find().then((recipes) => {
        res.render('index', {'recipes':recipes});
    })
    
});

app.get('/delete/:id', (req, res) => {
    Recipes.findOneAndDelete({"_id":req.params.id}).then(() => {
        res.redirect('/');
    })
    
});

app.get('/edit/:id', (req, res) => {
    Recipes.findOne({"_id":req.params.id}).then((recipe) => {
        res.render('edit', {"recipe":recipe});
    })
    
});

app.post('/update/:id', (req, res) => {
    var rname = req.body.rname;
    var rdescription = req.body.rdescription;
    var rdifficulty = req.body.rdifficulty;
    var ringredient = req.body.ingredients;
    var rsteps = req.body.steps;

    Recipes.findById(req.params.id).then(async (recipe) => { 
        if(recipe){
            let filter = { _id: req.params.id };
            let updateDoc = {
                $set: {
                    "name":rname,
                    "description":rdescription,
                    "difficulty":rdifficulty,
                    "ingredients":ringredient,
                    "steps":rsteps,

                }

            }

            await Recipes.updateMany(filter,updateDoc)
        }

        res.redirect('/');
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});