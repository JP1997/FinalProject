const express = require('express');
const router = express.Router();
const {userList, clinicList,patientList} = require('./opModel');




//Respuesta es user:
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



//Respuesta es patient:
router.get('/patient', (req,res,next) => {
	patientList.get()
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				patient : response
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

router.get('/patient/:name', (req,res,next) => {
	let nombre = req.params.name;
	patientList.getByName(nombre)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				patient : response
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

router.get('/patientGet/:id', (req,res,next) => {

	let id = req.params.id;
	patientList.getById(id)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				patient : response
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

router.post('/patient', (req,res,next) => {
	let requiredFields = ['nombre'];

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

	let newPatient = req.body;


	patientList.add(newPatient)
		.then(response => {
			res.status(201).json({
				message : "Successfully added the user",
				status: 201,
				patient : response
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

router.put('/patient/:id', (req,res,next) => {
	if (!('id' in req.params))
	{
		res.status(406).json({
			message : "Missing id in parameter",
			status : 406
		});
		return next();
	}
	
	let putID = req.params.id;
	let bodyID = req.body;
	patientList.place(putID,bodyID)
		.then(response => {
			res.status(200).json({
				message: "Post modified successfully",
				status : 200,
				patient :response
			})
		})
		.catch(err => {
			res.status(404).json({
				message : "No parameters in the body",
				status : 404		
			})
			return next();
		})
});

router.delete('/patient', (req,res,next) => {

	let requiredFields = ['_id'];

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

	let delID = req.body._id;


	patientList.remove(delID)
		.then(response => {
			res.status(204).json({
				message : "Post succesfully deleted",
				status : 204,
				patient : response
			});
		})
		.catch(err => {
			res.status(404).json({
				message : "Post not found",
				status : 404
			})
		})
});



//Respuesta es clinic:
router.get('/clinic', (req,res,next) =>{
	clinicList.get()
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinicGet/:id', (req,res,next) => {

	let id = req.params.id;
	clinicList.getById(id)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinic/general/:value', (req,res,next) =>{

	let value = req.params.value;

	clinicList.getGeneral(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinic/name/:value', (req,res,next) =>{
	
	let value = req.params.value;

	clinicList.getName(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinic/edad/:value', (req,res,next) =>{

	let value = req.params.value;

	clinicList.getEdad(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinic/ciudad/:value', (req,res,next) =>{

	let value = req.params.value;

	clinicList.getCiudad(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.get('/clinic/doctor/:value', (req,res,next) =>{

	let value = req.params.value;

	clinicList.getDoctor(value)
		.then(response => {
			res.status(200).json({
				message : 'Successfully sent all the users',
				status : 200,
				clinic : response
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

router.post('/clinic', (req,res,next) => {
	let requiredFields = ['nombre'];

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

	let newUser = req.body;
	
	clinicList.add(newUser)
		.then(response => {
			res.status(201).json({
				message : "Successfully added the user",
				status: 201,
				clinic : response
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

router.put('/clinic/:id', (req,res,next) => {

	if (!('id' in req.params))
	{
		res.status(406).json({
			message : "Missing id in parameter",
			status : 406
		});
		return next();
	}
	
	let putID = req.params.id;
	let body = req.body;

	clinicList.update(putID,body)
		.then(response => {
			res.status(200).json({
				message: "Post modified successfully",
				status : 200,
				clinic :response
			})
		})
		.catch(err => {
			res.status(404).json({
				message : "No parameters in the body",
				status : 404		
			})
			return next();
		})
});

router.delete('/clinic', (req,res,next) => {
	let requiredFields = ['_id'];

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

	let delID = req.body._id;


	clinicList.remove(delID)
		.then(response => {
			res.status(204).json({
				message : "Post succesfully deleted",
				status : 204,
				clinic : response
			});
		})
		.catch(err => {
			res.status(404).json({
				message : "Post not found",
				status : 404
			})
		})
})



module.exports = router;