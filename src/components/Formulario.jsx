// rcfe genera el snippet

// function Formulario() {
// 	return (
// 		<div>
			
// 		</div>
// 	)
// }

// export default Formulario

// rafce genera el snippet
// import React from 'react'
// Function expresion
import { useState, useEffect } from 'react';
import Error from './Error';

// La pieza más importante de todas las aplicaciones React es el State o estado, es la pieza central de React, es básicamente cuál es el estado de nuestra aplicación, por ejemplo en un carrito de compras, cual es su estado, tiene productos o está vacio, si estoy descargando un listaddo de clientes, ya se descargó o esta vacío, el estado es una variable con información relevante en nuestra aplicación de React, algunas veces el state pertenece a un componente especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes. Por ejemplo si tienes un formulario, puede que tengas un state que valide ese formulario, pero por ejemplo un formulario el state puede estar en el componente principal para pasarlo a otros componentes.
// El state es creado con la función useState(); 
// Su forma de utilización es la siguiente:

// const [cliente, setCliente] = useState({});
// cliente es la variable que contiene el valor del estado
// setCliente se le conoce como el modificador, es la función que va ha modificar la variable cliente y solo puede modificar esa variable no a otras
// useState({}) es la función que contiene unas llaves que quiere decir que ese el el estado inicial, este cliente inicia como un objeto vacio, según se valla ejecutando nuestra aplicación, se descargara un cliente o se pasara por un formulario para darlo de alta, irá cambiando el objeto que se irá llenando
// es una destructuración de arreglo y en el useState se encuentra el valor inicial que en este caso es un objeto vacío
// Podemos tener multiples useState por componente, por ejemplo 
// const [total, setTotal] = useState(0);
// const [clientes, setClientes] = useState([]); array de clientes
// const [modal, setModal] = useState(false); Ventana modal

// React reacciona en base al State, cada vez que el state cambia, la aplicación de React va a renderizar y actualizarse con esos cambios.

//Para modificar el state, se utiliza la función que extraemos cuando declaramos el state en nuestro componente, nunca realizar la modificación por asignación:

// el useState se declara antes del return en la parte superior del componente


// El Hook useEffect es el más común despues del useState, es siempre un callback, vamos ha tener un arrow function que se ejecuta cuando un state cambia o cuando el componente esta listo. Es el sustituto de lo que antes era componentDidMount() y componentDidUpdate()
// Los usos de useEffect son:
// - Al ejecutarse automaticamente cuando el componente esta listo cuando ha cargado, es un excelente lugar para colocar código para consultar una API o  obtener datos de LocalStorage
// - Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable,puede actualizar el componente cuando ese cambio suceda

//  Podemos tener multiples useEffect en los componentes

// Sintaxis de useEffect
// Se ha de importar de react en la parte superior
// import { useEffect } from "react";
//
// useEffect( () => {
// 	console.log('El componente esta listo');
// }, []) ; entre los corchetes del arreglo se situan las dependencias

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	// Reglas de los Hooks
	// Los Hooks se colocan en la parte superior de tus componentes de React. No se deben colocar dentro de condicionales, tampoco después de un return. Declarar los states en el orden que se utilizan en la aplicación
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		// Comprobamos si el objeto esta vacio o no
		if(Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);

		}
	}, [paciente]); // en el array  van las dependencias lo que coloques aquí va ha ser el valor que va ha estar revisando cuando cambie y si cambia, realiza un rerender.
	
	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	}
	
	// No se puede hacer dentro de un condicional
	// const admin = true;
	// if(admin) {
	// 	const [puedeVer, setPuedeVer] = useState(true);
	// }

	// No se puede colocar despues de un return
	// let cargando = true;
	// if(cargando) return;
	// const [estaVisible, setEstaVisible] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación del formulario
		if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
			console.log('Hay al menos un campo vacío')

			setError(true);
			return;
		}

		setError(false);

		// Objeto de paciente
		const objetoPaciente = {
			nombre, 
			propietario, 
			email, 
			fecha, 
			sintomas,
		}

		if(paciente.id) {
			// Editando el registro
			objetoPaciente.id = paciente.id;
			// console.log(objetoPaciente);
			// console.log(paciente);

			const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

			setPacientes(pacientesActualizados);
			setPaciente({});

		} else {
			// Nuevo registro
			// console.log(objetoPaciente);
			// Para no reescribir el arreglo pacientes tenemos que utilizar una copia de lo que ya hay en el state y añadirle el nuevo paciente
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}


		// Reiniciar el formulario
		setNombre('')
		setPropietario('')
		setEmail('')
		setFecha('')
		setSintomas('')

	}

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

			<p className="text-xl mt-5 text-center mb-10">Añade pacientes y {' '}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>

			<form 
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
			>
				{/* Si error es true imprime lo siguiente */}
				{/* { error && <Error mensaje = 'Todos los campos son obligatorios' /> } */}
				{/* Usando children en vez del nombre del prop
				 */}
				{ error && <Error><p>Todos los campos son obligatorios</p></Error> }
				<div className="mb-5">
					<label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>

					<input 
						id="mascota"
						type="text"
						placeholder="Nombre de la Mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						// Leyendo la información escrita en un Input y colocandola en el State
						value={nombre}
						// Evento onChange de react
						onChange={ (e) => setNombre(e.target.value)}
						// Eventos en React
						// La forma en que React manejalos eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.
						// Los eventos son camelCase en lugar de onchange o onclick se usa onChange o onClick
						// También a diferencia de JS y HTML, donde se coloca el nombre de la función en un string en React(JSX) se utiliza el nombre de la función sin comillas entre llaves
						// Ejemplo HTML
						// <button onclick="descargarPedidos()">
						// 	Descargar Pedidos
						// </button>

						// <form onsubmit="agregarCliente(); return false">
						// 	<button type="submit">Submit</button>
						// </form>
						// // Ejemplo JSX
						// <button onClick={ descargarPedidos() }>
						// 	Descargar Pedidos
						// </button>

						// <form onSubmit={handleSubmit}>
						// 	<button type="submit">Añadir Cliente</button>
						// </form>
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>

					<input 
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={ (e) => setPropietario(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>

					<input 
						id="email"
						type="email"
						placeholder="Email Contacto Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={ (e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>

					<input 
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={ (e) => setFecha(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>

					<textarea 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas"
						placeholder="Describe los Sintomas"
						value={sintomas}
						onChange={ (e) => setSintomas(e.target.value)}	
					></textarea>
				</div>

				<input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" type="submit" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } />
			</form>
		</div>
	)
}

export default Formulario
