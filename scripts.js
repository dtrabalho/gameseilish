<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Games Eilish</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #123C73, #0E3D59, #060A0D);
            color: #f5f5f5;
            min-height: 100vh; /* Garantir que o gradiente cubra a altura total da página */
        }
        h1 {
            text-align: center;
            color: #BF0413; /* Cor vermelha para o título */
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 2.5em;
            font-weight: bold;
        }
        #name-container {
            text-align: center;
            margin-top: 20px;
        }
        #playerName {
            padding: 10px;
            border: 2px solid #0E3D59;
            border-radius: 5px;
            font-size: 1em;
            width: 80%;
            max-width: 300px;
            margin-right: 10px;
            outline: none;
            transition: border-color 0.3s;
        }
        #playerName:focus {
            border-color: #BF0413;
        }
        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            color: #fff;
            background-color: #BF0413; /* Cor vermelha para o botão */
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }
        button:hover {
            background-color: #A00C11; /* Cor vermelha mais escura ao passar o mouse */
            transform: scale(1.05);
        }
        button:active {
            transform: scale(1);
        }
        .hidden {
            display: none;
        }
        .quiz {
            display: none;
        }
        .quiz.active {
            display: block;
        }
        #quiz-buttons {
            text-align: center;
            margin-top: 20px;
        }
        #quiz-buttons button {
            margin: 5px;
            padding: 15px 25px;
            border: none;
            border-radius: 5px;
            background-color: #0E3D59;
            color: #fff;
            font-size: 1.1em;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }
        #quiz-buttons button:hover {
            background-color: #0B2740; /* Cor de botão mais escura ao passar o mouse */
            transform: scale(1.05);
        }
        #quiz-buttons button:active {
            transform: scale(1);
        }
    </style>
</head>
<body>
    <!-- Título da página -->
    <h1>Games Eilish</h1>

    <!-- Container para inserir o nome do jogador -->
    <div id="name-container">
        <input type="text" id="playerName" placeholder="Digite seu nome" />
        <button onclick="setPlayerName()">Confirmar</button>
    </div>

    <!-- Botões para iniciar os quizzes -->
    <div id="quiz-buttons" class="hidden">
        <button onclick="startQuiz('quiz1')">Quiz Albuns</button>
        <button onclick="startQuiz('quiz2')">Quiz Shows</button>
    </div>

    <!-- Quizzes -->
    <div id="quiz1" class="quiz">
        <div id="quiz1-questions"></div>
        <div id="quiz1-end" class="hidden">
            <h3>Fim do Quiz 1</h3>
            <p>Você acertou <span id="finalScore1">0</span> perguntas.</p>
            <div id="ranking1" class="hidden"></div>
        </div>
        <p id="score1">Pontuação: 0</p>
    </div>

    <div id="quiz2" class="quiz">
        <div id="quiz2-questions"></div>
        <div id="quiz2-end" class="hidden">
            <h3>Fim do Quiz 2</h3>
            <p>Você acertou <span id="finalScore2">0</span> perguntas.</p>
            <div id="ranking2" class="hidden"></div>
        </div>
        <p id="score2">Pontuação: 0</p>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
