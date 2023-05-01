let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                /*
                    O código aqui está usando o comando 'document.querySelector' para pesquisar
                    no html usando este script pelo que foi especificado, nesse caso o elemento 'a'
                    no 'nav' em 'header' no body que contenha a propriedade href sendo igual a variável 'id'
                    criada anteriormente ('header nav a[href*=' + id + ']'), para após encontrá-lo usar a sintaxe 
                    '.classList.add('active')' e adicionar o termo 'active' a classe do elemento pesquisado.

                    Um erro que obti ao procurar implementar esse comando foi o de tentar usar o
                    '.classList.add' em um elemento vazio. Isso se deu pois na sintaxe inseri
                    'header nav a [href*=' + id + ']' com um espaço entre 'a' e a o detalhamento do
                    valor da variável id, fazendo assim com que o compilador não encontre e em vez disso
                    retorne um erro de inserir uma classe num elemento nulo.
                */
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    })
};
