//         Efeito do botão login ir para o cadastro e o cadastro ir para o login               //
var formsignin = document.querySelector('#signin')
var formsignup = document.querySelector('#signup')
var btncolor = document.querySelector('.btncolor')
var socialconecta = document.querySelector('.socialconecta')

document.querySelector('.botao1')
 .addEventListener('click', () =>{
    formsignin.style.left = "25px"
    socialconecta.style.left = "25px"
    formsignup.style.left = "450px"
    btncolor.style.left = "0px"
})

document.querySelector('.botao2')
 .addEventListener('click', () =>{
    formsignin.style.left = "-450px"
    socialconecta.style.left = "-450px"
    formsignup.style.left = "25px"
    btncolor.style.left = "110px"
})