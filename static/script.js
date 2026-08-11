const questions = [

    // FÁCIL — 10 PONTOS

    {
        difficulty: "Fácil",
        points: 10,
        emoji: "🍎",
        question: "Qual nutriente é encontrado em frutas, verduras e legumes?",
        options: [
            "Fibras",
            "Gordura trans",
            "Colesterol",
            "Gordura saturada"
        ],
        answer: 0
    },

    {
        difficulty: "Fácil",
        points: 10,
        emoji: "💧",
        question: "Qual é uma das principais funções da água no organismo?",
        options: [
            "Hidratar o organismo",
            "Substituir todas as vitaminas",
            "Fornecer gordura",
            "Aumentar o colesterol"
        ],
        answer: 0
    },

    {
        difficulty: "Fácil",
        points: 10,
        emoji: "🥦",
        question: "Qual desses alimentos é um vegetal?",
        options: [
            "Brócolis",
            "Chocolate",
            "Refrigerante",
            "Biscoito"
        ],
        answer: 0
    },

    {
        difficulty: "Fácil",
        points: 10,
        emoji: "🍌",
        question: "Qual desses alimentos é uma fruta?",
        options: [
            "Banana",
            "Batata frita",
            "Pão",
            "Queijo"
        ],
        answer: 0
    },


    // MÉDIO — 20 PONTOS

    {
        difficulty: "Médio",
        points: 20,
        emoji: "🥩",
        question: "Qual nutriente possui papel importante na construção e manutenção dos músculos?",
        options: [
            "Proteínas",
            "Açúcar",
            "Água",
            "Fibras"
        ],
        answer: 0
    },

    {
        difficulty: "Médio",
        points: 20,
        emoji: "🌾",
        question: "Qual opção é uma fonte de carboidrato complexo?",
        options: [
            "Aveia",
            "Refrigerante",
            "Bala",
            "Açúcar refinado"
        ],
        answer: 0
    },

    {
        difficulty: "Médio",
        points: 20,
        emoji: "🥛",
        question: "Qual mineral contribui para a formação e manutenção dos ossos?",
        options: [
            "Cálcio",
            "Açúcar",
            "Cafeína",
            "Álcool"
        ],
        answer: 0
    },

    {
        difficulty: "Médio",
        points: 20,
        emoji: "🥗",
        question: "Por que uma alimentação variada é importante?",
        options: [
            "Porque diferentes alimentos fornecem diferentes nutrientes",
            "Porque elimina a necessidade de beber água",
            "Porque permite comer apenas um alimento",
            "Porque impede completamente qualquer doença"
        ],
        answer: 0
    },


    // DIFÍCIL — 30 PONTOS

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🧬",
        question: "Qual vitamina está relacionada à absorção intestinal de cálcio?",
        options: [
            "Vitamina D",
            "Vitamina C",
            "Vitamina B12",
            "Vitamina B1"
        ],
        answer: 0
    },

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🫀",
        question: "O consumo excessivo de sódio está principalmente associado a qual problema?",
        options: [
            "Aumento da pressão arterial",
            "Aumento da visão",
            "Fortalecimento dos dentes",
            "Aumento da absorção de ferro"
        ],
        answer: 0
    },

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🧪",
        question: "Qual tipo de gordura deve ser reduzido por estar associado a efeitos negativos sobre a saúde cardiovascular?",
        options: [
            "Gordura trans",
            "Ômega-3",
            "Gorduras insaturadas",
            "Gorduras naturalmente presentes em castanhas"
        ],
        answer: 0
    },

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🍞",
        question: "Qual afirmação sobre fibras alimentares está correta?",
        options: [
            "Podem contribuir para o funcionamento adequado do intestino",
            "Aumentam obrigatoriamente o colesterol LDL",
            "Substituem completamente as proteínas",
            "Existem apenas em alimentos de origem animal"
        ],
        answer: 0
    },

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🩸",
        question: "Qual mineral é essencial para a formação da hemoglobina?",
        options: [
            "Ferro",
            "Cálcio",
            "Potássio",
            "Magnésio"
        ],
        answer: 0
    },

    {
        difficulty: "Difícil",
        points: 30,
        emoji: "🥑",
        question: "Abacate e algumas castanhas são fontes de:",
        options: [
            "Gorduras insaturadas",
            "Gorduras trans",
            "Açúcar refinado",
            "Álcool"
        ],
        answer: 0
    }

];


let playerName = "";
let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let lives = 3;
let answered = false;


// ========================================
// INICIAR
// ========================================

function startGame() {

    const input =
        document.getElementById("playerName");

    playerName =
        input.value.trim();


    if (!playerName) {

        alert("Digite seu nome para começar!");

        input.focus();

        return;
    }


    gameQuestions =
        [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);


    gameQuestions.forEach(question => {

        const correctAnswer =
            question.options[question.answer];


        question.options =
            [...question.options]
            .sort(() => Math.random() - 0.5);


        question.answer =
            question.options.indexOf(correctAnswer);

    });


    currentQuestion = 0;
    score = 0;
    lives = 3;
    answered = false;


    document.getElementById("startScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "none";

    document.getElementById("rankingScreen").style.display =
        "none";

    document.getElementById("gameScreen").style.display =
        "block";


    document.getElementById("currentPlayer").textContent =
        playerName;


    showQuestion();
}


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function showQuestion() {

    answered = false;


    const question =
        gameQuestions[currentQuestion];


    document.getElementById("emoji").textContent =
        question.emoji;


    document.getElementById("question").textContent =
        question.question;


    document.getElementById("score").textContent =
        score;


    document.getElementById("lives").textContent =
        lives;


    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;


    const progress =
        (currentQuestion / gameQuestions.length) * 100;


    document.getElementById("progressBar").style.width =
        progress + "%";


    const difficulty =
        document.getElementById("difficulty");


    difficulty.textContent =
        `${question.difficulty} • ${question.points} pontos`;


    difficulty.className =
        "difficulty";


    if (question.difficulty === "Fácil") {

        difficulty.classList.add("easy");

    } else if (question.difficulty === "Médio") {

        difficulty.classList.add("medium");

    } else {

        difficulty.classList.add("hard");

    }


    document.getElementById("message").textContent =
        "";


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");


        button.className =
            "answer";


        button.textContent =
            option;


        button.onclick = () =>
            answerQuestion(index, button);


        answers.appendChild(button);

    });
}


// ========================================
// RESPONDER
// ========================================

function answerQuestion(choice, clickedButton) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (choice === question.answer) {

        score += question.points;

        clickedButton.classList.add("correct");

        document.getElementById("message").textContent =
            `✅ Correto! +${question.points} pontos`;

    } else {

        lives--;

        clickedButton.classList.add("wrong");

        buttons[question.answer]
            .classList.add("correct");

        document.getElementById("message").textContent =
            "❌ Errado! Você perdeu uma vida.";
    }


    document.getElementById("score").textContent =
        score;

    document.getElementById("lives").textContent =
        lives;


    setTimeout(() => {

        if (lives <= 0) {

            finishGame();

            return;
        }


        currentQuestion++;


        if (currentQuestion >= gameQuestions.length) {

            finishGame();

        } else {

            showQuestion();

        }

    }, 1200);
}


// ========================================
// FINALIZAR
// ========================================

async function finishGame() {

    document.getElementById("gameScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "block";


    document.getElementById("finalScore").textContent =
        score;

    document.getElementById("resultName").textContent =
        playerName;


    let message;


    if (score >= 250) {

        message =
            "🌟 Excelente! Você domina o assunto!";

    } else if (score >= 180) {

        message =
            "👏 Muito bom! Você tem ótimos conhecimentos!";

    } else if (score >= 100) {

        message =
            "🙂 Bom trabalho! Continue estudando!";

    } else {

        message =
            "📚 Continue aprendendo sobre alimentação!";
    }


    document.getElementById("resultMessage").textContent =
        message;


    document.getElementById("saveMessage").textContent =
        "💾 Salvando sua pontuação...";


    await saveRanking();
}


// ========================================
// SALVAR RANKING
// ========================================

async function saveRanking() {

    try {

        const response =
            await fetch("/ranking", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: playerName,
                    score: score
                })

            });


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.error || "Erro ao salvar."
            );
        }


        if (data.new_record) {

            document.getElementById("saveMessage").textContent =
                "👑 NOVO RECORDE! Sua pontuação foi salva!";

        } else {

            const record =
                getPlayerRecord(data.ranking);

            document.getElementById("saveMessage").textContent =
                `💾 Partida registrada! Seu recorde é ${record} pontos.`;
        }

    } catch (error) {

        console.error(error);

        document.getElementById("saveMessage").textContent =
            "⚠️ Não foi possível salvar a pontuação.";
    }
}


// ========================================
// PEGAR RECORDE DO JOGADOR
// ========================================

function getPlayerRecord(ranking) {

    const player =
        ranking.find(
            player =>
                player.name.toLowerCase() ===
                playerName.toLowerCase()
        );


    if (player) {
        return player.record;
    }


    return score;
}


// ========================================
// MOSTRAR RANKING
// ========================================

async function showRanking() {

    document.getElementById("startScreen").style.display =
        "none";

    document.getElementById("gameScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "none";

    document.getElementById("rankingScreen").style.display =
        "block";


    const rankingList =
        document.getElementById("rankingList");


    rankingList.innerHTML =
        "<p>⏳ Carregando ranking...</p>";


    try {

        const response =
            await fetch("/ranking");


        if (!response.ok) {

            throw new Error(
                "Erro ao buscar ranking."
            );
        }


        const ranking =
            await response.json();


        rankingList.innerHTML = "";


        if (ranking.length === 0) {

            rankingList.innerHTML = `
                <div class="empty">
                    🏆 Ainda não existem jogadores.
                </div>
            `;

            return;
        }


        ranking.forEach((player, index) => {

            const item =
                document.createElement("div");


            item.className =
                "rankItem";


            let medal;


            if (index === 0) {

                medal = "🥇";

            } else if (index === 1) {

                medal = "🥈";

            } else if (index === 2) {

                medal = "🥉";

            } else {

                medal =
                    `${index + 1}º`;
            }


            item.innerHTML = `

                <div>

                    <strong>
                        ${medal} ${escapeHTML(player.name)}
                    </strong>

                    <br>

                    <small>
                        📅 ${player.date}
                    </small>

                </div>

                <strong>
                    👑 ${player.record} pts
                </strong>

            `;


            rankingList.appendChild(item);

        });

    } catch (error) {

        console.error(error);


        rankingList.innerHTML = `
            <p class="error">
                ❌ Não foi possível carregar o ranking.
            </p>
        `;
    }
}


// ========================================
// SEGURANÇA DO NOME
// ========================================

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        text;

    return element.innerHTML;
}


// ========================================
// VOLTAR
// ========================================

function backToStart() {

    document.getElementById("rankingScreen").style.display =
        "none";

    document.getElementById("resultScreen").style.display =
        "none";

    document.getElementById("gameScreen").style.display =
        "none";

    document.getElementById("startScreen").style.display =
        "block";
}


// ========================================
// JOGAR NOVAMENTE
// ========================================

function restartGame() {

    document.getElementById("resultScreen").style.display =
        "none";

    startGame();
}