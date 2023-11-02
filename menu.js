window.addEventListener("scroll", function(){ //vai adicionar o evento com a função scroll de rolagem
    let header = document.querySelector('#header') // vai capturar qual a parte do site que quer o efeito (id = header)
    header.classList.toggle('rolagem',window.scrollY > 200) //criar classe para o cabeçalho (toggle = se tiver, exclui, senão, cria) e diz que se a rolagem > 0, já add o efeito
})