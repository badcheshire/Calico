/* =====================================================
   ACESSIBILIDADE
===================================================== */

const decreaseFont = document.getElementById("decreaseFont");
const increaseFont = document.getElementById("increaseFont");
const contrastButton = document.getElementById("contrastButton");
const darkMode = document.getElementById("darkMode");
const spacingButton = document.getElementById("spacingButton");

let fontSize = 16;


/* =====================================================
   AUMENTAR FONTE
===================================================== */

if (increaseFont) {
    increaseFont.addEventListener("click", function () {

        if (fontSize < 24) {
            fontSize += 2;

            document.documentElement.style.setProperty(
                "--tamanho-texto",
                fontSize + "px"
            );
        }

    });
}


/* =====================================================
   DIMINUIR FONTE
===================================================== */

if (decreaseFont) {
    decreaseFont.addEventListener("click", function () {

        if (fontSize > 12) {
            fontSize -= 2;

            document.documentElement.style.setProperty(
                "--tamanho-texto",
                fontSize + "px"
            );
        }

    });
}


/* =====================================================
   ALTO CONTRASTE
===================================================== */

if (contrastButton) {

    contrastButton.addEventListener("click", function () {

        document.body.classList.toggle("high-contrast");

    });

}


/* =====================================================
   MODO ESCURO
===================================================== */

if (darkMode) {

    darkMode.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}


/* =====================================================
   ESPAÇAMENTO
===================================================== */

if (spacingButton) {

    spacingButton.addEventListener("click", function () {

        document.body.classList.toggle("extra-spacing");

    });

}


/* =====================================================
   OLHO QUE ACOMPANHA O MOUSE
===================================================== */

const eye = document.getElementById("eyeFollower");
const eyeWrapper = document.querySelector(".eye-wrapper");

if (eye && eyeWrapper) {

    document.addEventListener("mousemove", function (event) {

        const rect = eyeWrapper.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let dx = event.clientX - centerX;
        let dy = event.clientY - centerY;

        const distance = Math.sqrt(
            dx * dx + dy * dy
        );

        /*
         * Limite máximo de movimento
         * para a pupila não sair do olho.
         */

        const maxDistance = 11;

        if (distance > maxDistance) {

            dx = (dx / distance) * maxDistance;
            dy = (dy / distance) * maxDistance;

        }

        eye.style.transform =
            `translate(
                calc(-50% + ${dx}px),
                calc(-50% + ${dy}px)
            )`;

    });


    /* =================================================
       QUANDO O MOUSE SAI DA PÁGINA
    ================================================= */

    document.addEventListener("mouseleave", function () {

        eye.style.transform =
            "translate(-50%, -50%)";

    });


    /* =================================================
       QUANDO O MOUSE VOLTA PARA A PÁGINA
    ================================================= */

    document.addEventListener("mouseenter", function (event) {

        const rect = eyeWrapper.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let dx = event.clientX - centerX;
        let dy = event.clientY - centerY;

        const distance = Math.sqrt(
            dx * dx + dy * dy
        );

        const maxDistance = 11;

        if (distance > maxDistance) {

            dx = (dx / distance) * maxDistance;
            dy = (dy / distance) * maxDistance;

        }

        eye.style.transform =
            `translate(
                calc(-50% + ${dx}px),
                calc(-50% + ${dy}px)
            )`;

    });

}


/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Fecha o menu quando clicar em um link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const topButton = document.getElementById("topButton");

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


/* =====================================================
   FAQ
===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer =
            question.nextElementSibling;

        if (!answer) {
            return;
        }

        answer.classList.toggle("active");

        const symbol =
            question.querySelector(".faq-symbol");

        if (symbol) {

            if (answer.classList.contains("active")) {
                symbol.textContent = "−";
            } else {
                symbol.textContent = "+";
            }

        }

    });

});