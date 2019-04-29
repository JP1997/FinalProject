let allPass = 123456;

function newUser(newData){
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
			addUser(responseJSON.user,newData);
			console.log(responseJSON);
		})
		.catch(err => {
			console.log(err);
		});
}

function addUser(data, newData){
	let check = false;

	data.forEach(function(item){
		if(newData.email == item.email)
			check = true;
	})

	if(!check){
		let url = './optic-api/users';
		let settings = {
						method : 'POST',
						headers: {
							'Content-Type' : 'application/json'
						},
						body: JSON.stringify(newData)
						};

		fetch(url, settings)
			.then(response => {
				if(response.ok){
					return response.json();
				}
				else{
					return new Promise(function(reoslve,reject){
						resolve(response.json());
					})
					.then(data => {
						throw new Error(data.message);
					})
				}
			})
			.then(responseJSON =>{
				console.log('exito');
			})
			.catch(err => {
				console.log(err);
			});
	}
	else
	{
		alert("Usuario ya esta registrado");
		nameDoctor = $('.nameDoctor').val("");
		userEmail = $('.userEmail').val("");
		userPassword = $('.userPassword').val("");
		confirmPassword = $('.confirmPassword').val("");
		masterPassword = $('.masterPassword').val("");
	}

}

function watchForm(){
	$('.nUserForm').on ('submit' , function(event){
		event.preventDefault();
		let nameDoctor = $('.nameDoctor').val();
		let userEmail = $('.userEmail').val();
		let userPassword = $('.userPassword').val();
		let confirmPassword = $('.confirmPassword').val();
		let masterPassword = $('.masterPassword').val();

		if(userPassword != confirmPassword){
			alert("Both passwords must match")
			$('.confirmPassword').val("");
			$('.masterPassword').val("");
		}
		else if(masterPassword != allPass){
			alert("Incorrect Master Password")
			$('.masterPassword').val("");
		}
		else
		{	
			let data = {
				doctor : nameDoctor,
				email : userEmail,
				password : userPassword
			};

			newUser(data);
		}

	})
}

function init(){
	$(watchForm);
}

$(init);