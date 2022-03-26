// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
const secoes = document.querySelectorAll('div.animais-descricao section');
console.log(secoes);

secoes.forEach((section)=>{
    section.classList.add(section.dataset.anime = "show-down")
    section.classList.add(section.dataset.anime = "show-right")
})

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
