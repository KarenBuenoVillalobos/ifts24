//----------------------------------
// Agregar Metodos a los Objetos

// const usuario_3 = {
//     //Defino los atributos
//     id: undefined,
//     nombre: "Cesar",
//     edad: 54,
//     dni: 12345678,

//     info: function(){
//         console.log(`Nombre: ${usuario_3.nombre}, DNI ${usuario_3.dni}`); //alt +96 la comilla
//     }
// }

// console.log(usuario_3);
// usuario_3.info();

//----------------------------------
// const usuario_3 = {
//     //Defino los atributos
//     id: undefined,
//     nombre: "Cesar",
//     edad: 54,
//     dni: 12345678,
//     //Metodos
//     info: function(){
//         console.log(`Nombre: ${this.nombre}, DNI ${this.dni}`); //alt +96 la comilla
//     }
// }

// console.log(usuario_3);
// usuario_3.info();

// //----------------------------------
// // Quiero retornar un valor de la funcion

// const usuario_4 = {
//     //Defino los atributos
//     id: undefined,
//     nombre: "Nestor",
//     edad: 54,
//     dni: 12345678,
//     //Metodos - Esta definido como un atributo
//     info: function(){
//         return `Nombre: ${this.nombre}, DNI ${this.dni}`; //alt +96 la comilla
//     }
// }

// console.log(usuario_4);
// //no trae la informacion porque no esta definido, tengo que llamarlo de otra manera
// //  usuario_4.info(); -> esta mal
// const mensaje = usuario_4.info();
// console.log(mensaje);

// //-----------------------------------
// // Funcion Flecha

// const usuario_5 = {
//     //Defino los atributos
//     id: undefined,
//     nombre: "Maria",
//     edad: 54,
//     dni: 12345678,
//     //Metodos
//     info: () => { //la palabra function desaparece y se pone => entre () y {}
//         return `Nombre: ${this.nombre}, DNI ${this.dni}`; //alt +96 la comilla
//     }
// }

// console.log(usuario_5);
// const texto = usuario_5.info();
// console.log(texto);  //aparece que no esta definido porque no se puede hacer esto, es decir usar la funcion flecha

//-----------------------------------
// Ejemplo Persona

let persona = {
    // Defino los atributos
    id: undefined,
    nombre: "Josefina",
    apellido: "Perez",
    edad: 54,
    dni: 12345678,
    // Metodos: lo defino como si fuera una propiedad mas del objeto
    nombreCompleto: function(){
        return this.apellido + " " + this.nombre
    }
}

console.log(persona);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

//-----------------------------------
// Ejemplo Perro

let perro = {
    // Defino los atributos
    nombre: "Kenzo",
    edad: 7,
    vivo: true,
    // Defino los metodos
    comoMeLLamo(){return "Soy " + this.nombre},
    ladrar(){return this.nombre + "dice Guau guau."}
}

console.log(perro.nombre, "tiene", perro.edad, "años.");
console.log(perro.comoMeLLamo());

if(perro.vivo){
    console.log(perro.ladrar());
}