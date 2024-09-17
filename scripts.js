let scores = {
    quiz1: 0,
    quiz2: 0
};

let currentQuestionIndex = {
    quiz1: 0,
    quiz2: 0
};

let playerName = "";

// Perguntas dos quizzes
const quizzes = {
    quiz1: [
        { question: "Qual é o primeiro álbum de Billie Eilish?", answers: ["When We All Fall Asleep, Where Do We Go?", "Happier Than Ever", "Don't Smile at Me"], correct: 0 },
        { question: "Em que ano o álbum 'Happier Than Ever' foi lançado?", answers: ["2021", "2019", "2020"], correct: 0 },
        { question: "Qual faixa abre o álbum 'When We All Fall Asleep, Where Do We Go?'", answers: ["Bad Guy", "You Should See Me in a Crown", "!!!!!!!"], correct: 2 },
        { question: "Qual é a última faixa de 'Happier Than Ever'?", answers: ["Happier Than Ever", "Male Fantasy", "Billie Bossa Nova"], correct: 1 },
        { question: "Onde BIRDS OF A FEATHER estava sendo produzido?", answers: ["Estados Unidos", "Argentina", "Brasil"], correct: 2 },
        { question: "Quando HIT ME HARD AND SOFT foi lançado?", answers: ["30 de Fevereiro", "17 de Maio", "17 de Fevereiro"], correct: 1 },
        { question: "Qual é a sexta música do álbum?", answers: ["L'AMOUR DE MA VIE", "WILDFLOWER", "THE GREATEST"], correct: 2 },
        { question: "Quem fez Billie dar o nome WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", answers: ["Finneas","Maggie","Patrick"], correct: 0 },
        { question: "Qual dessas músicas falam sobre dependência química?", answers: ["Male Fantasy", "Bury a Friend", "Xanny"], correct: 2 },
        { question: "Qual música de HIT ME HARD AND SOFT que tem a mesma estrutura que 'goodbye'?", answers: ["L'AMOUR DE MA VIE", "BLUE", "SKINNY"], correct: 1 }
    ],
      quiz2: [
        { question: "Em qual festival Billie Eilish se apresentou em 2022?", answers: ["Coachella", "Lollapalooza", "Glastonbury"], correct: 0 },
        { question: "Em que cidade Billie Eilish fez seu primeiro show no Brasil?", answers: ["São Paulo", "Rio de Janeiro", "Curitiba"], correct: 0 },
        { question: "Qual foi o primeiro grande festival americano que ela participou?", answers: ["Coachella", "Lollapalooza", "SXSW"], correct: 2 },
        { question: "Em que ano foi a turnê 'When We All Fall Asleep World Tour'?", answers: ["2019", "2020", "2018"], correct: 0 },
        { question: "Quando a Billie veio para o Brasil?", answers: ["2023", "2022", "2021"], correct: 0 },
        { question: "Qual foi o Record batido por Billie no Lollapalooza?", answers: ["90.154 pessoas", "101.265 pessoas", "103.350 pessoas"], correct: 2 },
        { question: "Quando começa a HIT ME HARD AND SOFT: TOUR?", answers: ["29 de Setembro", "30 de Setembro", "17 de Setemebro"], correct: 0 },
        { question: "Onde começa a HIT ME HARD AND SOFT: TOUR?", answers: ["Toronto, Canada", "Detroit, Estados Unidos", "Quebec, Canada"], correct: 2 }, 
        { question: "Quando termina a HIT ME HARD AND SOFT: TOUR?", answers: ["26 de Julho de 2025", "27 de Julho de 2025", "17 de Dezembro de 2024"], correct: 1 },
        { question: "Qual desses faz parte do ato de abertura?", answers: ["Justin Bieber", "Chappell Roan", "Towa Bird"], correct: 2 },
    ]
};

// Função para definir o nome do jogador
function setPlayerName() {
    playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("name-container").classList.add("hidden");
        document.getElementById("quiz-buttons").classList.remove("hidden");
    } else {
        alert("Por favor, insira seu nome.");
    }
}

// Função para iniciar o quiz
function startQuiz(quizId) {
    scores[quizId] = 0;
    currentQuestionIndex[quizId] = 0;

    // Esconde todos os quizzes
    const quizzesDiv = document.querySelectorAll('.quiz');
    quizzesDiv.forEach(quiz => {
        quiz.classList.remove('active');
        
        const scoreElement = quiz.querySelector(`#score${quizId.slice(-1)}`);
        if (scoreElement) scoreElement.textContent = 'Pontuação: 0';

        const endElement = quiz.querySelector(`#quiz${quizId.slice(-1)}-end`);
        if (endElement) endElement.classList.add('hidden');

        const rankingElement = quiz.querySelector(`#ranking${quizId.slice(-1)}`);
        if (rankingElement) rankingElement.classList.add('hidden');

        const questionsElement = quiz.querySelector(`#${quizId}-questions`);
        if (questionsElement) questionsElement.innerHTML = ''; // Limpa perguntas
    });

    // Mostra o quiz selecionado
    const selectedQuiz = document.getElementById(quizId);
    if (selectedQuiz) {
        selectedQuiz.classList.add('active');
        loadQuestion(quizId);  // Carrega a primeira pergunta
    } else {
        console.error(`Quiz ${quizId} não encontrado.`);
    }
}

// Função para carregar as perguntas
function loadQuestion(quizId) {
    const quizElement = document.getElementById(`${quizId}-questions`);
    const questionIndex = currentQuestionIndex[quizId];
    const quizData = quizzes[quizId];

    if (quizElement && questionIndex < quizData.length) {
        const currentQuestion = quizData[questionIndex];
        quizElement.innerHTML = `
            <p>${currentQuestion.question}</p>
            <button onclick="checkAnswer('${quizId}', 0)">${currentQuestion.answers[0]}</button>
            <button onclick="checkAnswer('${quizId}', 1)">${currentQuestion.answers[1]}</button>
            <button onclick="checkAnswer('${quizId}', 2)">${currentQuestion.answers[2]}</button>
        `;
    } else if (quizElement) {
        quizElement.innerHTML = '';
        const endElement = document.getElementById(`quiz${quizId.slice(-1)}-end`);
        if (endElement) endElement.classList.remove('hidden');

        const finalScoreElement = document.getElementById(`finalScore${quizId.slice(-1)}`);
        if (finalScoreElement) finalScoreElement.textContent = scores[quizId];

        if (scores[quizId] === quizzes[quizId].length) {
            const rankingElement = document.getElementById(`ranking${quizId.slice(-1)}`);
            if (rankingElement) {
                rankingElement.innerHTML = `
                    <h3>Parabéns! Você acertou todas as perguntas! &#128513;</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypMrtaqe3K5_dhSE4m3GmS3nURDfujgV2FA&s" alt="Parabéns">
                `;
            }
        }

        updateRanking(quizId);
    } else {
        console.error(`Elemento ${quizId}-questions não encontrado.`);
    }
}

// Função para verificar a resposta e avançar para a próxima pergunta
function checkAnswer(quizId, selectedAnswer) {
    const questionIndex = currentQuestionIndex[quizId];
    const currentQuestion = quizzes[quizId][questionIndex];

    if (selectedAnswer === currentQuestion.correct) {
        scores[quizId] += 1;
    }

    const scoreElement = document.getElementById(`score${quizId.slice(-1)}`);
    if (scoreElement) scoreElement.textContent = `Pontuação: ${scores[quizId]}`;

    currentQuestionIndex[quizId] += 1;
    loadQuestion(quizId);
}

// Função para atualizar o ranking
function updateRanking(quizId) {
    const storedRanking = JSON.parse(localStorage.getItem(`ranking_${quizId}`)) || [];
    storedRanking.push({ name: playerName, score: scores[quizId] });

    storedRanking.sort((a, b) => b.score - a.score);

    localStorage.setItem(`ranking_${quizId}`, JSON.stringify(storedRanking));

    displayRanking(quizId, storedRanking);
}

// Função para exibir o ranking
function displayRanking(quizId, ranking) {
    const rankingElement = document.getElementById(`ranking${quizId.slice(-1)}`);
    rankingElement.classList.remove('hidden');

    let rankingHTML = "<h3>Ranking:</h3><ol>";
    ranking.forEach((player, index) => {
        rankingHTML += `<li>${index + 1}. ${player.name} - ${player.score} pontos</li>`;
    });
    rankingHTML += "</ol>";

    rankingElement.innerHTML = rankingHTML;
}
