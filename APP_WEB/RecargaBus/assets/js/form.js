const mode = document.getElementById('mode_icon'); //Pegando o botão de mudar o tema

mode.addEventListener('click', () => { //Adicionando evento de clique no botão
    const form = document.getElementById('login_form'); //Pegando o formulário de login
    if(mode.classList.contains("fa-moon")){ //Se o botão estiver com a classe de lua
        mode.classList.remove("fa-moon"); //Remova a classe de lua
        mode.classList.add("fa-sun"); //Adicione a classe de sol

        form.classList.add("dark"); //Adicione a classe de tema escuro no formulário
        return;
     }   //Adicione a classe de tema escuro no body

    mode.classList.remove("fa-sun"); //Remova a classe de sol
    mode.classList.add("fa-moon"); //Adicione a classe de lua
    form.classList.remove("dark"); //Remova a classe de tema escuro no formulário
})