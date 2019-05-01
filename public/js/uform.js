function addUser(data){
	let check = false;

	if(!check){
		let url = './optic-api/patient';
		let settings = {
						method : 'POST',
						headers: {
							'Content-Type' : 'application/json'
						},
						body: JSON.stringify(data)
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
				alert('Paciente salvado exitosamente');
				window.open('./uform.html','_self');
			})
			.catch(err => {
				console.log(err);
			});
	}
	else
	{
		alert("Usuario ya esta registrado");
		$('.userEmail').val("");
		$('.userPassword').val("");
		$('.confirmPassword').val("");
		$('.masterPassword').val("");
	}
}


function watchForm(){
	$('.pacienteForm').on ('submit', function(event){
		event.preventDefault();
		let nombrePaciente =$('.nombrePaciente').val();
		let edadPaciente = $('.edadPaciente').val();
		let ocupacionPaciente =$('.ocupacionPaciente').val();
		let direccionPaciente =$('.direcionPaciente').val();
		let telefonoPaciente =$('.telefonoPaciente').val();
		let ciudadPaciente =$('.ciudadPaciente').val();
		let estadoPaciente =$('.estadoPaciente').val();

		let data = {
			: nombrePaciente
			: edadPaciente
			: ocupacionPaciente
			: direccionPaciente
			: telefonoPaciente
			: ciudadPaciente
			: estadoPaciente

		};

		addUser(data);

	});
}