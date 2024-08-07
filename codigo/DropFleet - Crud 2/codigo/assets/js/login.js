let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {

    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
    var email = document.querySelector('#email')
    var emailLabel = document.querySelector('#emailLabel')
    var senha = document.querySelector('#senha')
    var senhaLabel = document.querySelector('#senhaLabel')
    var msgErro = document.querySelector('#msgErro')
    var listaUsuario = []
    var userValid = {
        nome: null,
        email: null,
        senha: null
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario')) // VAI PEGAR O ARRAY DOS DADOS DE CADASTRO
    //VERIFICAR SE AS VARIAVEIS DIGITADAS SÃO IGUAIS DO ARRAY DE CADASTRO
    listaUsuario.forEach((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })

    if(email.value == userValid.email && senha.value == userValid.senha){ 
        var token = Math.random().toString(16).substr(2) // GERAR UM TOKEN QUANDO USUARIO ENTRAR NO SITE
        localStorage.setItem('token', token) // ARMAZENA O TOKEN NO LOCALSTORAGE
        
        sessionStorage.setItem('userLogado', JSON.stringify(userValid)); // ARMAZENA OS DADOS DO USUÁRIO NO SESSION STORAGE
        sessionStorage.setItem('token', token); // ARMAZENAR O TOKEN NO SESSIONSTORAGE
        setTimeout(() => {
            window.location.href = '../../inicio.html' // QUANDO O USUARIO LOGAR SERÁ ENVIADO PRA ESSA TELA
        }, 3000) // APÓS 3 SEGUNDOS ABRI-RÁ A TELA PRINCIPAL

    } else{ // SE O EMAIL OU SENHA TIVER ERRADO APARECE ISSO NA TELA:
        emailLabel.setAttribute('style', 'color:red')
        email.setAttribute('style', 'border-color:red')
        senhaLabel.setAttribute('style', 'color:red')
        senha.setAttribute('style', 'border-color:red')
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Usuário ou senha incorreto.'
        senha.focus()
        }
}

/* 
---- COMANDO PARA PEGAR A LISTA ORDENADA DE TODOS OS USUARIOS E SEUS DADOS NO CONSOLE ----
    var listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
    console.log(listaUsuario);
---- COMANDO PARA PEGAR A LISTA ORDENADA DE TODOS OS USUARIOS E SEUS DADOS NO CONSOLE ----
*/