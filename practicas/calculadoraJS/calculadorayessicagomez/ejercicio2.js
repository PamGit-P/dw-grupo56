function sumar() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const suma = valor1 + valor2;
    console.log(suma);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${suma}`;

}
function resta() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const resta = valor1 - valor2;
    console.log(resta);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${resta}`;

}
function multiplicacion() {
    const valor1 = parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);

    console.log('Valor 1 ' + valor1);
    console.log('valor 2 ' + valor2);

    const multiplicacion = valor1 * valor2;
    console.log(multiplicacion);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado: ${multiplicacion}`;

}
function division(){
    const valor1 =parseInt(document.getElementById('numero1').value);
    const valor2 = parseInt(document.getElementById('numero2').value);
 
    console.log('valor1' + valor1);
    console.log('valor2' + valor2);
 
    const division = valor1 / valor2;
    console.log(division);
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =  `Resultado: ${division}`;
 
}