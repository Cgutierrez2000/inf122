var nombre = ""
console.log(nombre)
var apellidos = ""
console.log(casado)
let presupuesto = 1000
console.log(presupuesto)
let gastos = 500
console.log(gastos)
const IVA = 13
console.log(IVA)
const tipoCambio = 6.96
console.log(tipoCambio)
var uni = "UMSA"
console.log(uni)
let altura = 1.65
console.log(altura)
const verdad = "verdad"
console.log(verdad)# definir variables: var,
    let, contas# estructuras de control:
    var numero = 10
if (numero % 2 === 0) {
    console.log(numero + "es par");
} else {
    console.log(numero + 'no es par');
}
var num = 10
if (numero % 5 === 0) {
    console.log(num + "es multiplo de 5");
} else {
    console.log(num + 'no es multiplo de 5');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let contador = 0;
while (contador < 5) {
    contador++;
    console.log(contador);
}

let contador = 10;
while (contador > 0) {
    contador--;
    console.log(contador);
}
let contador = 10;
while (contador > 0) {
    console.log(contador);
    contador--;
}
let suma = 7 + 2;
let resta = 5 - 2;
let multiplicacion = 3 * 5;
let division = 4 / 2;
let modulo = 10 % 4;
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)

let sumaMultiplicacionModulo =

    const persona = {
        nombre: "Carla",
        edad: 25,
        ocupacion: "desarollador"
    };
console.log(persona.edad);
persona["apellido"] = "gutierrez";
//agregar atributo
console.log(persona);
persona["ci"] = 1234567;
console.log(persona);
persona.nombre = "pedrito";
console.log(persona);
persona.nombre = "gabriel";
console.log(persona);
persona.edad = 45;
console.log(persona);
persona.ocupacion = "chef";
console.log(persona);
const colores = ["rojo", "verde", "azul"];
//cambiar dato

const color = ["verde", "rojo", "azul"];
console.log(colores);
console.log(colores.length);
console.log(colores[0])


colores.reverse();

color[0];
color[1];
color[2];
color[3];
for (let i = 0; i < colores.length; i++); {
    console.log("Elemento: " + colores[i] + ", indice:" + i)
}
colores.push("amarillo");
colores.push("rosa");
colores.push("naranja");
console.log(colores);
console.log(colores.find("rojo"));
colores.reverse(colores);

colores.push("NEGRO");
colores.push("BLANCO");
colores.sort();
console.log(colores);

colores.push(1);
colores.push(2);
colores.push(3);
colores.sort();
console.log(colores);

colores.push(false);
colores.push(true);
colores.push(15.5);
colores.push(7.32);
colores.sort();
console.log(colores);

var elemento = colores.pop();
console.log(elemento);
console.log(colores);

colores.find()
var encontrado = colores.find(function(elemento) {
    return elemento === "rojo"

});
//find.index devuleve la posiscion del elemento
var elemento = colores.findIndex(function(elemento) {
    return elemento === 1;
});
console.log(encontrado);
console.log(elemento);
//find devuelve el elemento y ve si existe
colores.find(factory(elemento) {
    return elemento === "verde";
});
//funcion 
function saludar(nombre) {
    return "Hola," + nombre + "!";
}
const mensaje = saludar("Tatiana");
console.log(mensaje);

function sumar(a, b) {
    return a + b;
}
const m1 = 8;
const m2 = 1
console.log(m1 + "+" + m2 + "=" + sumar(m1, m2));