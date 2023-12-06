let tarefa = document.getElementById("descricao");
let adicionar = document.getElementById("adicionar")
let listaPendentes = document.querySelector("#pendentes");
let listaFinalizadas = document.querySelector("#finalizadas");
let finalizar = document.getElementById("finalizar");
let pendente;

//Funções
adicionar.addEventListener("click", function () {
    listaPendentes.appendChild(document.createElement("li")).innerHTML = tarefa.value;
});

function removerItem(a) {
    a.innerHTML = "";
}


finalizar.addEventListener("click", function () {
    if (listaPendentes.innerHTML != "") {
        listaFinalizadas.appendChild(document.createElement('li')).innerHTML = tarefa.value;
        removerItem(listaPendentes);
    }
}
);

