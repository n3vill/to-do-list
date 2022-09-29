function atualizarQuantidade () {
    document.getElementById('numeros').innerHTML = buscar().length;   //alterações atividade alessandro - adc length para contabilizar as tarefas
}

function listarTarefas () {
    let conteudo = buscar().sort().map(function (tarefa) {
        return `
            <div>
                <input type="checkbox"> 
                ${tarefa.titulo}

                <span class="badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'} ${tarefa.prioridade === 'Media' && 'bg-warning'} ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                    ${tarefa.prioridade}
                </span>
                

            </div>
        `;
    });
    document.getElementById('tarefas').innerHTML = conteudo.sort().join(''); //alterações atividade alessandro - adc sort para ordenar as tarefas
}


function addTarefa() {
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') {
        alert('Tarefa invalida');
        return
    }

    if (buscar().some(tarefa => titulo === tarefa.titulo) === true) {
        alert('Tarefa já existe');
        return
    }

    salvar(titulo, input_prioridade.value);

    document.getElementById('input_nova_tarefa').value = '';

    atualizarQuantidade();
    listarTarefas();
}


//vai acontecer assim que o usuário entrar na página 
listarTarefas();

