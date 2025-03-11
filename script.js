document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById
    ('aumentar-fonte');
    const diminuirFonteBotao= document.getElementById
    ('diminuir-fonte');

    let tamanhoAtualFonte=1;

    aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
      
    diminuirFonteBotao.addEventListener (`clik`, function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

const botaoDeAcessibilidade = document.getElementById('botao-acessbilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessiilidade');
botaoDeAcessibilidade.addEventListener ('function', function(){
    botaoDeAcessibilidade.classList.toggle('apresenta-lista');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lita')
})

})

