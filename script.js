// FUNCIONALIDADE DA NEWSLETTER 
    const formNewsletter = document.querySelector(".newsletter-form");
    const nomeInput = document.getElementById("nome-input");
    const emailInput = document.getElementById("email-input");

    if (formNewsletter) {
        formNewsletter.addEventListener("submit", function (event) {

            const nomeUsuario = nomeInput.value;
            alert(`✨ Obrigado por se inscrever, ${nomeUsuario}! Você receberá as novidades do Garimpo do Saber no seu e-mail.`);

            formNewsletter.reset();
        });
    }

    // ROLAGEM SUAVE PARA O LINK "LIVRO" 
    const linkLivros = document.querySelector('a[href="#Livros"]');

    if (linkLivros) {
        linkLivros.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o pulo brusco padrão

            const secaoLivros = document.getElementById("Livros");

            if (secaoLivros) {
                // Faz a rolagem deslizar suavemente até a seção
                secaoLivros.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    };

    // Formulário de Mensagem de Contato
    const formContato = document.querySelector(".campo");
    
    if (formContato) {
        formContato.addEventListener("submit", function (event) {

            // Pega o valor do primeiro input (Nome) dentro do formulário
            const nomeContato = formContato.querySelector('input[type="text"]').value;

            alert(`✉️ Olá, ${nomeContato}! Sua mensagem foi enviada com sucesso para o Garimpo do Saber. Responderemos em breve!`);

            // Limpa os campos do formulário (Nome e Mensagem)
            formContato.reset();
        });
    };