//Objetos literales

const persona = {
    name : 'Pillo',
    lastName : 'Stark',
    adge : 45,
    direccion : {
      city : 'New york',
      zip : 63563535,
      lat : 34.6353543,
      long : 34.334356,
    }
};
  
  //console.table({persona});
  console.log({persona : persona.direccion}); 
  
  
  //crear un segundo objeto en base al primero
  
  const persona2 = {...persona};
  persona2.name ='Francisco';
  console.log(persona2);