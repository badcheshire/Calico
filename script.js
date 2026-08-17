document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONFIGURAÇÕES DE ACESSIBILIDADE
       Salvas no navegador com localStorage
    ===================================================== */

    const html = document.documentElement;
    const body = document.body;

    const tamanhoSalvo =
        localStorage.getItem("tamanhoFonte") || "16";

    const modoEscuro =
        localStorage.getItem("modoEscuro") === "true";

    const altoContraste =
        localStorage.getItem("altoContraste") === "true";

    const espacamento =
        localStorage.getItem("espacamento") === "true";


    /* =====================================================
       APLICAR CONFIGURAÇÕES SALVAS
    ===================================================== */

    html.style.setProperty(
        "--tamanho",
        tamanhoSalvo + "px"
    );

    if (modoEscuro) {
        body.classList.add("dark");
    }

    if (altoContraste) {
        body.classList.add("high-contrast");
    }

    if (espacamento) {
        body.classList.add("extra-spacing");
    }


    /* =====================================================
       MENU
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const nav =
        document.querySelector("nav");

    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle("active");

                const aberto =
                    nav.classList.contains("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    aberto ? "true" : "false"
                );

            }
        );

    }


    /* =====================================================
       FECHAR MENU
    ===================================================== */

    document
        .querySelectorAll("nav a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (nav) {
                        nav.classList.remove("active");
                    }

                    if (menuButton) {
                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                }
            );

        });


    /* =====================================================
       AUMENTAR FONTE
    ===================================================== */

    const increaseFont =
        document.getElementById("increaseFont");

    if (increaseFont) {

        increaseFont.addEventListener(
            "click",
            function () {

                let tamanho =
                    parseInt(
                        getComputedStyle(html)
                            .getPropertyValue("--tamanho")
                    );

                if (tamanho < 24) {

                    tamanho += 2;

                    html.style.setProperty(
                        "--tamanho",
                        tamanho + "px"
                    );

                    localStorage.setItem(
                        "tamanhoFonte",
                        tamanho
                    );

                }

            }
        );

    }


    /* =====================================================
       DIMINUIR FONTE
    ===================================================== */

    const decreaseFont =
        document.getElementById("decreaseFont");

    if (decreaseFont) {

        decreaseFont.addEventListener(
            "click",
            function () {

                let tamanho =
                    parseInt(
                        getComputedStyle(html)
                            .getPropertyValue("--tamanho")
                    );

                if (tamanho > 12) {

                    tamanho -= 2;

                    html.style.setProperty(
                        "--tamanho",
                        tamanho + "px"
                    );

                    localStorage.setItem(
                        "tamanhoFonte",
                        tamanho
                    );

                }

            }
        );

    }


    /* =====================================================
       MODO ESCURO
    ===================================================== */

    const darkMode =
        document.getElementById("darkMode");

    if (darkMode) {

        darkMode.addEventListener(
            "click",
            function () {

                body.classList.toggle("dark");

                localStorage.setItem(
                    "modoEscuro",
                    body.classList.contains("dark")
                );

            }
        );

    }


    /* =====================================================
       ALTO CONTRASTE
    ===================================================== */

    const contrastButton =
        document.getElementById("contrastButton");

    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            function () {

                body.classList.toggle(
                    "high-contrast"
                );

                localStorage.setItem(
                    "altoContraste",
                    body.classList.contains(
                        "high-contrast"
                    )
                );

            }
        );

    }


    /* =====================================================
       ESPAÇAMENTO
    ===================================================== */

    const spacingButton =
        document.getElementById("spacingButton");

    if (spacingButton) {

        spacingButton.addEventListener(
            "click",
            function () {

                body.classList.toggle(
                    "extra-spacing"
                );

                localStorage.setItem(
                    "espacamento",
                    body.classList.contains(
                        "extra-spacing"
                    )
                );

            }
        );

    }


    /* =====================================================
       FAQ
    ===================================================== */

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

                if (!answer) return;

                const aberto =
                    answer.classList.contains(
                        "active"
                    );

                answer.classList.toggle(
                    "active"
                );

                const sinal =
                    question.querySelector("span");

                if (sinal) {

                    sinal.textContent =
                        aberto ? "+" : "−";

                }

            }
        );

    });


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
    ===================================================== */

    const topButton =
        document.getElementById("topButton");

    if (topButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    topButton.classList.add("show");

                } else {

                    topButton.classList.remove("show");

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


    /* =====================================================
       FORMULÁRIO
    ===================================================== */

    const form =
        document.querySelector(".contact-form");

    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const message =
                    document.getElementById("message");


                if (
                    name &&
                    !name.value.trim()
                ) {

                    event.preventDefault();

                    alert("Digite seu nome.");

                    name.focus();

                    return;

                }


                if (
                    email &&
                    !email.value.trim()
                ) {

                    event.preventDefault();

                    alert("Digite seu e-mail.");

                    email.focus();

                    return;

                }


                if (
                    message &&
                    !message.value.trim()
                ) {

                    event.preventDefault();

                    alert("Digite uma mensagem.");

                    message.focus();

                    return;

                }

            }
        );

    }


    /* =====================================================
       OLHO SEGUINDO O MOUSE
    ===================================================== */

    const eye =
        document.getElementById("eyeFollower");

    if (eye) {

        document.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    eye.getBoundingClientRect();

                const centerX =
                    rect.left +
                    rect.width / 2;

                const centerY =
                    rect.top +
                    rect.height / 2;

                const deltaX =
                    event.clientX - centerX;

                const deltaY =
                    event.clientY - centerY;

                const angle =
                    Math.atan2(
                        deltaY,
                        deltaX
                    );

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

                eye.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }

});