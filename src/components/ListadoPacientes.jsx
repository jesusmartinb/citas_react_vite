import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente }) => {

	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

			{ pacientes && pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Administra tus {' '}
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
		
					{/* { pacientes.map( (paciente, index) => (
						// iterar y utilizar el index de un arreglo para establecer un key único es una mala práctica en React, ya que puedes añadir y eliminar elementos del arreglo y el recalculo de los indices supone mucha perdida de performance en su lugar podemos utilizar Date.now() que genera un número que es dificil que se repita, ahora bien si dos personas escriben al mismo tiempo si puede ser igual, pero se puede mejorar mezclandolo con la función Math.random().toString(36).substr(2) que elimina los dos primeros caracteres que siempre son 0. Hay un Hook de React que también genera un identificador único pero tiene muchos problemas. Utilizamos una función que con estas consideraciones generé un Id en el objetoPaciente de Formulario.jsx
		
						<Paciente
							key = { index } 
							paciente = { paciente }
						/>
					))} */}
		
					{ pacientes.map( paciente => (
						<Paciente
							key = { paciente.id } 
							paciente = { paciente }
							setPaciente = { setPaciente }
							eliminarPaciente = { eliminarPaciente }
						/>
					))}
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Comienza agregando pacientes {' '}
						<span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
					</p>
				</>
			) }

			

			
			
			
		</div>
	)
}

export default ListadoPacientes