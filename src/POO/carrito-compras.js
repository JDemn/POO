class Producto{
    constructor( name, departament, price, descuento ){
        this.name = name;
        this.departament = departament;
        this.price = price;
        this.descuento = descuento;
    }

}



const stockProductos = ['sbritas', 'coca cola', 'jumex', 'pepsi', 'sushi'];
const departaments = ['frutas y verduras', 'abarrotes', 'lacteos','ropa'];
const preciosXproducto = [12,14,12,14,44];
let descuento = false;

const producto = new Producto(stockProductos,departaments, preciosXproducto, descuento);
console.log(producto.name);
console.log(producto.departament);
console.log(producto.price);
console.log(producto.descuento);

class Carrito extends Producto {

    constructor (name,departament,price,descuento,wishList){
        super(name, departament, price, descuento);
        this.wishList = wishList;
    }

    agregar() {
        const nuevo = [...stockProductos,this.name];
        console.log('nuevo :', nuevo);
    }
    eliminar(){
        console.log(`soy las lista de deseos ${this.wishList}`)
    }
    guardar() {
        
    }
}

//alusión a lo que pertenece al carrito de compras
let wishList = ['hola josé'];

let carrito = new Carrito('manzana');
console.log(carrito.agregar());