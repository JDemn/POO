//import { heroes } from './data/heroes'; {} para exportaciones individuales
import heroes from "../data/heroes";

/*
const getHeroeById=(id)=>{
    return heroes.find((heroe) => {
        // if(heroe.id.toString().includes(id)){
        //     console.log('si existe')
        // } else {
        //     console.log('Es probable que el heroe que estás buscando no exista en la DB');
        // }
        if(heroe.id === id){
            return true;
        } else {
            return false;
        }
    });
}
*/
//misma función de arriba pero optimizada
export const getHeroeById = (id)=> heroes.find(heroe=>heroe.id=== id);

//console.log(getHeroeById(3));

//function
export const getHeroeByOwner = (owner)=>{
 return heroes.filter(heroe => heroe.owner === owner)
}
console.log(getHeroeByOwner('DC'));