function calcularMedia() {
    let altura = document.getElementById("Altura").value;
    let peso = document.getElementById("Peso").value;
    let resultado = document.getElementById("resultado");

    if (altura === "" || peso === "") {
        resultado.textContent = "Digite seu peso e altura!";
        resultado.className = "";
        return;
    }

    altura = Number(altura) /100 ;
    peso = Number(peso);

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado.textContent = "Abaixo do peso: " + imc.toFixed(1);
        resultado.className = "baixo";
    } 
    else if (imc < 25) {
        resultado.textContent = "Peso normal: " + imc.toFixed(1);
        resultado.className = "normal";
    } 
    else if (imc < 30) {
        resultado.textContent = "Sobrepeso: " + imc.toFixed(1);
        resultado.className = "sobrepeso";
    } 
    else {
        resultado.textContent = "Obesidade: " + imc.toFixed(1);
        resultado.className = "obeso";
    }
}