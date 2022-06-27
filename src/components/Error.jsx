// const Error = ({mensaje}) => {
//   return (
//     <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
//         <p>{mensaje}</p>
//     </div>
//   )
// }

// Otra forma de pasar props es la siguiente, usando la palabra reservada children en lugar de tomar el nombre de un prop, children hace referencia a todo lo que le pases a un componente, también cambia un poco la sintaxis del componente padre, children almacena todo lo que pases al componente hijo que tiene la ventaja de que te permite pasar más elementos HTML
const Error = ({children}) => {
    return (
      <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
          {children}
      </div>
    )
  }


export default Error