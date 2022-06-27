// Los componentes deben ser nombrados con la primera letra en mayúsculas, tanto el archivo como el nombre de la función o componente
// function declaration
function Header() {
// function Header({toma1Valor}) {
	// Para leer los props que hemos pasado desde el componente padre los recibimos como un parámetro en la función Header, un parámetro del componente. También se puede aplicar destructuring de los props en el parámetro de la función por ejemplo {numeros, isAdmin, fn} de todos o de aquellas variables que necesitemos
	//console.log(props);

	// La variable se pasa a la función recibida desde el padre y así es retornada al padre
	// const variableHeader = true;

	// toma1Valor(variableHeader);

	return (
			<h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
				Seguimiento Pacientes {' '}
				<span className="text-indigo-600">Veterinaria</span>
			</h1>
	)
}


// Para poder importarlo en App.jsx debemos exportarlo
export default Header;