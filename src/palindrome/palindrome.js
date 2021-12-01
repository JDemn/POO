const palindrome =( number )=>{

    const secondStr = number.trim().split('').reverse().join('')
    return number === secondStr ? console.log('soy un palindrome'):console.log('no soy un palindrome');
}

const phrase = 'hola eres la mera reverenda';
palindrome( phrase );

const x = '3'
const y = 3;

if(x==y){
    console.log('somos iguales');
}else {
    console.log('no somos iguales');
}