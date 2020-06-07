var express= require('express');
var bodyParser= require('body-parser');
var port= process.env.PORT ||8000;
var knex= require('./db/knex');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

//Retrieve vals
    //Manual
app.get('/inventory', function(req,res){
    knex.select().from('inventory').where('ID',1)
        .then(function(inventory){
            res.send(inventory)
        })
})
    //Auto
app.get('/inventory:ID', function(req,res){
    knex.select()
        .from('inventory')
        .where('ID',req.params.ID)
        .then(function(inventory){
            res.send()
        })
})

//Create
    //Manual
app.post("/inventory", function(req,res){
    knex('inventory').insert({
        product: "Product From Code",
        quantity: 220
    })
    .then(function(){
        knex.select().from('inventory')
        .then(function(inventory){
            res.send(inventory)
        })
    })
})
    //Auto
app.post("/inventory", function(req,res){
    knex('inventory').insert({
        product: req.body.product,
        quantity: req.body.quantity
    })
    .then(function(){
        knex.select().from('inventory')
        .then(function(inventory){
            res.send(inventory)
        })
    })
})


//Update
app.put('/inventory/:id', function(req,res){
    knex('inventory').where('ID',req.params.ID)
        .update({
            quantity: req.body.quantity,
            product: req.body.product
        })
        .then(function(){
            knex.select().from('inventory')
            .then(function(inventory){
                res.send(inventory)
            })
        })
})

//Delete
app.delete('/inventory/:id', function(req,res){
    knex('inventory').where('ID',req.params.ID)
        .del()
        .then(function(){
            knex.select()
                .from('inventory')
                .then(function(inventory){
                    res.send(inventory)
                })
        })
})


app.listen(port,function(){
    console.log("Listening port: ", port);
})