// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array que almacena los nombres
<script></script>
    let amigos = [];

    function agregarAmigo() {
        const input = document.getElementById('amigo');
        const nombre = input.value.trim();
        if (nombre) {
            amigos.push(nombre);
            input.value = '';
            actualizarListaAmigos();
        }
    }

    function actualizarListaAmigos() {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Debe haber al menos dos amigos para sortear.');
            return;
        }
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const shuffled = amigos.slice().sort(() => Math.random() - 0.5);
        shuffled.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.textContent = `${amigos[index]} es el amigo secreto de ${shuffled[(index + 1) % shuffled.length]}`;
            resultado.appendChild(li);
        });
    }
    