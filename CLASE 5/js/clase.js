// CLASE

// class Usuario {
//     // Atributos de la Clase
//     constructor(nombre, dni) {
//         this.nombre = nombre;
//         this.dni = dni;
//         this.admin = false;
//     }
// }

// const usuario_1 = new Usuario("Julio", 23456789);
// console.log(usuario_1);

// const usuario_2 = new Usuario("Mario", 45678976);
// console.log(usuario_2);

//----------------------------

// class Usuario {
//     // Atributos de la Clase
//     constructor(nombre, dni) {
//         this.nombre = nombre;
//         this.dni = dni;
//         this.admin = false;
//     }
//     // Metodos de la Clase
//     info = function(){
//        return `Nombre: ${this.nombre}, DNI ${this.dni}`;
//     }
// }

// const usuario_1 = new Usuario("Julio", 23456789);
// console.log(usuario_1);
// let mensaje_1 = usuario_1.info();
// console.log(mensaje_1);

// const usuario_2 = new Usuario("Mario", 45678976);
// console.log(usuario_2);
// let mensaje_2 = usuario_2.info();
// console.log(mensaje_2);

//--------------------------------

class Usuario {
    // Atributos de la Clase
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.admin = false;
    };
    // Metodos de la Clase -> de esta manera no tengo la funcion dentro de los atributos del objeto
    info = function(){
       return `Nombre: ${this.nombre}, DNI ${this.dni}`;
    }
}

const usuario_1 = new Usuario("Julio", 23456789);
console.log(usuario_1);
let mensaje_1 = usuario_1.info();
console.log(mensaje_1);

const usuario_2 = new Usuario("Mario", 45678976);
console.log(usuario_2);
let mensaje_2 = usuario_2.info();
console.log(mensaje_2);
//CORREGIR EL CODIGO DE ESTE ULTIMO EJEMPLO