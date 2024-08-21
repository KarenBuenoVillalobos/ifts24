// FUNCION CONSTRUCTORA

// function Usuario(nombre, dni) { //PREGUNTA DE EXAMEN: acercando el mouse a func recomienda escribir como Clase
//     this.nombre = nombre;
//     this.dni = dni;
//     this.admin = false;
// }

// const usuario_1 = new Usuario ("Julio", 23456789);
// console.log(usuario_1);

//--------------

// function Usuario(nombre, dni) {
//     this.nombre = nombre;
//     this.dni = dni;
//     this.admin = false;

//     // Metodos
//     this.info = function(){ // Funcion constructor. Que esta dentro de los atributos del objeto. Debo sacarla. ¿Como?
//         return `Nombre: ${this.nombre}, DNI ${this.dni}`;
//     }
// }
// const usuario_1 = new Usuario ("Julio", 23456789);
// console.log(usuario_1);
// let mensaje_1 = usuario_1.info();
// console.log(mensaje_1);

//------------------
// function Usuario(nombre, dni) {
//     this.nombre = nombre;
//     this.dni = dni;
//     this.admin = false;

//     // Metodos
//     this.info = () => { // Funcion constructor. Funcion Flecha
//         return `Nombre: ${this.nombre}, DNI ${this.dni}`;
//     }
// }
// const usuario_1 = new Usuario ("Julio", 23456789);
// console.log(usuario_1);
// let mensaje_1 = usuario_1.info();
// console.log(mensaje_1);

//-----------------------
function Usuario(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
    this.admin = false;
}

// Saco la funcion del objeto y la coloco en el Prototipo [prothotype]
Usuario.prototype.info = function() { // Funcion constructor. Por fuera de los atributos del objeto
    return `Nombre: ${this.nombre}, DNI ${this.dni}`;
};

const usuario_1 = new Usuario ("Julio", 23456789);
console.log(usuario_1);
let mensaje_1 = usuario_1.info();
console.log(mensaje_1);