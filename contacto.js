document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    // creamos header
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.classList.add('logo');
    logo.textContent = 'Trivia 37';
    header.appendChild(logo);

    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Inicio';
    nav.appendChild(homeLink);

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.classList.add('active');
    contactLink.textContent = 'Contacto';
    nav.appendChild(contactLink);

    header.appendChild(nav);
    root.appendChild(header);

    // creamos la sección del contacto
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.textContent = '¡Contáctanos!';
    contactSection.appendChild(h2);

    const form = document.createElement('form');
    form.action = '#';

    const inputBox1 = document.createElement('div');
    inputBox1.classList.add('input-box');

    const inputField1 = document.createElement('div');
    inputField1.classList.add('input-field', 'field');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Nombre Completo';
    nameInput.id = 'name';
    nameInput.classList.add('item');
    nameInput.autocomplete = 'off';
    const errorTxt1 = document.createElement('div');
    errorTxt1.classList.add('error-txt');
    errorTxt1.textContent = 'Debes responder este espacio.';
    inputField1.appendChild(nameInput);
    inputField1.appendChild(errorTxt1);

    const inputField2 = document.createElement('div');
    inputField2.classList.add('input-field', 'field');
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Dirección Email';
    emailInput.id = 'email';
    emailInput.classList.add('item');
    emailInput.autocomplete = 'off';
    const errorTxt2 = document.createElement('div');
    errorTxt2.classList.add('error-txt', 'email');
    errorTxt2.textContent = 'Debes responder este espacio.';
    inputField2.appendChild(emailInput);
    inputField2.appendChild(errorTxt2);

    inputBox1.appendChild(inputField1);
    inputBox1.appendChild(inputField2);

    form.appendChild(inputBox1);

    const inputBox2 = document.createElement('div');
    inputBox2.classList.add('input-box');

    const inputField3 = document.createElement('div');
    inputField3.classList.add('input-field', 'field');
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Número de teléfono';
    phoneInput.id = 'phone';
    phoneInput.classList.add('item');
    phoneInput.autocomplete = 'off';
    const errorTxt3 = document.createElement('div');
    errorTxt3.classList.add('error-txt');
    errorTxt3.textContent = 'Debes responder este espacio.';
    inputField3.appendChild(phoneInput);
    inputField3.appendChild(errorTxt3);

    const inputField4 = document.createElement('div');
    inputField4.classList.add('input-field', 'field');
    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.placeholder = 'Asunto';
    subjectInput.id = 'subject';
    subjectInput.classList.add('item');
    subjectInput.autocomplete = 'off';
    const errorTxt4 = document.createElement('div');
    errorTxt4.classList.add('error-txt');
    errorTxt4.textContent = 'Debes responder este espacio.';
    inputField4.appendChild(subjectInput);
    inputField4.appendChild(errorTxt4);

    inputBox2.appendChild(inputField3);
    inputBox2.appendChild(inputField4);

    form.appendChild(inputBox2);

    const textareaField = document.createElement('div');
    textareaField.classList.add('textarea-field', 'field');
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.cols = '30';
    messageTextarea.rows = '10';
    messageTextarea.placeholder = 'Tu mensaje:';
    messageTextarea.classList.add('item');
    messageTextarea.autocomplete = 'off';
    const errorTxt5 = document.createElement('div');
    errorTxt5.classList.add('error-txt');
    errorTxt5.textContent = 'Debes agregar un mensaje.';
    textareaField.appendChild(messageTextarea);
    textareaField.appendChild(errorTxt5);

    form.appendChild(textareaField);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar mensaje';
    form.appendChild(submitButton);

    contactSection.appendChild(form);
    root.appendChild(contactSection);

    // footer
    const footer = document.createElement('footer');
    footer.innerHTML = '© 2024 La Trivia del 37. Todos los derechos reservados. <span id="dateTime"></span>';
    root.appendChild(footer);

    // funciones
    function sendEmail() {
        const bodyMessage = `Nombre Completo: ${nameInput.value} <br> Email: ${emailInput.value} <br> Teléfono: ${phoneInput.value} <br> Mensaje: ${messageTextarea.value} <br>`;

        Email.send({
            SecureToken: "f8b8ed96-eca6-489d-be62-af6dc32b1c27",
            Host: "smtp.elasticemail.com",
            Username: "lopez.omar.cb37@gmail.com",
            Password: "C002D66C4655C92A15DAB6670334BE11A9A0",
            To: 'lopez.omar.cb37@gmail.com',
            From: "lopez.omar.cb37@gmail.com",
            Subject: subjectInput.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        title: "¡Muy Bien!",
                        text: "¡Mensaje enviado con éxito!",
                        icon: "success"
                    });
                }
            }
        );
    }

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            if (items[1].value !== "") {
                checkEmail();
            }

            items[1].addEventListener("keyup", checkEmail);

            item.addEventListener("keyup", () => {
                if (item.value !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        }
    }

    function checkEmail() {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!emailInput.value.match(emailRegex)) {
            emailInput.classList.add("error");
            emailInput.parentElement.classList.add("error");

            if (emailInput.value !== "") {
                errorTxtEmail.innerText = "Ingrese una dirección de correo válida.";
            } else {
                errorTxtEmail.innerText = "Debes responder este espacio.";
            }
        } else {
            emailInput.classList.remove("error");
            emailInput.parentElement.classList.remove("error");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!nameInput.classList.contains("error") && !emailInput.classList.contains("error") && !phoneInput.classList.contains("error") && !subjectInput.classList.contains("error") && !messageTextarea.classList.contains("error")) {
            sendEmail();
            form.reset();
            return false;
        }
    });
//reloj
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('dateTime').textContent = dateTimeString;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});