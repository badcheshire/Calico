document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MENU MOBILE
    ========================== */

    const menuButton =
        document.querySelector(".menu-button");

    const nav =
        document.querySelector("nav");


    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("active");

            const aberto =
                nav.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );

        });

    }


    /* =========================
       FECHAR MENU AO CLICAR
       EM UM LINK
    ========================== */

    const links =
        document.querySelectorAll("nav a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {

                nav.classList.remove("active");

            }

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });


    /* =========================
       AUMENTAR FONTE
    ========================== */

    const increaseFont =
        document.getElementById("increaseFont");


    if (increaseFont) {

        increaseFont.addEventListener("click", function () {

            const atual =
                parseInt(
                    getComputedStyle(
                        document.documentElement
                    )
                    .getPropertyValue("--tamanho")
                );


            if (atual < 24) {

                document.documentElement.style.setProperty(
                    "--tamanho",
                    (atual + 2) + "px"
                );

            }

        });

    }


    /* =========================
       DIMINUIR FONTE
    ========================== */

    const decreaseFont =
        document.getElementById("decreaseFont");


    if (decreaseFont) {

        decreaseFont.addEventListener("click", function () {

            const atual =
                parseInt(
                    getComputedStyle(
                        document.documentElement
                    )
                    .getPropertyValue("--tamanho")
                );


            if (atual > 12) {

                document.documentElement.style.setProperty(
                    "--tamanho",
                    (atual - 2) + "px"
                );

            }

        });

    }


    /* =========================
       CONTRASTE
    ========================== */

    const contrastButton =
        document.getElementById("contrastButton");


    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "high-contrast"
                );

            }
        );

    }


    /* =========================
       MODO ESCURO
    ========================== */

    const darkMode =
        document.getElementById("darkMode");


    if (darkMode) {

        darkMode.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark"
                );

            }
        );

    }


    /* =========================
       ESPAÇAMENTO
    ========================== */

    const spacingButton =
        document.getElementById("spacingButton");


    if (spacingButton) {

        spacingButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "extra-spacing"
                );

            }
        );

    }


    /* =========================
       FAQ
    ========================== */

    const questions =
        document.querySelectorAll(
            ".faq-question"
        );


    questions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const answer =
                    question.nextElementSibling;


                if (!answer) {
                    return;
                }


                const aberto =
                    answer.classList.contains(
                        "active"
                    );


                answer.classList.toggle(
                    "active"
                );


                const sinal =
                    question.querySelector(
                        "span"
                    );


                if (sinal) {

                    sinal.textContent =
                        aberto ? "+" : "−";

                }

            }
        );

    });


    /* =========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    const topButton =
        document.getElementById("topButton");


    if (topButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    topButton.classList.add(
                        "show"
                    );

                } else {

                    topButton.classList.remove(
                        "show"
                    );

                }

            }
        );


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =========================
       FORMULÁRIO
       WEB3FORMS
    ========================== */

    const form =
        document.querySelector(
            ".contact-form"
        );


    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                const name =
                    document.getElementById(
                        "name"
                    );


                const email =
                    document.getElementById(
                        "email"
                    );


                const message =
                    document.getElementById(
                        "message"
                    );


                /* =========================
                   NOME
                ========================== */

                if (
                    name &&
                    !name.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite seu nome."
                    );

                    name.focus();

                    return;

                }


                /* =========================
                   E-MAIL
                ========================== */

                if (
                    email &&
                    !email.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite seu e-mail."
                    );

                    email.focus();

                    return;

                }


                /* =========================
                   MENSAGEM
                ========================== */

                if (
                    message &&
                    !message.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite uma mensagem."
                    );

                    message.focus();

                    return;

                }


                /*
                 * NÃO usar
                 * event.preventDefault()
                 * aqui.
                 *
                 * Se estiver tudo correto,
                 * o formulário será enviado
                 * normalmente para o Web3Forms.
                 */

            }
        );

    }


    /* =========================
       OLHO SEGUINDO O MOUSE
       
       Só funciona na página
       que possui #eyeFollower.
    ========================== */

    const eye =
        document.getElementById(
            "eyeFollower"
        );


    if (eye) {

        document.addEventListener(
            "mousemove",
            function (event) {


                /* =========================
                   POSIÇÃO DO OLHO
                ========================== */

                const eyeRect =
                    eye.getBoundingClientRect();


                const eyeCenterX =
                    eyeRect.left +
                    eyeRect.width / 2;


                const eyeCenterY =
                    eyeRect.top +
                    eyeRect.height / 2;


                /* =========================
                   POSIÇÃO DO MOUSE
                ========================== */

                const mouseX =
                    event.clientX;


                const mouseY =
                    event.clientY;


                /* =========================
                   DISTÂNCIA
                ========================== */

                const deltaX =
                    mouseX -
                    eyeCenterX;


                const deltaY =
                    mouseY -
                    eyeCenterY;


                /* =========================
                   ÂNGULO
                ========================== */

                const angle =
                    Math.atan2(
                        deltaY,
                        deltaX
                    );


                /* =========================
                   MOVIMENTO
                ========================== */

                const distancia =
                    Math.min(
                        18,
                        Math.hypot(
                            deltaX,
                            deltaY
                        ) / 15
                    );


                const x =
                    Math.cos(angle) *
                    distancia;


                const y =
                    Math.sin(angle) *
                    distancia;


                /* =========================
                   APLICAR MOVIMENTO
                ========================== */

                eye.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }

});