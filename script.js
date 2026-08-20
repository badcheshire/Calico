/* =====================================================
   VISÃO ACOLHEDORA
   SCRIPT PRINCIPAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTOS
    ================================================= */

    const body = document.body;

    const decreaseFont = document.getElementById("decreaseFont");
    const increaseFont = document.getElementById("increaseFont");
    const contrastButton = document.getElementById("contrastButton");
    const darkMode = document.getElementById("darkMode");
    const spacingButton = document.getElementById("spacingButton");

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    const topButton = document.getElementById("topButton");

    const eyeFollower = document.getElementById("eyeFollower");


    /* =================================================
       TAMANHO DA FONTE
    ================================================= */

    let fontSize = 16;

    if (decreaseFont) {

        decreaseFont.addEventListener("click", function () {

            if (fontSize > 12) {

                fontSize -= 1;

                body.style.fontSize = fontSize + "px";

            }

        });

    }


    if (increaseFont) {

        increaseFont.addEventListener("click", function () {

            if (fontSize < 24) {

                fontSize += 1;

                body.style.fontSize = fontSize + "px";

            }

        });

    }


    /* =================================================
       ALTO CONTRASTE
    ================================================= */

    if (contrastButton) {

        contrastButton.addEventListener("click", function () {

            body.classList.toggle("high-contrast");

        });

    }


    /* =================================================
       MODO ESCURO
    ================================================= */

    if (darkMode) {

        darkMode.addEventListener("click", function () {

            body.classList.toggle("dark");

        });

    }


    /* =================================================
       ESPAÇAMENTO
    ================================================= */

    if (spacingButton) {

        spacingButton.addEventListener("click", function () {

            body.classList.toggle("extra-spacing");

        });

    }


    /* =================================================
       MENU MOBILE
    ================================================= */

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            const aberto = nav.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );

        });


        /* Fecha o menu quando clicar em um link */

        const links = nav.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            });

        });

    }


    /* =================================================
       BOTÃO VOLTAR AO TOPO
    ================================================= */

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });


        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =================================================
       OLHO PARADO
       
       IMPORTANTE:
       Não existe código seguindo o mouse.
    ================================================= */

    if (eyeFollower) {

        eyeFollower.style.transform = "none";

    }


    /* =================================================
       FAQ
    ================================================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer =
                question.nextElementSibling;

            if (!answer) {
                return;
            }

            const aberto =
                answer.classList.toggle("active");


            const symbol =
                question.querySelector(".faq-symbol");


            if (symbol) {

                symbol.textContent =
                    aberto ? "−" : "+";

            }

        });

    });

});