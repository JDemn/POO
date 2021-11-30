import{getHeroeById} from './bases/imp-export'
//promesas

// const promesa  = new Promise((resolve, reject )=>{
//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el Heroe');
//     }, 2000)
// });

/*
promesa.then((heroe)=>{
    console.log('HEROE' , heroe); // viene de la promesa a través de resolve()
})

promesa.catch((err)=>{
    console.log(err);
}) */

const getHeroeByIdAsync = (id)=> {

    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            const heroe = getHeroeById(id);
            //resolve(heroe);
            if(heroe!== undefined){
                resolve(heroe);
            } else {
                reject(heroe);
            }
        }, 2000)
    })

}

getHeroeByIdAsync(9)
    .then(heroe => console.log(heroe))
    .catch(heroe=> console.warn("El heroe que buscas no existe"))
    // .reject(()=>{

    // })