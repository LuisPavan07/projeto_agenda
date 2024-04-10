const form = document.getElementById('form-contatos');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numero.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} ja foi inserido.`);
    } else {
        numero.push(inputNumeroContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

document.getElementById('numero-contato').addEventListener('input', function(){
    if (this.value.length > 11) {
        this.value = this.value.slice(0,11);
    }
});

