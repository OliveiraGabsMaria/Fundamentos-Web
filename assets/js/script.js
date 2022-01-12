let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Quantidade de Caracteres Aceita'
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = 'Email válido'
        emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto Ultrapassou o Limite de Caracteres (100)"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Enviado com Sucesso')
    } else {
        alert('Algo deu errado! Revise as informações, por favor..')
    }
}

function mapaZoom() {
    mapa.style.width = '1550px'
    mapa.style.height = '300px'
}

function mapaNormal() {
    mapa.style.width = '1550px'
    mapa.style.height = '200px'
}