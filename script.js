document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- Lógica do Formulário de Contato ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

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

            displayMessage('Mensagem enviada com sucesso! Em breve entrarei em contato.', 'success');
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = '';
        formMessage.classList.add(type);
        formMessage.style.display = 'block';

        // Esconde a mensagem após alguns segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // --- Lógica da Troca de Tema ---
    if (themeToggle) {
        // Verifica o tema salvo no localStorage ao carregar a página
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
        }

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');

            // Salva a preferência do tema no localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
