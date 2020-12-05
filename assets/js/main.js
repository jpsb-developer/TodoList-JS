const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');


const criarButtonApagar = (li) => {
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)

}


const criaLi = () => {
  const li = document.createElement('li');
  return li
}

inputNovaTarefa.addEventListener('keypress', (e) =>{
  if(e.keyCode === 13){
    if(!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa)
  }
})

const limpaInput = () =>{
  inputNovaTarefa.value = '';
  inputNovaTarefa.focus();
}

const criaTarefa = (tarefa) => {
  const li = criaLi();
  li.innerHTML = tarefa.value
  tarefas.appendChild(li)
  limpaInput()
  criarButtonApagar(li)
}
btnAddTarefa.addEventListener('click',(e) => {
    if(!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa)
})



document.addEventListener('click', (e) => {
  const el = e.target;
  if(el.classList.contains('apagar')){
    el.parentNode.remove();
  
  }
})