
function displayClinic(data, number){
	$('.displayResults').html("");

	let range;

	if(data.length < number)
		range = data.length;
	else
		range = number;

	for(let i = 0; i< range ;i++){
		$('.displayResults').append(`
								<fieldset>
									<form class="historialForm">
										<div><input class="idP" type="hidden" value="${data[i]._id}"/></div>		
										<div class="Paciente">

											
											<h3>
												Datos del paciente
											</h3>
											<div>
												<label for="Nombre">
												<b>
													Doctor
												</b>
												</label>
												<input disabled="disabled class="doctorName" type="text" value="${data[i].doctor}">
											</div>

											<label for="Nombre">
												<b>
													Nombre
												</b>
											</label>
											<input disabled="disabled class="nombrePaciente" type="text" value="${data[i].nombre}">

											<label for="Edad">
												<b>
													Fecha de nacimiento
												</b>
											</label>
											<input disabled="disabled class="edadPaciente" type="date" value="${data[i].edad}">

											<label for="Ocupacion">
												<b>
													Ocupacion
												</b>
											</label>
											<input disabled="disabled class="ocupacionPaciente" type="text" value="${data[i].ocupacion}">

											<label for="Dirrecion">
												<b>
													Dirección
												</b>
											</label>
											<input disabled="disabled class="direccionPaciente" type="text" value="${data[i].direccion}">

											<label for="Tel">
												<b>
													Telefono
												</b>
											</label>
											<input disabled="disabled class="telefonoPaciente" type="text" value="${data[i].telefono}">

											<label for="CD">
												<b>
													Ciudad
												</b>
											</label>
											<input disabled="disabled class="ciudadPaciente" type="text" value="${data[i].ciudad}">

											<label for="Estado">
												<b>
													Estado
												</b>
											</label>
											<input disabled="disabled class="estadoPaciente" type="text" value="${data[i].estado}">

											<label for="Motivo de Consulto">
												<b>
													Motivo de Consulta
												</b>
											</label>
											<input disabled="disabled class="motivoPaciente" type="text" value="${data[i].motivo}">

											<label for="HistorialClinico">
												<b>
													Historial Clinico
												</b>
											</label>

											<textarea disabled="disabled class="historialClinico" value="${data[i].historialClinico}" >${data[i].historialClinico}</textarea>
										</div>

										<div class="Oftalmoscopia">
											<h3>
												Oftalmoscopia 
											</h3>
										</div>

										<span>
												Observaciones Ojo Derecho
												<textarea disabled="disabled class="observacionesDerecho" rows="4" cols="50"  value="${data[i].ojoDerecho.observaciones}">${data[i].ojoDerecho.observaciones}</textarea>
										</span>
										<span>
												Observaciones Ojo Izquierdo 
												<textarea disabled="disabled class="observacionesIzquierdo" rows="4" cols="50" value="${data[i].ojoIzquierdo.observaciones}" >${data[i].ojoIzquierdo.observaciones}</textarea>
										</span>


											<!-- Flexbox -->
											<!-- RX Anterior -->
											<span>
											<table>
												<tr>
													<th>
														RX. Anterior
													</th>
												</tr>
												<tr>
													<th> 
														ESF CIL EJE ADD
													</th>
												</tr>
												<tr>
													<th>
														<span>
															O.D.
														</span>
														<input disabled="disabled class="RXAnteriorODESF" type="text" value="${data[i].ojoDerecho.RXAnteriorESF}" >
													</th>
												</tr>
												<tr>
													<th>
														<span> O.I. </span>
														<input disabled="disabled class="RXAnteriorOIESF" type="text" value="${data[i].ojoIzquierdo.RXAnteriorESF}">
													</th>
												</tr>
											</table>
											</span>

											<!-- Agudeza Visual -->
											<span>
											<table>
												<tr>
													<th> </th>
													<th> Agudeza Visual </th>
													<th> RX Anterior </th>
												</tr>
												<tr>
													<th> S/L </th>
													<th> A/E </th>
													<th> C.V </th>
												</tr>
												<tr>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaODSL" type="text" value="${data[i].ojoDerecho.agudezaVisual.SL}"> </th>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaODAE" type="text" value="${data[i].ojoDerecho.agudezaVisual.AE}"> </th>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaODCV" type="text" value="${data[i].ojoDerecho.agudezaVisual.CV}"> </th>
												</tr>
												<tr>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaOISL" type="text" value="${data[i].ojoIzquierdo.agudezaVisual.SL}"> </th>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaOIAE" type="text" value="${data[i].ojoIzquierdo.agudezaVisual.AE}"> </th>
													<th> <span> 20/ </span> <input disabled="disabled class="AgudezaOICV" type="text" value="${data[i].ojoIzquierdo.agudezaVisual.CV}"> </th>
												</tr>
											</table>
											</span>

											<!-- Retinscopia -->
											<span>
											<table>
												<tr>
													<th> Retinoscopia </th>
												</tr>
												<tr>
													<th> <span> O.D. </span>   <input disabled="disabled class="RetOD" type="text" value="${data[i].ojoDerecho.retinoscopia}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="RetOD20" type="text" value="${data[i].ojoDerecho.retinoscopia20}"> </th>
												</tr>
												<tr>
													<th> <span> O.I. </span>   <input disabled="disabled class="RetOI" type="text" value="${data[i].ojoIzquierdo.retinoscopia}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="RetOI20" type="text" value="${data[i].ojoIzquierdo.retinoscopia20}"> </th>
												</tr>
											</table>
											</span>


											<!-- Examen Subjetivo-->
											<span> 
											<table>
												<tr>
													<th> Examen Subjetivo </th>
													<th> C/V L </th>
													<th> C/V C </th>
												</tr>
												<tr>
													<th> <span> O.D. </span>   <input disabled="disabled class="SubjetivoOD" type="text" value="${data[i].ojoDerecho.exSubjetivo}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="SubjetivoODCVL" type="text" value="${data[i].ojoDerecho.exSubjetivoCVL}"> </th>
													<th> <input disabled="disabled class="SubjetivoODCVC" type="text" value="${data[i].ojoDerecho.exSubjetivoCVC}"> </th>
												</tr>
												<tr>
													<th> <span> O.I. </span>   <input disabled="disabled class="SubjetivoOI" type="text" value="${data[i].ojoIzquierdo.exSubjetivo}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="SubjetivoOICVL" type="text" value="${data[i].ojoIzquierdo.exSubjetivoCVL}"> </th>
													<th> <input disabled="disabled class="SubjetivoOICVC" type="text" value="${data[i].ojoIzquierdo.exSubjetivoCVC}"> </th>
												</tr>

											</table>
											</span>

											<div>
												<h3>
													RX Final
												</h3>
											</div>

											<div>
											<table>
												<tr>
													<th> ESF CIL EJE </th>
													<th> ADD. </th> 
													<th> A/V </th>
													<th> Tipo Lente </th>
													<th> Material </th>
													<th> Color </th>
												</tr>
												<tr>
													<th> <span> O.D. </span>   <input disabled="disabled class="RxFinalODESF" type="text" value="${data[i].ojoDerecho.RXFinalESF}"> </th>
													<th> <input disabled="disabled class="RxFinalODADD" type="text" value="${data[i].ojoDerecho.RXFinalADD}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="RxFinalODAV" type="text" value="${data[i].ojoDerecho.RXFinalAV}"> </th>
													<th> <input disabled="disabled class="tipoLente" type="text" value="${data[i].tipoLente}"> </th>
													<th> <input disabled="disabled class="material" type="text" value="${data[i].material}"> </th>
													<th> <input disabled="disabled class="color" type="text" value="${data[i].color}"> </th>
												</tr>
												<tr>
													<th> <span> O.I. </span>   <input disabled="disabled class="RxFinalOIESF" type="text" value="${data[i].ojoIzquierdo.RXFinalESF}"> </th>
													<th> <input disabled="disabled class="RxFinalOIADD" type="text" value="${data[i].ojoIzquierdo.RXFinalADD}"> </th>
													<th> <span> 20/ </span>   <input disabled="disabled class="RxFinalOIAV" type="text" value="${data[i].ojoIzquierdo.RXFinalAV}"> </th>
												</tr>
											</table>
											</div>

										<span>
												Observaciones Finales					
												<textarea disabled="disabled class="observacionesFinales" value="">${data[i].observacionFinal}</textarea>
										</span>

										<div>
										<button type="submit" class="modifyButton"> 
												Modify
											</button>
										</div>
												
									</form>
									<p></p>
								</fieldset>

		`);
	}
}


function watchForm(){
	$('.submitButton').on('click',function(event){
		event.preventDefault();
		let searchTerm = $('.searchBox').val();
		let selector = $('.selectSearch').val();
		let numero;

		if ($('.advancedSearch').is(":checked"))
			numero = $('.resultNumber').val();
		else
			numero = 50;

		let busqueda = selector

		let url = `./optic-api/clinic/${selector}/${searchTerm}`;

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
				displayClinic(responseJSON.clinic,numero);
			})
			.catch(err => {
				console.log(err);
			});

	});
}

function modClinic(data){
	$('.displayResults').html("");

	
	$('.displayResults').html(`
							<fieldset>
								<form class="historialForm">
									<div><input class="idP" type="hidden" value="${data._id}"/></div>
									<div class="Paciente">

										
										<h3>
											Datos del paciente
										</h3>
										<div>
											<label for="Nombre">
												<b>
													Doctor
												</b>
											</label>
											<input class="doctorName" type="text" value="${data.doctor}">
										</div>

										<label for="Nombre">
											<b>
												Nombre
											</b>
										</label>
										<input class="nombrePaciente" type="text" value="${data.nombre}">

										<label for="Edad">
											<b>
												Fecha de nacimiento
											</b>
										</label>
										<input class="edadPaciente" type="date" value="${data.edad}">

										<label for="Ocupacion">
											<b>
												Ocupacion
											</b>
										</label>
										<input class="ocupacionPaciente" type="text" value="${data.ocupacion}">

										<label for="Dirrecion">
											<b>
												Dirección
											</b>
										</label>
										<input class="direccionPaciente" type="text" value="${data.direccion}">

										<label for="Tel">
											<b>
												Telefono
											</b>
										</label>
										<input class="telefonoPaciente" type="text" value="${data.telefono}">

										<label for="CD">
											<b>
												Ciudad
											</b>
										</label>
										<input class="ciudadPaciente" type="text" value="${data.ciudad}">

										<label for="Estado">
											<b>
												Estado
											</b>
										</label>
										<input class="estadoPaciente" type="text" value="${data.estado}">

										<label for="Motivo de Consulto">
											<b>
												Motivo de Consulta
											</b>
										</label>
										<input class="motivoPaciente" type="text" value="${data.motivo}">

										<label for="HistorialClinico">
											<b>
												Historial Clinico
											</b>
										</label>

										<textarea class="historialClinico" value="" >${data.historialClinico}</textarea>
									</div>

									<div class="Oftalmoscopia">
										<h3>
											Oftalmoscopia 
										</h3>
									</div>

									<span>
											Observaciones Ojo Derecho
											<textarea class="observacionesDerecho" rows="4" cols="50"  value="">${data.ojoDerecho.observaciones}</textarea>
									</span>
									<span>
											Observaciones Ojo Izquierdo 
											<textarea class="observacionesIzquierdo" rows="4" cols="50" value="" >${data.ojoIzquierdo.observaciones}</textarea>
									</span>


										<!-- Flexbox -->
										<!-- RX Anterior -->
										<span>
										<table>
											<tr>
												<th>
													RX. Anterior
												</th>
											</tr>
											<tr>
												<th> 
													ESF CIL EJE ADD
												</th>
											</tr>
											<tr>
												<th>
													<span>
														O.D.
													</span>
													<input class="RXAnteriorODESF" type="text" value="${data.ojoDerecho.RXAnteriorESF}" >
												</th>
											</tr>
											<tr>
												<th>
													<span> O.I. </span>
													<input class="RXAnteriorOIESF" type="text" value="${data.ojoIzquierdo.RXAnteriorESF}">
												</th>
											</tr>
										</table>
										</span>

										<!-- Agudeza Visual -->
										<span>
										<table>
											<tr>
												<th> </th>
												<th> Agudeza Visual </th>
												<th> RX Anterior </th>
											</tr>
											<tr>
												<th> S/L </th>
												<th> A/E </th>
												<th> C.V </th>
											</tr>
											<tr>
												<th> <span> 20/ </span> <input class="AgudezaODSL" type="text" value="${data.ojoDerecho.agudezaVisual.SL}"> </th>
												<th> <span> 20/ </span> <input class="AgudezaODAE" type="text" value="${data.ojoDerecho.agudezaVisual.AE}"> </th>
												<th> <span> 20/ </span> <input class="AgudezaODCV" type="text" value="${data.ojoDerecho.agudezaVisual.CV}"> </th>
											</tr>
											<tr>
												<th> <span> 20/ </span> <input class="AgudezaOISL" type="text" value="${data.ojoIzquierdo.agudezaVisual.SL}"> </th>
												<th> <span> 20/ </span> <input class="AgudezaOIAE" type="text" value="${data.ojoIzquierdo.agudezaVisual.AE}"> </th>
												<th> <span> 20/ </span> <input class="AgudezaOICV" type="text" value="${data.ojoIzquierdo.agudezaVisual.CV}"> </th>
											</tr>
										</table>
										</span>

										<!-- Retinscopia -->
										<span>
										<table>
											<tr>
												<th> Retinoscopia </th>
											</tr>
											<tr>
												<th> <span> O.D. </span>   <input class="RetOD" type="text" value="${data.ojoDerecho.retinoscopia}"> </th>
												<th> <span> 20/ </span>   <input class="RetOD20" type="text" value="${data.ojoDerecho.retinoscopia20}"> </th>
											</tr>
											<tr>
												<th> <span> O.I. </span>   <input class="RetOI" type="text" value="${data.ojoIzquierdo.retinoscopia}"> </th>
												<th> <span> 20/ </span>   <input class="RetOI20" type="text" value="${data.ojoIzquierdo.retinoscopia20}"> </th>
											</tr>
										</table>
										</span>


										<!-- Examen Subjetivo-->
										<span> 
										<table>
											<tr>
												<th> Examen Subjetivo </th>
												<th> C/V L </th>
												<th> C/V C </th>
											</tr>
											<tr>
												<th> <span> O.D. </span>   <input class="SubjetivoOD" type="text" value="${data.ojoDerecho.exSubjetivo}"> </th>
												<th> <span> 20/ </span>   <input class="SubjetivoODCVL" type="text" value="${data.ojoDerecho.exSubjetivoCVL}"> </th>
												<th> <input class="SubjetivoODCVC" type="text" value="${data.ojoDerecho.exSubjetivoCVC}"> </th>
											</tr>
											<tr>
												<th> <span> O.I. </span>   <input class="SubjetivoOI" type="text" value="${data.ojoIzquierdo.exSubjetivo}"> </th>
												<th> <span> 20/ </span>   <input class="SubjetivoOICVL" type="text" value="${data.ojoIzquierdo.exSubjetivoCVL}"> </th>
												<th> <input class="SubjetivoOICVC" type="text" value="${data.ojoIzquierdo.exSubjetivoCVC}"> </th>
											</tr>

										</table>
										</span>

										<div>
											<h3>
												RX Final
											</h3>
										</div>

										<div>
										<table>
											<tr>
												<th> ESF CIL EJE </th>
												<th> ADD. </th> 
												<th> A/V </th>
												<th> Tipo Lente </th>
												<th> Material </th>
												<th> Color </th>
											</tr>
											<tr>
												<th> <span> O.D. </span>   <input class="RxFinalODESF" type="text" value="${data.ojoDerecho.RXFinalESF}"> </th>
												<th> <input class="RxFinalODADD" type="text" value="${data.ojoDerecho.RXFinalADD}"> </th>
												<th> <span> 20/ </span>   <input class="RxFinalODAV" type="text" value="${data.ojoDerecho.RXFinalAV}"> </th>
												<th> <input class="tipoLente" type="text" value="${data.tipoLente}"> </th>
												<th> <input class="material" type="text" value="${data.material}"> </th>
												<th> <input class="color" type="text" value="${data.color}"> </th>
											</tr>
											<tr>
												<th> <span> O.I. </span>   <input class="RxFinalOIESF" type="text" value="${data.ojoIzquierdo.RXFinalESF}"> </th>
												<th> <input class="RxFinalOIADD" type="text" value="${data.ojoIzquierdo.RXFinalADD}"> </th>
												<th> <span> 20/ </span>   <input class="RxFinalOIAV" type="text" value="${data.ojoIzquierdo.RXFinalAV}"> </th>
											</tr>
										</table>
										</div>

									<span>
											Observaciones Finales					
											<textarea class="observacionesFinales" value="${data.observacionFinal}">${data.observacionFinal}</textarea>
									</span>

									<div>
									<button type="submit" class="submitButton"> 
											Guardar
										</button>
									</div>
											
								</form>
							</fieldset>

		`);
}


$('.displayResults').on('click','.modifyButton', function(event) {
	event.preventDefault();

	let idP = $(this).parent().parent().find('.idP').val();


	let url = `./optic-api/clinicGet/${idP}`;
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

			modClinic(responseJSON.clinic);
		})
		.catch(err => {
			console.log(err);
		});

})

$('.displayResults').on('click','.submitButton', function(event) {
	event.preventDefault();

	let idP = $(this).parent().parent().find('.idP').val();


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


	let url = `./optic-api/clinic/${idP}`;
	let settings = {
					method : 'PUT',
					headers : {
						'Content-Type' : 'application/json'
					},
					body : JSON.stringify(data)
				};

	fetch(url, settings)
		.then(response => {
			if (response.ok){
				return response.json();
			}
			else{
				return new Promise(function(resolve, reject){
					resolve(response.json());
				})
				.then(data =>{
					throw new Error(data.message);
				})
			}
		})
		.then(responseJSON => {
			alert('Clinic History updated successfully')
			window.open("./search.html", "_self");
		})
		.catch(err => {
			console.log(err);
		});


})
$(watchForm);