const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
	doctor : {type : String, required : true, unique : false},
	email : {type : String , requiered : true, unique : true},
	password : {type : String, required : true, unique : false}
});

let clinicHistorySchema = mongoose.Schema({
	nombre: String,
	doctor : String,
	edad : Number,
	ocupacion: String,
	direccion : String,
	telefono : String,
	ciudad : String,
	estado : String,
	motivo : String,
	historialClinico : String,
	ojoDerecho : {
					observaciones : String,
					RXAnteriorESF : String,
					agudezaVisual : {
										SL : String,
										AE : String,
										CV : String
					},
					retinoscopia : String,
					retinoscopia20 : String,
					exSubjetivo : String,
					exSubjetivoCVL : String,
					exSubjetivoCVC : String,
					RXFinalESF : String,
					RXFinalADD : String,
					RXFinalAV : String,
	},
	ojoIzquierdo :{
					observaciones : String,
					RXAnteriorESF : String,
					agudezaVisual : {
										SL : String,
										AE : String,
										CV : String
					},
					retinoscopia : String,
					retinoscopia20 : String,
					exSubjetivo : String,
					exSubjetivoCVL : String,
					exSubjetivoCVC : String,
					RXFinalESF : String,
					RXFinalADD : String,
					RXFinalAV : String
	},
	tipoLente : String,
	material : String,
	color : String,
	observacionFinal: String
});

let patientSchema = mongoose.Schema({
	nombre : String,
	fechaNacimiento : String,
	ocupacion : String,
	direccion : String,
	telefono :String,
	ciudad : String,
	estado : String,
	historialClinico : String
});

clinicHistorySchema.index({'$**' : 'text'});
patientSchema.index({'$**' : 'text'});


let ClinicHistory = mongoose.model('ClinicHistory', clinicHistorySchema);
let Users = mongoose.model('User',userSchema);
let Patient = mongoose.model('Patient',patientSchema);


const userList = {
	get : function(){
		return Users.find()
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	add : function(newUser){
		return Users.create(newUser)
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	delete : function(delItem){
		return Users.findOneAndDelete({email:delItem})
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
};

const clinicList ={
	get : function(){
		return ClinicHistory.find()
			.then(clinic => {
				return clinic;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	add : function(newUser){
		return ClinicHistory.create(newUser)
			.then(clinic => {
				return clinic;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	update : function(pId,body){
		return ClinicHistory.findOneAndUpdate({_id:pId},{$set : body},{new : true})
			.then(clinic => {
				return clinic;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	remove : function(delId){
		return ClinicHistory.findOneAndDelete({_id:delId})
			.then(clinic => {
				return clinic;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	getKeyword : function(keyword){

	}
};

const patientList = {
	get : function(){
		return Patient.find()
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	add : function(newUser){
		return Patient.create(newUser)
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	update : function(pId,body){
		return Patient.findOneAndUpdate({_id:pId},{$set : body},{new : true})
			.then(patient => {
				return patient;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	remove : function(delId){
		return Patient.findOneAndDelete({_id:delId})
			.then(patient => {
				return patient;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	getKeyword : function(keyword){

	}
};

module.exports = {userList,clinicList,patientList};