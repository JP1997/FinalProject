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
	historialClinico : {

	},
	ojoDerecho : {
					observaciones : String,
					RXAnteriorESF : String,
					agudezaVisual : {
										SL : Number,
										AE : Number,
										CV : Number
					},
					retinoscopia : String,
					retinoscopia20 : Number,
					exSubjetivo : String,
					exSubjetivoCVL : Number,
					exSubjetivoCVC : Number,
					RXFinalESF : String,
					RXFinalADD : String,
					RXFinalAV : Number,
	},
	ojoIzquierdo :{
					observaciones : String,
					RXAnteriorESF : String,
					agudezaVisual : {
										SL : Number,
										AE : Number,
										CV : Number
					},
					retinoscopia : String,
					retinoscopia20 : Number,
					exSubjetivo : String,
					exSubjetivoCVL : Number,
					exSubjetivoCVC : Number,
					RXFinalESF : String,
					RXFinalADD : String,
					RXFinalAV : Number,
	}
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
	historialClinico : {}

})

clinicHistorySchema.index({'$**' : 'text'});

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
}

const clinicList ={

}

const patientList = {
	
}

module.exports = {userList};