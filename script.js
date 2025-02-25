document.addEventListener('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementById
    ('aumentar-fonte');
    let TamanhoAtualonte = 1;

    aumentaFonteBotao.addEventListener('click', funcion(){
         tamanhoAtualFonte += 0.1,
         documnt.body.fontSize = `${tamanhoAtualFonte}rem`
    })
      
    diminuirFonteBotao.addEventListener (`clik`, function(){
        tamanhoAtualFonte -= 0.1;
        documnt.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})

