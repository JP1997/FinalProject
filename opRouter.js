const express = require('express');
const router = express.Router();
const {userList} = require('./opModel');

router.get('/users', (req,res,next) => {
	userList.get()
		.then(user => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				user : user
			});
		})
		.catch(err =>{
			res.status(500).json({
				message: "Internal server error",
				status : 500 
			});
			return next();
		});
});

router.post('/users', (req,res,next) => {

	let requiredFields = ['doctor','email','password'];

	for(let i = 0; i < requiredFields.length; i++){
		let currentField = requiredFields[i];
		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			});
			return next();
		}
	}

	let newUser= {
		doctor : req.body.doctor,
		email : req.body.email,
		password : req.body.password
	}

	userList.add(newUser)
		.then(user => {
			res.status(201).json({
				message : "Successfully added the user",
				status: 201,
				user : user
			});
		})
		.catch(err => {
			res.status(400).json({
				message : `${err}`,
				status : 400
			});
			return next();
		});
});

router.delete('/users', (req,res,next) => {
	let requiredFields = ['email','password'];

	for(let i = 0; i < requiredFields.length; i++) {
		let currentField = requiredFields[i];

		if (!(currentField in req.body)){
			res.status(406).json({
				message: `Missing field ${currentField} in body`,
				status : 406
			});
			return next();
		}
	}

	let delUser = req.body.email;

	userList.delete(delUser)
		.then(user => {
			res.status(204).json({
				message : "User successfully deleted",
				status : 204,
				user : user
			});
		})
		.catch(err =>{
			res.status(404).json({
				message : "User not found",
				status : 404
			});
			return next();
		})

});

module.exports = router;