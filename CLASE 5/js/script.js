//OBJETOS

//CREAR UN OBJETO VACIO

const usuario = new Object();
//console.log(usuario);

// Agregar propiedades al objeto
usuario.nombre = "Julio"; //llamo al objeto usuario con la propiedad nombre
usuario.edad = "54";
usuario.dni = 15784985;

console.log(usuario); //muestra las propiedades de usuario
console.log(usuario.nombre); //muestra el nombre de usuario

//-------------------

const usuario_1 = {};
console.log(usuario_1);

const usuario_2 = { //otra forma de crear un objeto vacio
    //Definir las propiedades del objeto
    id: undefined,
    nombre: "Cesar",
    edad: 54,
    dni: 12345678,
};

console.log(usuario_2);
console.log(usuario_2.nombre); //notacion de punto para acceder a un elemento

console.log(usuario_2["dni"]); //notacio de corchete para acceder a un elemento

// Cambiar los valores de los atributos
usuario_2.nombre = "Juan Pablo";
usuario_2["dni"] = 87654321;

// Agregar un atributo
usuario_2.mail = "mi@mail.com";

console.log(usuario_2.nombre);
console.log(usuario_2["dni"]);
console.log(usuario_2.mail);

// Eliminar un atributo
delete usuario_2.id;

console.log(usuario_2.id);