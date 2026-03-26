function calcularMedia() {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let resultado = document.getElementById("resultado");

    if (nota1 === "" || nota2 === "") {
        resultado.textContent = "Digite as duas notas!";
        resultado.className = "";
        return;
    }

    nota1 = Number(nota1);
    nota2 = Number(nota2);

    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        resultado.textContent = "Aprovado! Média: " + media.toFixed(1);
        resultado.className = "aprovado";
    } else {
        resultado.textContent = "Reprovado! Média: " + media.toFixed(1);
        resultado.className = "reprovado";
    }
}