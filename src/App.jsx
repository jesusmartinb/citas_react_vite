// Importamos los componentes
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect( () => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  //     setPacientes(pacientesLS)
  //   }

  //   obtenerLS();
  // }, []);

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );

    setPacientes(pacientesActualizados);
  }

  // const imprime2mas2 = () => {
  //   console.log( 2 + 2 );
  // }

  // Como no podemos pasar props de hijos a padres lo que podemos hacer es lo siguiente con una función que toma un valor y lo imprime por consola, y la función la pasamos como un prop, cuando pasamos funciones como props lo mejor es colocarle el mismo nombre de la función al prop, una vez recibiso el prop por el padre de forma destructurada le podemos pasar una variable como valor y es devuelta la padre
  // const toma1Valor = (valor) => {
  //   console.log(valor); // true desde App.jsx procede de la variable variableHeader en Header.jsx
  // }

  // Los props en React son una forma de pasar variables o funciones de unos componentes a otros. El state o funciones que crees en tus componentes, solo estarán disponibles en ese componente, es una forma de evitar duplicar código y reutilizar esas variables, state o estado y funciones en otros componentes es por medio de Props o propiedades. Los Props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre. Su sintaxis
  // <Header
  //    nombreProp = { datos o funciones }
  //  />

  // Muy importante es que puedes tener un componente en el que le pases todo tipo de datos, arrays booleans, strings,...

  // Si tenemos un state que se va ha pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal o componente principal, cada nivel de componentes deberá tomar y pasar el Prop hacia otros componentes, aunque tecnologías como Redux o Context API evitan tener que hacerlo de esta forma.

  return (
    <div className="container mx-auto mt-20">
      { /* Renderizamos por pantalla el componente importado */ }
      <Header 
        // numeros = { 1 }
        // isAdmin = { false }
        // fn = { imprime2mas2 }
        // toma1Valor = { toma1Valor }
      />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente= { setPaciente }
        />
        <ListadoPacientes 
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }
        />
      </div>
      
    </div>
  )
}

export default App
