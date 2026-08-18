document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;


    /* =====================================================
       ACESSIBILIDADE SALVA
    ===================================================== */

    let tamanhoFonte =
        parseInt(
            localStorage.getItem("tamanhoFonte")
        ) || 16;


    if (localStorage.getItem("modoEscuro") === "true") {
        body.classList.add("dark");
    }


    if (localStorage.getItem("altoContraste") === "true") {
        body.classList.add("high-contrast");
    }


    if (localStorage.getItem("espacamento") === "true") {
        body.classList.add("extra-spacing");
    }


    function aplicarTamanhoFonte() {

        body.style.setProperty(
            "--tamanho-texto",
            tamanhoFonte + "px"
        );

        localStorage.setItem(
            "tamanhoFonte",
            tamanhoFonte
        );
    }


    aplicarTamanhoFonte();


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

    document.querySelectorAll("nav a")
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

                if (tamanhoFonte < 28) {

                    tamanhoFonte += 2;

                    aplicarTamanhoFonte();

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

                if (tamanhoFonte > 12) {

                    tamanhoFonte -= 2;

                    aplicarTamanhoFonte();

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
       CONTRASTE
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


                const symbol =
                    question.querySelector(
                        ".faq-symbol"
                    );


                if (symbol) {

                    symbol.textContent =
                        aberto ? "+" : "−";

                }

            }
        );

    });


    /* =====================================================
       VOLTAR AO TOPO
    ===================================================== */

    const topButton =
        document.getElementById(
            "topButton"
        );


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


    /* =====================================================
       FORMULÁRIO
    ===================================================== */

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


                if (
                    !name ||
                    !name.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite seu nome."
                    );

                    if (name) {
                        name.focus();
                    }

                    return;

                }


                if (
                    !email ||
                    !email.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite seu e-mail."
                    );

                    if (email) {
                        email.focus();
                    }

                    return;

                }


                if (
                    !message ||
                    !message.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Digite uma mensagem."
                    );

                    if (message) {
                        message.focus();
                    }

                    return;

                }

            }
        );

    }


    /* =====================================================
       OLHO
    ===================================================== */

    const pupil =
        document.getElementById(
            "eyeFollower"
        );


    if (pupil) {

        const eye =
            pupil.parentElement;


        document.addEventListener(
            "mousemove",
            function (event) {

                if (!eye) {
                    return;
                }


                const rect =
                    eye.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const deltaX =
                    event.clientX -
                    centerX;


                const deltaY =
                    event.clientY -
                    centerY;


                const angle =
                    Math.atan2(
                        deltaY,
                        deltaX
                    );


                const distance =
                    Math.min(
                        7,
                        Math.hypot(
                            deltaX,
                            deltaY
                        ) / 30
                    );


                const x =
                    Math.cos(angle) *
                    distance;


                const y =
                    Math.sin(angle) *
                    distance;


                pupil.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );


        document.addEventListener(
            "mouseleave",
            function () {

                pupil.style.transform =
                    "translate(0, 0)";

            }
        );

    }

});