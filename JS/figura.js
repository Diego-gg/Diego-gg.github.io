// Codigo del cuadrado

console.group("Cuadrado");
function perimetroCuadrado (ladoCuadrado) {
    const perimetroCuadrado = ladoCuadrado * 4;
    return Math.round(perimetroCuadrado * 100)/100;
}
function areaCuadrado (ladoCuadrado) {
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    return Math.round(areaCuadrado * 100)/100;
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + " cm");
}
function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area + " cm2");
}
console.groupEnd();

// Codigo para el Circulo

console.group("Circulo");

function perimetroCirculo (radioCirculo) {
    const diametroCirculo = radioCirculo * 2;
    const pi = 3.1416 ; 
    const perimetroCirculo = diametroCirculo * pi;
    return Math.round(perimetroCirculo * 100)/100;
}
function areaCirculo (radioCirculo) {
    const pi = 3.1416 ; 
    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    return Math.round(areaCirculo * 100)/100;
}

function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro + " cm");
}
function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area + " cm2");
}
console.groupEnd();

// Codigo para el triangulo 

console.group("Triangulo");

function perimetroTriangulo (lado) {
    const diametroTriangulo = lado * 3;
    return Math.round(diametroTriangulo * 100)/100;
}
function areaTriangulo (lado) {
    const Lado1 = lado;
    const base1 = lado/2;
    const altura = Math.sqrt((lado * lado) - (base1 * base1));
    const areaTriangulo = (base1 * altura);
    return Math.round(areaTriangulo * 100)/100;
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro + " cm");
}
function calcularAreaTriangulo () {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert(area + " cm2");
}
console.groupEnd();
