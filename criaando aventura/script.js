const avanca = document.querySelectorAll('.btn_proximo');

avanca.forEach(button => {
button.addEventListener('click', function(){
    const atual = document.queryselector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classlist.remove('ativo');
document.getElementById(proximoPasso).classlist.add('ativo');
})

})
    
