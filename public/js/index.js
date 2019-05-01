function checkUser(data){
	let check = false;
	let url = './optic-api/users';
	let settings = {
					method : 'GET',
					headers: {
						'Content-Type' : 'application/json'
					}
	};

	fetch(url,settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			throw new Error(response.statusText)
		
		})
		.then(responseJSON => {
		
			responseJSON.user.forEach(function(item){
				if((data.email == item.email) && (data.password == item.password))
					check = true;
			})
			if(check){
				alert("Success")
				window.open('./hub.html', "_self");
			}
			else{
				alert("Correo o contraseña incorrecto");
				$('.userPassword').val("");
			}
			
			
		})
		.catch(err => {
			console.log(err);
		});

}


function watchForm(){
	$('.login').on ('submit' , function(event){
		event.preventDefault();
		let userEmail = $('.userEmail').val();
		let userPassword = $('.userPassword').val();
		console.log(userEmail);
		console.log(userPassword);
		//Hacer un get y verificar que los dos parametros existen
		let data = {
			email : userEmail,
			password : userPassword
		};
		checkUser(data);

	})
}

function init(){
	$(watchForm);
}

$(init);