const btnSortear = document.querySelector(".sortear");
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");

function pegarDadosFormulario() {
    const valorCampo = textarea.value; //pega todos os valores do textarea
    const listaNomes = valorCampo.split(","); //separa todos os nomes pela virgula
    const tamanhoArray = listaNomes.length; //conta quantos nomes tem
    const posicaoNome = gerarNommeAleatorio(tamanhoArray); //escolhe uma posição aleatoria (nome aleatorio)
    const nome = listaNomes[posicaoNome] // guarda o nome sorteado
    mostrarResultado(nome); //mostra o resultado

    textarea.value = "" // limpa o textarea
}
btnSortear.addEventListener("click", pegarDadosFormulario)

function gerarNommeAleatorio(tamanhoArray) {
    //RETORNA O NOME
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: ${nome}`;
    popUpResultado.classList.add("Resultado")
}