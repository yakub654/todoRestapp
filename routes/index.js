var express = require('express');
var router = express.Router();
var Todo =  require('../models/todo');
var x = {};

// Getting Homepage after Autherization
router.get('/', ensureAuthenticated, function(req, res){

	//Task Counter
	Todo.count({done:false},function(err,count){
		x.c = count;
		console.log(x.c);
	 });
	 
	 

	
	Todo.find({}).then(function(results){

		
		var todos = results.filter(function(todo) {
			return !todo.done; 
		});

		var doneTodos = results.filter(function(todo) {
			return todo.done;
		});
		res.render('index', {todos:todos, doneTodos:doneTodos, counts:x. c});
	});
	
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}





module.exports = router;