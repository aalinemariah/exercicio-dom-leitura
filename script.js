//Parte 1: Seletores Simples

const tituloPagina = document.getElementById("titulo-pagina");
console.log(tituloPagina);

const subtitulo =  document.getElementsByClassName("subtitulo");
console.log(subtitulo);

const modulo1 = document.getElementById("modulo-1");
console.log(modulo1);

const tarefas = document.getElementsByClassName("tarefa");
console.log(tarefas);

const lista = document.getElementsByTagName("li");
console.log(lista);

//Parte 2: querySelector / querySelectorAll 


const primeiroItem = document.querySelector('#modulo-1 li:first-child');
console.log(primeiroItem);

const tarefasModulo2 = document.querySelectorAll('#modulo-2 .tarefa');
console.log(tarefasModulo2);

const spanFuncoes= document.querySelector('ol li:nth-child(3)');
console.log(spanFuncoes);

const titulosModulos = document.querySelectorAll('.modulo > h2');

titulosModulos.forEach(titulo => {
    console.log(titulo.textContent);
});

// Parte 3: innerText, textContent, innerHTML

const textovisivel = document.getElementsByClassName("tarefa importante")[0].innerText;
console.log(textovisivel);
const textinterno = document.getElementsByClassName("tarefa importante")[0].textContent;
console.log(textinterno);
const conteudocompleto = document.getElementsByClassName("tarefa importante")[0].innerHTML;
console.log(conteudocompleto);

//

const módulo1 = document.getElementById("modulo-1");
const tarefas1 = módulo1.querySelectorAll("li");

console.log("Total de tarefas no Módulo 1:", tarefas1.length);

tarefas1.forEach((tarefa) => {
  console.log(tarefa.innerText);
});

const tarefas2 = document.querySelectorAll("#modulo-2 li");

console.log("Total de tarefas no Módulo 2:", tarefas2.length);

//Parte 4: Desafios de Leitura

tarefas2.forEach((tarefa) => {
  console.log(tarefa.innerText);
});
 
 
let pendente = 0;
let visto = 0;
let bloqueado = 0;

 

console.log(" Status das tarefas:");
console.log("Pendente:", pendente);
console.log("Visto:", visto);
console.log("Bloqueado:", bloqueado);

const tarefa = document.querySelectorAll(".tarefa");

tarefa.forEach(tarefa => {
  const nome = tarefa.firstChild.textContent.trim();
  const status = tarefa.querySelector(".tag").innerText;
  console.log(`Tarefa: ${nome} - Status: ${status}`);
});
