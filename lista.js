let tarefa = document.getElementById("descricao");
let listaPendentes = document.querySelector("#pendentes");
let listaFinalizadas = document.querySelector("#finalizadas");

//Funções
let adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", function () {
    if (tarefa.value != "") {
        let item = document.createElement("li");
        item.innerHTML = tarefa.value + "<button class = 'p-15' onclick='removerItem(this);'>Finalizar</button>";
        listaPendentes.appendChild(item);
    }
});

function removerItem(item) {
    let item_finalizado = item.parentNode;
    listaPendentes.removeChild(item_finalizado);
    listaFinalizadas.appendChild(item_finalizado);
}
