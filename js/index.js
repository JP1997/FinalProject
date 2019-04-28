function watchForm(){
	$('.login').on ('submit' , function(event){
		event.preventDefault();
		let userEmail = $('.userEmail').val();
		let userPassword = $('.userPassword').val();
		console.log(userEmail);
		console.log(userPassword);
		//Hacer un get y verificar que los dos parametros existen

		if(userPassword == '12345')
			console.log('hello');
	})
}

function init(){
	$(watchForm);
}

$(init);