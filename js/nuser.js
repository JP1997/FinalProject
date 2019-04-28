let allPass = 123456;

function watchForm(){
	$('.nUserForm').on ('submit' , function(event){
		event.preventDefault();
		let nameDoctor = $('.nameDoctor').val();
		let userEmail = $('.userEmail').val();
		let userPassword = $('.userPassword').val();
		let confirmPassword = $('.confirmPassword').val();
		let masterPassword = $('.masterPassword').val();

		console.log(nameDoctor);
		console.log(userEmail);
		console.log(userPassword);
		console.log(confirmPassword);
		console.log(masterPassword);

		if(userPassword != confirmPassword){
			alert("Both passwords must match")
			$('.confirmPassword').val("");
			$('.masterPassword').val("");
		}
		if(masterPassword != allPass){
			alert("Incorrect Master Password")
			$('.masterPassword').val("");
		}

	})
}

function init(){
	$(watchForm);
}

$(init);