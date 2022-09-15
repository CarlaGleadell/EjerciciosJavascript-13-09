//funcioN
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Carla";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 361;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


var num1=prompt("ingrese numero 1");
var num2=prompt("ingrese numero 2");
document.write("NUMERO 1: "+num1 +"<br>"+ "NUMERO 2: " +num2 + "<br>");


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
document.write("string: " +devolverString("prueba1"+ "<br>"));


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultado= (parseInt(x) + parseInt(y));
  return resultado;
}
document.write("suma: " + suma(num1,num2)+ "<br>");


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  var resultado= x-y;
  return resultado;
}
document.write("resta: "+ resta(num1,num2)+ "<br>");


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultado= x*y;
  return resultado;
}
document.write("multiplica: "+ multiplica(num1,num2)+ "<br>");


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultado= x/y;
  return resultado;
}
document.write("divide: "+ divide(num1,num2)+ "<br>");


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
    var igual=false;
    if(x===y){igual=true}
    return igual;
}
document.write("son iguales: "+ sonIguales(num1,num2)+ "<br>");


 
var string1= "carla";
var string2= "gleadell";
document.write("STRING 1: "+string1+"<br> STRING 2: "+string2+"<br>" )
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var iguallong=false;
  if(string1.length===string2.length){ iguallong=true; }
  return iguallong;
}
document.write("misma longitud: " + tienenMismaLongitud(string1,string2) + "<br>")


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    var menor=false;
    if(num1 < 90){menor=true; }
    return menor;
}
document.write(num1 + " es menor que 90: "+ menosQueNoventa(num1)+ "<br>");


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayor=false;
  if(num2 > 50){mayor=true; }
  return mayor;
}
document.write(num2 + " es mayor que 50: "+ mayorQueCincuenta(num2)+ "<br>");


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
return resto=x%y;
}
document.write(" resto de "+num1 +" entre " +num2+": "+ obtenerResto(num1,num2)+ "<br>");

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
var par=false;
if(num%2==0){par=true}
return par;
}
document.write(num1 + " es par: "+ esPar(num1)+ "<br>");


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar=false;
  if(num%2!=0){impar=true}
  return impar;
}
document.write(num1 + " es impar: "+ esImpar(num1)+ "<br>");


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
return Math.pow(num,2);
}
document.write(num1 + " al cuadrado: "+ elevarAlCuadrado(num1)+ "<br>");


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num,3);
}
document.write(num1 + " al cubo: "+ elevarAlCubo(num1)+ "<br>");


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
return Math.pow(num,exponent);
}
document.write(num1 + " elevado a "+ num2 + ": " + elevar(num1,num2)+ "<br>");


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
return Math.round(num);
}
document.write(num1 + " redondeado: "+ redondearNumero(num1)+ "<br>");


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}
document.write(num1 + " redondeado hacia arriba: "+ redondearHaciaArriba(num1)+ "<br>");


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
document.write("numero random: "+ numeroRandom()+ "<br>");


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
var devuelve = "es positivo";
if(numero!=0){
    if(numero<0){devuelve="es negativo";}
}
else{
return false;
}
return devuelve;
}
document.write(num1 + ": "+ esPositivo(num1)+ "<br>");


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
return str+"!";
}
document.write(string1+ " con signo de exclamacion : "+ agregarSimboloExclamacion(string1)+ "<br>");


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
return nombre+" "+apellido;
}
document.write(string1 + " combinado con "+ string2 + " = "+ combinarNombres(string1,string2)+ "<br>");


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
return "Hola "+nombre+"!"
}
document.write("saluda a "+string1+ " : "+ obtenerSaludo(string1)+ "<br>");


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectangulo teniendo su altura y ancho
  // Tu código:
return alto*ancho;
}
document.write("area de un rectangulo de " + num1+ " por "+num2+": "+ obtenerAreaRectangulo(num1,num2)+ "<br>");


function retornarPerimetro(lado,lado2){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
return ((lado*2)+(lado2*2))
}
document.write("perimetro de un rectangulo de " + num1+ " por "+num2+": "+ retornarPerimetro(num1,num2)+ "<br>");


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (base*altura)/2
}
document.write(" area de un triangulo con altura igual a "+num2+" y base igual a "+num1+ " es: "+areaDelTriangulo(num1,num2)+ "<br>");


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
return euro*1.20;
}
document.write(num1+" euros son : "+ deEuroAdolar(num1)+" dolares."+ "<br>");



var vocal="a";
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
if(letra.length==1 && isNaN(letra)){
    if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u'){return "es vocal";}
    else{return "no es vocal";}
}
else{  return "Dato incorrecto";}
}
document.write("la letra '"+vocal+"' es vocal? " +esVocal(vocal)+ "<br>");