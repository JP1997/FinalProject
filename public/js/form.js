
function displayPatients(data){
	$('.Paciente').html("");

	for(let i = 0; i< data.length;i++){
		$('.Paciente').append(`
						<div>
							<div>Nombre : <input type="text" disabled="disabled" value="${data[i].nombre}"/> </div>
							<div>Dirección : <input type="text" disabled="disabled" value="${data[i].direccion}"/> </div>
							<button type="submit" class="buttonPatient"> 
								Usar
							</button> 
						</div>
							`);
		}
}




function searchPatient(nombre){
	console.log(nombre);
	let url = `./optic-api/patient/${nombre}`;
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
			console.log(responseJSON);
			displayPatients(responseJSON.patient);
		})
		.catch(err => {
			console.log(err);
		});

}

function watchForm(){
	$('.historialForm').on('submit', function(event) {
		event.preventDefault();

		let doctorName =$('.doctorName').val();
		let nombrePaciente =$('.nombrePaciente').val();
		let edadPaciente = $('.edadPaciente').val();
		let ocupacionPaciente =$('.ocupacionPaciente').val();
		let direccionPaciente =$('.direccionPaciente').val();
		let telefonoPaciente =$('.telefonoPaciente').val();
		let ciudadPaciente =$('.ciudadPaciente').val();
		let estadoPaciente =$('.estadoPaciente').val();
		let motivoPaciente =$('.motivoPaciente').val();
		let historialClinico =$('.historialClinico').val();
		let observacionesDerecho =$('.observacionesDerecho').val();
		let observacionesIzquierdo =$('.observacionesIzquierdo').val();
		let RXAnteriorODESF =$('.RXAnteriorODESF').val();
		let RXAnteriorOIESF =$('.RXAnteriorOIESF').val();
		let AgudezaODSL =$('.AgudezaODSL').val();
		let AgudezaODAE =$('.AgudezaODAE').val();
		let AgudezaODCV =$('.AgudezaODCV').val();
		let AgudezaOISL =$('.AgudezaOISL').val();
		let AgudezaOIAE =$('.AgudezaOIAE').val();
		let AgudezaOICV =$('.AgudezaOICV').val();

		let RetOD =$('.RetOD').val();
		let RetOD20 =$('.RetOD20').val();
		let RetOI =$('.RetOI').val();
		let RetOI20 =$('.RetOI20').val();

		let SubjetivoOD =$('.SubjetivoOD').val();
		let SubjetivoODCVL =$('.SubjetivoODCVL').val();
		let SubjetivoODCVC =$('.SubjetivoODCVC').val();
		let SubjetivoOI =$('.SubjetivoOI').val();
		let SubjetivoOICVL =$('.SubjetivoOICVL').val();
		let SubjetivoOICVC =$('.SubjetivoOICVC').val();

		let RxFinalODESF =$('.RxFinalODESF').val();
		let RxFinalODADD =$('.RxFinalODADD').val();
		let RxFinalODAV =$('.RxFinalODAV').val();

		let tipoLente =$('.tipoLente').val();
		let material =$('.material').val();
		let color =$('.color').val();
		let RxFinalOIESF =$('.RxFinalOIESF').val();
		let RxFinalOIADD =$('.RxFinalOIADD').val();
		let RxFinalOIAV =$('.RxFinalOIAV').val();
		let observacionesFinales =$('.observacionesFinales').val();

		let data= {
			nombre: nombrePaciente,
			doctor : doctorName,
			edad : edadPaciente,
			ocupacion: ocupacionPaciente,
			direccion : direccionPaciente,
			telefono : telefonoPaciente,
			ciudad : ciudadPaciente,
			estado : estadoPaciente,
			motivo : motivoPaciente,
			historialClinico : historialClinico,
			ojoDerecho : {
							observaciones : observacionesDerecho,
							RXAnteriorESF : RXAnteriorODESF,
							agudezaVisual : {
												SL : AgudezaODSL,
												AE : AgudezaODAE,
												CV : AgudezaODCV
							},
							retinoscopia : RetOD,
							retinoscopia20 : RetOD20,
							exSubjetivo : SubjetivoOD,
							exSubjetivoCVL : SubjetivoODCVL,
							exSubjetivoCVC : SubjetivoODCVC,
							RXFinalESF : RxFinalODESF,
							RXFinalADD : RxFinalODADD,
							RXFinalAV : RxFinalODAV,
			},
			ojoIzquierdo :{
							observaciones : observacionesIzquierdo,
							RXAnteriorESF : RXAnteriorOIESF,
							agudezaVisual : {
												SL : AgudezaOISL,
												AE : AgudezaOIAE,
												CV : AgudezaOICV
							},
							retinoscopia : RetOI,
							retinoscopia20 : RetOI20,
							exSubjetivo : SubjetivoOI,
							exSubjetivoCVL : SubjetivoOICVL,
							exSubjetivoCVC : SubjetivoOICVC,
							RXFinalESF : RxFinalOIESF,
							RXFinalADD : RxFinalOIADD,
							RXFinalAV : RxFinalOIAV
			},
			tipoLente : tipoLente,
			material : material,
			color : color,
			observacionFinal: observacionesFinales
		};
		console.log(data);
	});

	$('.submitPatient').on('click', function(event) {
		let searchBox =$('.searchBox').val();
		
		searchPatient(searchBox);
	});
}

function onload(){
	$('.searchPatient').show();
	$('.historialForm').hide();
}

function init(){
	$(watchForm);
	$(onload);

}


$(init);