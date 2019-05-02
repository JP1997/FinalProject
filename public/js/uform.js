function addUser(data){

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
			console.log(responseJSON);
			alert('Paciente salvado exitosamente');
			window.open('./uform.html','_self');
		})
		.catch(err => {
			console.log(err);
		});
}


function watchForm(){
	$('.pacienteForm').on('submit', function(event){
		event.preventDefault();
		let nombrePaciente =$('.nombrePaciente').val();
		let edadPaciente = $('.edadPaciente').val();
		let ocupacionPaciente =$('.ocupacionPaciente').val();
		let direccionPaciente =$('.direccionPaciente').val();
		let telefonoPaciente =$('.telefonoPaciente').val();
		let ciudadPaciente =$('.ciudadPaciente').val();
		let estadoPaciente =$('.estadoPaciente').val();
		let historial = $('.historialClinico').val();

		let data = {
			nombre : nombrePaciente,
			fechaNacimiento: edadPaciente,
			ocupacion : ocupacionPaciente,
			direccion : direccionPaciente,
			telefono : telefonoPaciente,
			ciudad : ciudadPaciente,
			estado : estadoPaciente,
			historialClinico : historial
		};
		addUser(data);

	});
}

$(watchForm);