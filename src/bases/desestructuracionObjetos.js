const persona = {
    name : 'José',
    apellido : 'Deniz',
    edad : 46,
    clave : 7,
  }
  
  //Desestructuración de objetos
  
  const {name, apellido} = persona;  //solo con el nombre de las propiedades del objeto
  console.log(name);
  console.log(apellido);
  /*
  const{name :nombre2, apellido : lastName} = persona;  //con una propiedad asiganda por nosotros
  
  console.log(nombre2);
  console.log(lastName); */
  
  //REGRESAR OBJETO IMPLICITO EN UNA FUNCIÓN
  
  const retornarPersona =(usuario)=>{
    console.table(usuario);
  }
  
  retornarPersona(persona);
  
  //Deasestructurar objeto implicito en una función
  
  const retornarP = ({name,apellido ,edad,clave}) => {
    console.log( name, apellido,edad,clave);
  }
  
  retornarP(persona); //le mando el objeto y lo desestructuro en el argumento
  
  //DESESTRUCTURACIÓN DE OBJETO IMPLICITO 'persona' EN FUNCIÓN y retornar otro objeto implicito que recibe las propiedades de persona
  
  const personaa =({edad,clave})=>{
    return {
      nombreClave :clave,
      anios : edad,
      latLg :{
        lat : 321343,
        lg : 7812875, 
      }
    }
  }
  
  const {nombreClave, anios, latLg : {lat, lg}} = personaa(persona);
  console.log('aquí');
  console.table(nombreClave,anios);
  console.log(lat,lg);