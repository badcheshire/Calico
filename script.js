// Garante a execução apenas após a renderização do HTML
document.addEventListener('DOMContentLoaded', () => {
   
    const btnDownload = document.getElementById('btn-download');

    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            // Mensagem informativa e amigável
            alert('Obba! O download do seu Guia de Apoio à Baixa Visão vai começar agora mesmo! ✨');
        });
    }
});

