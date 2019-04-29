const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
	doctor : {type : String, required : true, unique : false},
	email : {type : String , requiered : true, unique : true},
	password : {type : String, required : true, unique : false}
});

let Users = mongoose.model('User',userSchema);


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

module.exports = {userList};