const letters = ['A','B','C','D'];
const qNums = ['1','2','3','4','5','6','7','8','9','10'];
export let currentQuiz;
let questionNum;
let correct;
let answersLoaded;
let quizComplete = false;
const displayColors = [];
const selectedButtons = [];
const completedQuestions = [];
const answers = [];

export function resetPage(nextbtn,prevbtn,buttons) {
    if (quizComplete) {
        document.body.style.background = 'linear-gradient(to top, #1a202c, #4a5568)';
        document.getElementById('select-quiz').style.display = 'grid';
        document.getElementById('quiz-lbl').innerHTML = 'Select a quiz to start';
        if (document.getElementById('selected-answers').innerHTML === 'Your answers' &&
        answersLoaded) {
            document.getElementById('selected-answers').innerHTML = ' ';
            unloadAnswers();
        }
    } else {
        document.body.style.background = 'linear-gradient(to top, #1a202c, #4a5568)';    
        document.getElementById('select-quiz').style.display = 'grid';
        document.getElementById('quiz-lbl').innerHTML = 'Select a quiz to start';
        document.getElementById('title').innerHTML = '';
        document.getElementById('question').innerHTML = '';
        nextbtn.style.visibility = 'hidden';
        prevbtn.style.visibility = 'hidden';
        changeButtons(buttons,'visibility');
    }
}

export function decrementQuestion(buttons,nextbtn) {
    if (questionNum > 0) {
        questionNum--;
        if (completedQuestions.includes(questionNum)) {
            changeButtons(buttons,'color');
            displayCompletedQuestion(currentQuiz,questionNum,buttons);
        } else {
            displayQuestions(currentQuiz,questionNum);
        }
        if (nextbtn.innerHTML === 'Submit') {
            nextbtn.innerHTML = 'Next';
        }
    }
}

export function incrementQuestion(buttons,nextbtn,prevbtn) {
    if (questionNum < 9) {
        questionNum++;
        if (questionNum === 9) {
            nextbtn.innerHTML = 'Submit';
        }
        changeButtons(buttons,'enable');
        if (completedQuestions.includes(questionNum)) {
            changeButtons(buttons,'color');
            displayCompletedQuestion(currentQuiz,questionNum,buttons);
        } else {
            changeButtons(buttons,'color');
            displayQuestions(currentQuiz,questionNum);
        }
    } else if (completedQuestions.length === 10) {
        completedQuizScreen(buttons,nextbtn,prevbtn,currentQuiz);
    }
}

export function startQuiz(quizInfo, nextbtn, prevbtn, buttons) {
    currentQuiz = quizInfo;
    questionNum = 0;
    if (!Null(document.getElementById('select-quiz'))) {
        document.getElementById('select-quiz').style.display = 'none';
    }
    document.getElementById('title').innerHTML = ' ';
    document.getElementById('question').innerHTML = ' ';
    nextbtn.style.visibility = 'visible';
    if (nextbtn.innerHTML === 'Submit') {
        nextbtn.innerHTML = 'Next';
    }
    prevbtn.style.visibility = 'visible';
    changeButtons(buttons,'enable');
    changeButtons(buttons,'color');
    correct = 0;
    pushArrays();
    generateQuiz(currentQuiz);
}

export function checkQuestion(quizInfo, button, buttons) {
    let choice;
    selectedButtons.push(button);
    if (button.innerHTML.includes('A. ')) {
        choice = button.innerHTML.replace(/A. /,'');
    } else if (button.innerHTML.includes('B. ')) {
        choice = button.innerHTML.replace(/B. /,'');
    } else if (button.innerHTML.includes('C. ')) {
        choice = button.innerHTML.replace(/C. /,'');
    } else if (button.innerHTML.includes('D. ')) {
        choice = button.innerHTML.replace(/D. /,'');
    }

    if (choice.includes('&lt;') || 
        choice.includes('&gt;')) {
        choice = choice.replace(/&lt;/,'<');
        choice = choice.replace(/&gt;/,'>');
    }

    if (choice.includes('&lt; /a') || 
        choice.includes('/a &gt;')) {
        choice = choice.replace(/&lt; \/a/,'< /a');
        choice = choice.replace(/\/a &gt;/,'/a >');
    }

    if (choice === quizInfo.answer[questionNum]) {
        button.style.color = 'green';
        displayColors.push('green');
        completedQuestions.push(questionNum);
        changeButtons(buttons,'disable');
        saveAnswer();
    } else {
        button.style.color = 'red';
        displayColors.push('red');
        completedQuestions.push(questionNum);
        changeButtons(buttons,'disable');
        saveAnswer();
    }
    answers.push(choice);
}

function generateQuiz(quizInfo) {
    document.getElementById('title').innerHTML = quizInfo.title;
    document.getElementById('question').innerHTML = `${qNums[0]}. ${quizInfo.questions[0]}`;
    for (let i = 0; i < letters.length; i++) {
        const button = document.getElementById(`${letters[i]}btn`);
        button.style.visibility = 'visible';
        button.innerHTML = `${letters[i]}. ${quizInfo.options.q1[i]}`;
    }
}

function displayCompletedQuestion(quizInfo, questionNum, buttons) {
    document.getElementById('question').innerHTML = `${qNums[questionNum]}. ${quizInfo.questions[questionNum]}`;
    for (let i = 0; i < letters.length; i++) {
        const button = document.getElementById(`${letters[i]}btn`);
        button.style.visibility = 'visible';
        const question = chooseQuestion(questionNum, quizInfo);
        button.innerHTML = `${letters[i]}. ${question[i]}`;
    }
    selectedButtons[questionNum].style.color = displayColors[questionNum];
    changeButtons(buttons,'disable');
}

function displayQuestions(quizInfo, questionNum) {
    document.getElementById('question').innerHTML = `${qNums[questionNum]}. ${quizInfo.questions[questionNum]}`;
    for (let i = 0; i < letters.length; i++) {
        const button = document.getElementById(`${letters[i]}btn`);
        button.style.visibility = 'visible';
        const question = chooseQuestion(questionNum, quizInfo);
        button.innerHTML = `${letters[i]}. ${question[i]}`;
    }
}

function completedQuizScreen(buttons,nextbtn,prevbtn,quizInfo) {
    document.getElementById('title').innerHTML = '';
    document.getElementById('question').innerHTML = '';
    nextbtn.style.visibility = 'hidden';
    prevbtn.style.visibility = 'hidden';
    changeButtons(buttons,'visibility');
    document.getElementById('select-quiz').style.display = 'grid';
    document.getElementById('quiz-lbl').innerHTML = `${quizInfo.title} Score: ${calcScore()}%`;
    document.getElementById('selected-answers').innerHTML = 'Your answers';
    loadAnswers();
    quizComplete = true;
}

function chooseQuestion(questionNum, quizInfo) {
    switch (questionNum) {
        case 0: 
            return quizInfo.options.q1;

        case 1:
            return quizInfo.options.q2;
    
        case 2:
            return quizInfo.options.q3;
    
        case 3:
            return quizInfo.options.q4;
    
        case 4:
            return quizInfo.options.q5;
    
        case 5:
            return quizInfo.options.q6;
    
        case 6:
            return quizInfo.options.q7;
    
        case 7:
            return quizInfo.options.q8;
    
        case 8:
            return quizInfo.options.q9;
    
        case 9:
            return quizInfo.options.q10;
    }
}

function Null (element) {
    if (element != typeof(Node)) {
        if (element != null) {
            return false;
        } else {
            return true;
        }
    } else if (document.body.contains(element)) {
        return false;
    } else {
        return true;
    } 
}

function changeButtons(buttons,action) {
    switch (action) {
        case 'disable':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            break;
        case 'color':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.color = 'black';
                buttons[i].style.fontWeight = 'bold';
            }
            break;
        case 'enable':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }
            break;       
        case 'visibility':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.visibility = 'hidden';
            }
            break;       
    }
}

function saveAnswer() {
    document.getElementById('save-slot').innerHTML = 'Answer Saved';
    setTimeout(() => {
        document.getElementById('save-slot').innerHTML = ' ';
    },500);
    
    if (completedQuestions.includes(questionNum)) {
        if (displayColors[questionNum] === 'green') {
            correct++;
        }
    }
}

function pushArrays() {
    for (let i = 0; i < 10; i++) {
        completedQuestions.pop();
        selectedButtons.pop();
        displayColors.pop();
        answers.pop();
    }
}

function calcScore() {
    const zeroPointScore = correct/currentQuiz.questions.length;
    const score = zeroPointScore * 100;
    return score.toString();
}

function loadAnswers() {
    for (let i = 0; i < answers.length; i++) {
        const answerbox = document.getElementById(`answer${(i+1).toString()}`);
        answerbox.innerHTML = `${i+1}. ${answers[i]}`;
        answerbox.style.display = 'flex';
        answerbox.style.alignItems = 'center';
        answerbox.style.justifyContent = 'center';
        answerbox.style.fontSize = '12px';
        answerbox.style.fontWeight = 'bold';
        answerbox.style.color = displayColors[i];
    }
    answersLoaded = true;
}

function unloadAnswers() {
    for (let i = 0; i < answers.length; i++) {
        const answerbox = document.getElementById(`answer${(i+1).toString()}`);
        answerbox.innerHTML = ' ';
        answerbox.style.border = 'none';
    }
    pushArrays();
    answersLoaded = false;
}

export function changeTheme(direction,leftColor,rightColor) {
    document.body.style.background = `linear-gradient(to ${direction}, ${leftColor}, ${rightColor})`;
}