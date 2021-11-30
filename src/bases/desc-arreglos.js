//Desestructuración de arreglo 

const personajes = ['Gocku', 'Vegeta', 'Trunks'];
const [ , , tercerPosicion] = personajes;
console.log(tercerPosicion);


//FUNCIÓN QUE RETORNE UN ARREGLO

const arreglo = ()=> {
  return ['ABC',123]
}

const [ letras, numeros ] = arreglo();
console.log(letras , numeros);


//

const UseStatee = (valor)=>{
  return [valor, ()=>{console.log("Hola mundo")}]
}


// const {nombre, setNombre} = UseStatee('José');
// console.log(nombre);
// setNombre();
// //console.log(arr[1]())