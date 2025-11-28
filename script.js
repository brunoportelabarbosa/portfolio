document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Validação dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                displayMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                displayMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Simula o envio
            formMessage.style.display = 'block';
            displayMessage('Mensagem enviada com sucesso! Em breve entrarei em contato.', 'success');
            
            // Limpa o formulário
            contactForm.reset();
        });
    }

    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Função para exibir mensagens ao usuário
    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        // Limpa classes anteriores e adiciona as novas
        formMessage.className = '';
        formMessage.classList.add('message', type);
        formMessage.style.display = 'block';
    }
});
