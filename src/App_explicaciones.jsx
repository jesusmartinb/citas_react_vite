// Usando Vite como herramienta para crear apps en React los archivos javaScript han de tener obligatoriamente la extensión .jsx. Constituyen los componentes En estos archivos: tenemos una función que define el componente con dos partes, antes del return donde colocaremos el código javaScript y lo que está dentro del return que es lo que se verá por pantalla y no puede contener código javaScript tipo funciones, validaciones o condicionales solo puede contener HTML y lo que se conocen como expresiones, operador, ternario o algún método para string, y se debe colocar entre llaves
function App() {

  const sumar = () => {
    const numero = 5;
    if(numero > 5) {
      console.log('Si es mayor');
    } else {
      console.log('No es mayor');
    }

    console.log(2 + 2)
  }

  const edad = 18;

  sumar();
  return (
    // Un elemento con etiqueta de apertura y cierre debe tener ambas etiquetas
    // Un elemento con etiqueta solo de apertura debe finalizar con />
    // Cada componente debe contener un return que es lo que se muestra por pantalla
    // En el nivel más alto solo se puede retornar un elemento el cual puede ser <> </> si se trata de un div para simplificar
    // Es código JavaScript con aceso a todo lo que ofrece HTML
    <div>
      { 1 + 1 }
      { edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad' }
      <h1>{'Hola Mundo!!!'.toUpperCase()}</h1>
      <p>Un párrafo</p>
      <img src="" alt="" />
      <input type="text" name="" id="" />
    </div>
  )
}

export default App
