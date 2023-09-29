import React, { useState } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';

const App = () => {
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);


	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Registrar Cliente</Boton>
				<Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Crear Usuario</Boton>
				<Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Consultar Cliente</Boton>
				<Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Lista General Clientes</Boton>
			</ContenedorBotones>

			{/*  Modal # 1 */}
			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Registrar CLiente"
				mostrarHeader={true}
				mostrarOverlay={true}
				pocisionModal={"center"}
				padding={'20px'}

			>
				<Contenido>

					<form1>
						<label htmlFor="tipoIdentificacion">Tipo de identificación:</label>
						<select id="tipoId" name="tipoId">
							<option value="Seleccionar tipo de id" data-calc="">Tipo de identificación</option>
							<option value="cedula">Cédula</option>
							<option value="TI">TI</option>
							<option value="pasaporte">Pasaporte</option>
						</select>
						<label htmlFor="identification">Número de Identificación:</label>
						<input type="text" placeholder="Ingrese numero de identificación " id="identification" name="identification" required />

						<label htmlFor="names">Nombres:</label>
						<input type="text" placeholder="Ingrese nombre" id="names" name="names" required />

						<label htmlFor="lastNames">Apellidos:</label>
						<input type="text" placeholder="Ingrese apellidos" id="lastNames" name="lastNames" required />

						<label htmlFor="address">Dirección:</label>
						<input type="text" placeholder="Ingresar dirección" id="address" name="address" required />

						<label htmlFor="phone">Teléfono:</label>
						<input type="tel" placeholder="Ingresar N° de telefono" id="phone" name="phone" required />

						<label htmlFor="email">Email:</label>
						<input type="email" placeholder="Ingresar un email valido" id="email" name="email" required />

						<label htmlFor="birthDate">Fecha de Nacimiento:</label>
						<input type="date" id="birthDate" name="birthDate" required />

						<button className="button" type="submit" id="saveUpdateBtn">Guardar/Actualizar</button>
					</form1>

					<div className="user-image">
						<img id="userImage" src="images/21294.png" alt="Imagen del Usuario" />
						<input type="file" id="imageInput" />
					</div>
					<div>
						<button className="button" type="button" id="uploadImageBtn">Subir Imagen</button>
						<button className="button" type="button" id="deleteImageBtn">Eliminar Imagen</button>
					</div>
					<div>
						<button className="button" type="button" id="clearFieldsBtn">Limpiar Campos</button>
						<button className="button" type="button" id="deleteUserBtn">Eliminar Registro</button>
						<button className="button" type="button" id="searchUserBtn5">Buscar Cliente</button>
						<input type="text" id="searchInput" placeholder="Ingrese el número de identificación" />
					</div>



					{/*<Boton>Aceptar</Boton>*/}
				</Contenido>
			</Modal>

			{/*  Modal # 2 */}
			<Modal
				estado={estadoModal2}
				cambiarEstado={cambiarEstadoModal2}
				titulo="Crear Usuario"
				mostrarHeader={true}
				mostrarOverlay={true}
				pocisionModal={"center"}
				padding={'20px'}
			>
				<Contenido>

					<form1>
						<label htmlFor="rol">Seleccione un rol:</label>
						<select id="tipoRol" name="tipoROl">
							<option value="Seleccionar tipo de rol" data-calc="">Selecione un rol</option>
							<option value="Administrador/Propietario">Administrador/Propietario</option>
							<option value="Cajero (a)">Cajero (a)</option>
							<option value="Cliente">Cliente</option>
						</select>
						<label htmlFor="identification">Número de Identificación:</label>
						<input type="text" placeholder="Ingrese numero de identificación " id="identification" name="identification" required />

						<label htmlFor="names">Nombres:</label>
						<input type="text" placeholder="Ingrese nombre" id="names" name="names" required />

						<label htmlFor="lastNames">Apellidos:</label>
						<input type="text" placeholder="Ingrese apellidos" id="lastNames" name="lastNames" required />

						<label htmlFor="address">Dirección:</label>
						<input type="text" placeholder="Ingresar dirección" id="address" name="address" required />

						<label htmlFor="phone">Teléfono:</label>
						<input type="tel" placeholder="Ingresar N° de telefono" id="phone" name="phone" required />

						<label htmlFor="email">Email:</label>
						<input type="email" placeholder="Ingresar un email valido" id="email" name="email" required />

						<label htmlFor="birthDate">Fecha de Nacimiento:</label>
						<input type="date" id="birthDate" name="birthDate" required />

						<button className="button" type="submit" id="saveUpdateBtn">Guardar/Actualizar</button>
					</form1>

					<div className="user-image">
						<img id="userImage" src="images/21294.png" alt="Imagen del Usuario" />
						<input type="file" id="imageInput" />
					</div>
					<div>
						<button className="button" type="button" id="uploadImageBtn">Subir Imagen</button>
						<button className="button" type="button" id="deleteImageBtn">Eliminar Imagen</button>
					</div>
					<div>
						<button className="button" type="button" id="clearFieldsBtn">Limpiar Campos</button>
						<button className="button" type="button" id="deleteUserBtn">Eliminar Registro</button>
						<button className="button" type="button" id="searchUserBtn5">Buscar Cliente</button>
						<input type="text" id="searchInput" placeholder="Ingrese el número de identificación" />
					</div>


				</Contenido>
			</Modal>

			{/*  Modal # 3 */}
			<Modal
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo="Consultar Cliente"
				mostrarHeader={true}
				mostrarOverlay={true}
				pocisionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<section>
						<form >
							<label htmlFor="identificationType">Tipo de Identificación:</label>
							<select id="identificationType" required>
								<option value="">Seleccione...</option>
								<option value="Cedula">Cédula</option>
								<option value="T.I">T.I</option>
								<option value="Pasaporte">Pasaporte</option>
							</select>

							<label htmlFor="identificationNumber">Número de Identificación:</label>
							<input type="text" id="identificationNumber" required />

							<button type="submit">Consultar</button>
						</form>
					</section>


				</Contenido>
			</Modal>

			{/*  Modal # 4 */}
			<Modal
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo="Listado de clientes con acceso a crédito"
				mostrarHeader={true}
				mostrarOverlay={true}
				pocisionModal={"center"}
				padding={'20px'}
			>
				<Contenido>

					<section1>
						<div className="modal">
							<div className="modal-content4">
								<div className="modal_container">
									
									<div className="search-bar">
										<input type="text" id="searchInput1" placeholder="Buscar por nombre o identificación" />
										<button onClick= 'x' id="searchBtn">Buscar</button>
									</div>
									<div id="clientListContainer" className="client-list-container"></div>
									<div className="navigation-buttons">
										<button id="scrollUpBtn">↑</button>
										<button id="scrollDownBtn">↓</button>
									</div>
									<div id="clientList"></div>
									<div className="total-debt">
										<label>Total Adeudado:</label>
										<span id="totalDebt">$0.00</span>
										<button id="generatePDFBtn">Generar PDF</button>
									</div>
									
								</div>
							</div>
						</div>
					</section1>

					
				</Contenido>
			</Modal>

		</div>

	);

}

export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: colum;
	align-items: left;
	overflow: auto;

	

	form1 {
		width:100%;
		margin-top: 15px;
		display: absolute;
		flex-direction: colum;
		justify-content: left;
		align-items: left;
	}

	form1 input {
		display: auto;
		flex-direction:none;
		margin: 10%;
		padding: 10px;
		
		
	}

		input[type="text"],
		input[type="tel"],
		input[type="email"],
		input[type="date"],
		select {
 	 	width: 95%;
 	 	padding: 6px;
 		margin-bottom: 10px;
  		border: 1px solid #125103;
  		border-radius: 25px;
  		background-color: #f9f2e3f7;
  		font-size: 1rem;
  		font-weight: 200;
  		font-style: italic;
  		margin-top: 0%;
  
	}

	label[type="text"],
	label[type="tel"],
	label[type="email"],
	label[type="date"],
	label {
		padding: 6px;
		font-size: 0.9rem;
		font-style: italic;
		font-weight: 500;
		margin: 20%;
		margin-bottom: 0px;
  
		
	}


	button { 
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 20px;
		padding: 5px 10px;
		cursor: pointer;
		margin-right: 5px;
		margin-bottom: 5px;
	  }

	  
	  
	  
	  
	  
	  #userImage{
		opacity: 50%;
		position: relative;
		width: 120px;
 		height: 100px;
  		left:140px;
  		top: 50px;

	  }

	  #imageInput{
		font-size: 0.5rem ;
		position: relative;
		padding: 1px;
		border-radius: 0;
		left:140px;
  		top: 50px;
		
		}

	  
		#uploadImageBtn{
			position: relative;
			width: 150%;
  			left:-45px;
  			top: 110px;
			
		}

		#deleteImageBtn{
			position: relative;
			width: 150%;
			left:95px;
			top: 80px;

		}

		#clearFieldsBtn{
			margin-top: 130%;
			background-color: #166901;
			position: relative;
			width: 70%;
			left:-140px;
			
		  }

		  #deleteUserBtn{
			background-color: #ee0505;
			position: relative;
			width: 70%;
			left:2px;
			top: -5%;
		  }

		  #searchUserBtn5{
			margin-top: 30px;
			margin-left:10px;
		  }
	
		  #searchInput{
			width: 150%;
			margin-top:2%;
			margin-left:-100px;
		  }
	
	

		  #deleteUserBtn:hover{
			color: #000;
			background-color: #f67171;
		  }

		  #clearFieldsBtn:hover{
			color: #000;
			background-color: #52f00d;
		  }
		  
		  #saveUpdateBtn{
		  margin-top: auto;
		  max-width: 50%;
		  }
		  
		  .button:hover {
			background-color: #0056b3;
		  }

		  section{
			background-color: rgb(250, 249, 238);
			max-width: 450px;
			position: relative;
			padding: 50px;
			margin-left: 150px;
  			
		  }

		  section1{
			background-color: rgb(234, 255, 218);
			max-width: 800px;
			position: relative;
			padding: 100px;
			margin-left: 150px;
		  }

		  #searchInput1{
			width:100%;
		  }

`;

