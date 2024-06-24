document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.querySelector('body');

    const main = document.createElement('main');
    main.classList.add('main');

    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.classList.add('logo');
    logo.textContent = 'Trivia 37';
    header.appendChild(logo);

    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navInicio = document.createElement('a');
    navInicio.href = '#';
    navInicio.classList.add('active');
    navInicio.textContent = 'Inicio';
    nav.appendChild(navInicio);

    const navContacto = document.createElement('a');
    navContacto.href = 'contacto.html';
    navContacto.textContent = 'Contacto';
    nav.appendChild(navContacto);

    header.appendChild(nav);
    main.appendChild(header);

    const container = document.createElement('div');
    container.classList.add('container');

    const quizSection = document.createElement('section');
    quizSection.classList.add('quiz-section');

    const quizBox = document.createElement('div');
    quizBox.classList.add('quiz-box');

    const quizTitle = document.createElement('h1');
    quizTitle.textContent = 'Trivia 37';
    quizBox.appendChild(quizTitle);

    const quizHeader = document.createElement('div');
    quizHeader.classList.add('quiz-header');

    const categorySpan = document.createElement('span');
    categorySpan.textContent = 'Astronomía';
    quizHeader.appendChild(categorySpan);

    const scoreSpan = document.createElement('span');
    scoreSpan.classList.add('header-score');
    scoreSpan.textContent = 'Puntuación: 0 / 5';
    quizHeader.appendChild(scoreSpan);

    quizBox.appendChild(quizHeader);

    const questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.textContent = '¿Cuál es el planeta más pequeño del sistema solar?';
    quizBox.appendChild(questionText);

    const optionList = document.createElement('div');
    optionList.classList.add('option-list');
    quizBox.appendChild(optionList);

    const quizFooter = document.createElement('div');
    quizFooter.classList.add('quiz-footer');

    const backButton = document.createElement('button');
    backButton.classList.add('back-btn');
    backButton.textContent = 'Volver al inicio';
    quizFooter.appendChild(backButton);

    const questionTotal = document.createElement('span');
    questionTotal.classList.add('question-total');
    questionTotal.textContent = '1 de 5 Preguntas';
    quizFooter.appendChild(questionTotal);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Siguiente';
    quizFooter.appendChild(nextButton);

    quizBox.appendChild(quizFooter);
    quizSection.appendChild(quizBox);

    const resultBox = document.createElement('div');
    resultBox.classList.add('result-box');

    const resultTitle = document.createElement('h2');
    resultTitle.textContent = '¡Resultado!';
    resultBox.appendChild(resultTitle);

    const percentageContainer = document.createElement('div');
    percentageContainer.classList.add('percentage-container');

    const circularProgress = document.createElement('div');
    circularProgress.classList.add('circular-progress');

    const progressValue = document.createElement('span');
    progressValue.classList.add('progress-value');
    progressValue.textContent = '0%';
    circularProgress.appendChild(progressValue);

    percentageContainer.appendChild(circularProgress);

    const scoreText = document.createElement('span');
    scoreText.classList.add('score-text');
    scoreText.textContent = 'Tu puntuación 0 de 5';
    percentageContainer.appendChild(scoreText);

    resultBox.appendChild(percentageContainer);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const tryAgainButton = document.createElement('button');
    tryAgainButton.classList.add('tryAgain-btn');
    tryAgainButton.textContent = 'Jugar de nuevo';
    buttonsDiv.appendChild(tryAgainButton);

    const goHomeButton = document.createElement('button');
    goHomeButton.classList.add('goHome-btn');
    goHomeButton.textContent = 'Volver al inicio';
    buttonsDiv.appendChild(goHomeButton);

    resultBox.appendChild(buttonsDiv);
    quizSection.appendChild(resultBox);

    container.appendChild(quizSection);

    const homeSection = document.createElement('section');
    homeSection.classList.add('home');

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Bienvenidos a la Trivia 37';
    homeContent.appendChild(homeTitle);

    const homeParagraph = document.createElement('p');
    homeParagraph.textContent = '¡Prueba tus conocimientos y diviértete con nosotros!';
    homeContent.appendChild(homeParagraph);

    const startButton = document.createElement('button');
    startButton.classList.add('start-btn');
    startButton.textContent = 'Empezar Juego';
    homeContent.appendChild(startButton);

    homeSection.appendChild(homeContent);
    container.appendChild(homeSection);

    main.appendChild(container);

    const footer = document.createElement('footer');
    footer.innerHTML = '© 2024 La Trivia del 37. Todos los derechos reservados. <span id="dateTime"></span>';
    main.appendChild(footer);

    body.appendChild(main);

    const popupInfo = document.createElement('div');
    popupInfo.classList.add('popup-info');

    const popupTitle = document.createElement('h2');
    popupTitle.textContent = 'Guía de juego';
    popupInfo.appendChild(popupTitle);

    const info1 = document.createElement('span');
    info1.classList.add('info');
    info1.textContent = '1. Selecciona la respuesta que creas correcta.';
    popupInfo.appendChild(info1);

    const info2 = document.createElement('span');
    info2.classList.add('info');
    info2.textContent = '2. Consigue el mayor número de respuestas correctas para ganar.';
    popupInfo.appendChild(info2);

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');

    const exitButton = document.createElement('button');
    exitButton.classList.add('info-btn', 'exit-btn');
    exitButton.textContent = 'Salir';
    btnGroup.appendChild(exitButton);

    const continueLink = document.createElement('a');
    continueLink.href = '#';
    continueLink.classList.add('info-btn', 'continue-btn');
    continueLink.textContent = 'Continuar';
    btnGroup.appendChild(continueLink);

    popupInfo.appendChild(btnGroup);
    body.appendChild(popupInfo);

    // Nueva sección para la selección de categorías
    const categorySection = document.createElement('div');
    categorySection.classList.add('category-section');
    
    const categoryContent = document.createElement('div');
    categoryContent.classList.add('category-content');
    
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = 'Selecciona una categoría';
    categoryContent.appendChild(categoryTitle);
    
    const categories = ['Cultura General', 'Música', 'Deporte', 'Ciencia'];
    categories.forEach(cat => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = cat;
        categoryContent.appendChild(categoryButton);
    });
    
    categorySection.appendChild(categoryContent);
    body.appendChild(categorySection);

    // Sección de selección de dificultad
    const difficultySection = document.createElement('div');
    difficultySection.classList.add('difficulty-section');

    const difficultyTitle = document.createElement('h2');
    difficultyTitle.textContent = 'Selecciona una dificultad';
    difficultySection.appendChild(difficultyTitle);

    const difficulties = ['Fácil', 'Medio', 'Difícil'];
    difficulties.forEach(difficulty => {
    const difficultyButton = document.createElement('button');
    difficultyButton.classList.add('difficulty-btn');
    difficultyButton.textContent = difficulty;
    difficultySection.appendChild(difficultyButton);
    });

    body.appendChild(difficultySection);

    const startBtn = document.querySelector('.start-btn');
    const popupInfoElement = document.querySelector('.popup-info');
    const mainElement = document.querySelector('main');
    const exitBtn = document.querySelector('.exit-btn');
    const continueBtn = document.querySelector('.continue-btn');
    const tryAgainBtn = document.querySelector('.tryAgain-btn');
    const goHomeBtn = document.querySelector('.goHome-btn');
    const backBtn = document.querySelector('.back-btn');
    const nextBtn = document.querySelector('.next-btn');
    const quizSectionElement = document.querySelector('.quiz-section');
    const quizBoxElement = document.querySelector('.quiz-box');
    const resultBoxElement = document.querySelector('.result-box');
    const optionListElement = document.querySelector('.option-list');
    const categorySectionElement = document.querySelector('.category-section');

    let questionCount = 0;
    let questionNumb = 1;
    let totalQuestions = 0;
    let userScore = 0;
    let currentQuestions = [];

    // Función para mezclar aleatoriamente un array (Fisher-Yates shuffle)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Mostrar popup-info y aplicar blur al main
    startBtn.onclick = () => {
        popupInfoElement.classList.add('active');
        mainElement.classList.add('active');
    }

    // Cerrar popup-info y quitar blur al main
    exitBtn.onclick = () => {
        popupInfoElement.classList.remove('active');
        mainElement.classList.remove('active');
    }

    // Continuar a la selección de categoría, cerrar popup-info y mantener blur en main
    continueBtn.onclick = () => {
        categorySectionElement.classList.add('active');
        popupInfoElement.classList.remove('active');
        mainElement.classList.add('active'); // Asegurar que main sigue teniendo blur
    }

    // Mapeo entre el texto del botón y la clave en el objeto questions
    const categoryKeyMap = {
        'Cultura General': 'CulturaGeneral',
        'Música': 'Música',
        'Deporte': 'Deporte',
        'Ciencia': 'Ciencia',
    };

    // Event listener para los botones de categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let selectedCategoryText = event.target.textContent;
            let selectedCategory = categoryKeyMap[selectedCategoryText];
            
            console.log('Categoría seleccionada:', selectedCategory);

            // Guardar en localStorage la categoría seleccionada
            localStorage.setItem('selectedCategory', selectedCategory);
            
            // Actualizar el texto del span en quiz-header
            categorySpan.textContent = selectedCategoryText;

            categorySectionElement.classList.remove('active');
            difficultySection.classList.add('active');
        });
    });

    // Event listeners para las dificultades
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let selectedDifficulty = event.target.textContent.toLowerCase();
            let selectedCategory = localStorage.getItem('selectedCategory');

            console.log('Dificultad seleccionada:', selectedDifficulty);

            // Determinar el número de preguntas según la dificultad seleccionada
            let numQuestions = 0;
            if (selectedDifficulty === 'fácil') {
                numQuestions = 5;
            } else if (selectedDifficulty === 'medio') {
                numQuestions = 10;
            } else if (selectedDifficulty === 'difícil') {
                numQuestions = 15;
            }

            // Obtener las preguntas basadas en la categoría y la dificultad seleccionadas
            if (selectedCategory && questions[selectedCategory]) {
                let questionsByCategory = questions[selectedCategory];
                if (questionsByCategory[selectedDifficulty]) {
                    // Obtener las preguntas correctas y mezclarlas
                    currentQuestions = shuffleArray(questionsByCategory[selectedDifficulty]).slice(0, numQuestions);

                    // Actualizar el número total de preguntas disponibles
                    totalQuestions = currentQuestions.length;

                    // Actualizar el texto del contador de preguntas
                    const questionTotal = document.querySelector('.question-total');
                    questionTotal.textContent = `1 de ${totalQuestions} Preguntas`;

                    difficultySection.classList.remove('active');
                    quizSectionElement.classList.add('active');
                    quizBoxElement.classList.add('active');
                    mainElement.classList.remove('active');

                    showQuestions(0);
                    questionCounter(1); // Llamar a questionCounter inicialmente con 1
                    headerScore();
                } else {
                    console.error(`No hay preguntas disponibles para la dificultad '${selectedDifficulty}' en la categoría '${selectedCategory}'.`);
                }
            } else {
                console.error(`No se ha seleccionado una categoría válida.`);
            }
        });
    });

    function showQuestions(index) {
        const questionText = document.querySelector('.question-text');
        const currentQuestionNumber = index + 1; // Calculamos el número actual de la pregunta
        questionText.textContent = `${currentQuestionNumber}. ${currentQuestions[index].question}`;

        let optionTag = currentQuestions[index].options.map(option => 
            `<div class="option"><span>${option}</span></div>`
        ).join('');

        optionListElement.innerHTML = optionTag;
    }

    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('dateTime').textContent = dateTimeString;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    tryAgainBtn.onclick = () => {
        // Resetear variables
        questionCount = 0;
        questionNumb = 1;
        userScore = 0;
        currentQuestions = [];
    
        // Remover clases activas para volver a la selección de categoría y dificultad
        quizBoxElement.classList.remove('correct', 'incorrect'); // Resetear borde
        quizBoxElement.classList.remove('active');
        resultBoxElement.classList.remove('active');
        categorySectionElement.classList.add('active');
        mainElement.classList.add('active'); // Mantener el blur
    };

    goHomeBtn.onclick = () => {
        quizSectionElement.classList.remove('active');
        nextBtn.classList.remove('active');
        resultBoxElement.classList.remove('active');
        quizBoxElement.classList.remove('correct', 'incorrect'); // Resetear borde
        
        questionCount = 0;
        questionNumb = 1;
        userScore = 0;

        shuffleArray(currentQuestions); // Mezclar preguntas aleatoriamente
        questionCounter(questionNumb);
    }

    backBtn.onclick = () => {
        quizSectionElement.classList.remove('active');
        nextBtn.classList.remove('active');
        resultBoxElement.classList.remove('active');
        quizBoxElement.classList.remove('correct', 'incorrect'); // Resetear borde
        
        questionCount = 0;
        questionNumb = 1;
        userScore = 0;

        shuffleArray(currentQuestions); // Mezclar preguntas aleatoriamente
        questionCounter(questionNumb);
    }

    nextBtn.onclick = () => {
        if (questionCount < currentQuestions.length - 1) {
            questionCount++;
            showQuestions(questionCount);
    
            questionNumb++;
            questionCounter(questionNumb);
    
            nextBtn.classList.remove('active');
            quizBoxElement.classList.remove('correct', 'incorrect'); // Resetear borde
        } else {
            showResultBox();
        }
    };

    function optionSelected(selectedOption, questionIndex) {
        let userAnswer = selectedOption.textContent;
        let correctAnswer = currentQuestions[questionIndex].answer;
        let allOptions = optionListElement.children.length;
    
        if (userAnswer === correctAnswer) {
            selectedOption.classList.add('correct');
            userScore += 1;
            headerScore();
            quizBoxElement.classList.add('correct'); // Resaltar borde en verde
        } else {
            selectedOption.classList.add('incorrect');
            quizBoxElement.classList.add('incorrect'); // Resaltar borde en rojo
    
            for (let i = 0; i < allOptions; i++) {
                if (optionListElement.children[i].textContent === correctAnswer) {
                    optionListElement.children[i].classList.add('correct');
                }
            }
        }
    
        for (let i = 0; i < allOptions; i++) {
            optionListElement.children[i].classList.add('disabled');
        }
        nextBtn.classList.add('active');
    }

    // Event listener para manejar la selección de opciones
    optionListElement.addEventListener('click', (event) => {
        let target = event.target;

        // Verifica si se hizo clic en el 'span' dentro de '.option' o directamente en '.option'
        if (target.classList.contains('option')) {
            optionSelected(target, questionCount);
        } else if (target.parentElement.classList.contains('option')) {
            optionSelected(target.parentElement, questionCount);
        }
    });

    // Función para actualizar el contador de preguntas
    function questionCounter(index) {
        const questionTotal = document.querySelector('.question-total');
        questionTotal.textContent = `${index} de ${totalQuestions} Preguntas`; // Mostrar el número actual y total de preguntas
    }

    function headerScore() {
        const headerScoreText = document.querySelector('.header-score');
        headerScoreText.textContent = `Score: ${userScore} / ${currentQuestions.length}`;
    }

    function showResultBox() {
        quizBoxElement.classList.remove('active');
        resultBoxElement.classList.add('active');

        const scoreText = document.querySelector('.score-text');
        scoreText.textContent = `Tu puntuación ${userScore} de ${currentQuestions.length}`;

        const circularProgress = document.querySelector('.circular-progress');
        const progressValue = document.querySelector('.progress-value');
        let progressStartValue = -1;
        let progressEndValue = (userScore / currentQuestions.length) * 100;
        let speed = 20;

        console.log(progressEndValue);

        let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

            if (progressStartValue == progressEndValue.toFixed(0)) {
                clearInterval(progress);
            }

            console.log(progressStartValue);

        }, speed);
    }
});