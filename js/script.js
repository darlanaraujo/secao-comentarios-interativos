const comments = document.querySelector('#caixa-comments');
const replies = document.querySelectorAll('#caixa-replies');
const texto = document.querySelector('#caixa-texto');
const btnEnviar = document.querySelectorAll('#btn-enviar');
const btnMais = document.querySelectorAll('#btn-mais');
const btnMenos = document.querySelectorAll('#btn-menos');
const score = document.querySelectorAll('#score');
const btnResposta = document.querySelectorAll('#btn-resposta')

// Criar estrutura de um novo comentário
btnEnviar.forEach((item) => {
    item.addEventListener('click', () => {
        if (texto.value !== '') {
            setNovoComentario(texto.value);
            texto.value = '';
        }
    })
});

function setNovoComentario(comentario) {
    const itemHTML = document.createElement('div');
    itemHTML.classList.add('caixa-comentarios');

    itemHTML.innerHTML = `
    <div class="wrapper-comentario-usuario">
        <div class="controles">
            <button class="btn-controles" id="btn-mais"><img src="images/icon-plus.svg" alt=""></button>
            <span class="score" id="score">0</span>
            <button class="btn-controles" id="btn-menos"><img src="images/icon-minus.svg" alt=""></button>
        </div>

        <div>
            <div class="topo-comentario">
                <div class="dados-usuario">
                    <img class="foto" src="images/avatars/image-juliusomo.png" alt="">
                    <span class="nome-usuario">nome</span>
                    <span class="selo">you</span>
                    <span class="data-comentario">today</span>
                </div>
                <div class="caixa-botoes">
                    <button class="btn-secundario btn-deletar" id="btn-deletar"><img src="images/icon-delete.svg" alt="">Delete</button>
                    <button class="btn-secundario" id="btn-editar"><img src="images/icon-edit.svg" alt="">Edit</button>
                </div>
            </div>
            <div>
                <p class="comentario">${comentario}</p>
            </div>
        </div>
    </div>

    <!-- Contorno das Respostas -->
    <div class="caixa-replies">
        <div class="linha"></div>
        <!-- Respostas -->
        <div class="caixa-respostas">
            <!-- Resposta de um comentário -->

        </div>
    </div>
    `;

    comments.appendChild(itemHTML);

};

// Criar estrutura para fazer um comentário
btnResposta.forEach((item, index) => {
    item.addEventListener('click', () => {
        setFazerComentario(index);
    });
});
const setFazerComentario = (index) => {
    const itemHTML = document.createElement('div');
    itemHTML.classList.add('caixa-fazer-comentarios');

    itemHTML.innerHTML = `
    <img class="foto" id="image" src="images/avatars/image-juliusomo.png" alt="">
    <textarea class="caixa-texto" name="" id="caixa-texto" cols="30" rows="4" required="required"
        placeholder="Add a comment..."></textarea>
    <button class="btn-primario" id="btn-enviar">send</button>
    `
    replies[index].appendChild(itemHTML);
};



// Eventos que mudam o score do comentário
btnMais.forEach((item, index) => {
    item.addEventListener('click', () => {
        // console.log(event.currentTarget.nextElementSibling);
        let cont = score[index].innerHTML;
        cont++;
        score[index].innerHTML = cont;
    });
});

btnMenos.forEach((item, index) => {
    item.addEventListener('click', () => {
        // console.log(event.currentTarget.nextElementSibling);
        let cont = score[index].innerHTML;
        cont--;
        score[index].innerHTML = cont;
    });
});
