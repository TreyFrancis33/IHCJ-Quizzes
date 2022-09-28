import { 
    htmlQuizInfo,
    cssQuizInfo,
    jsQuizInfo,
    internetQuizInfo
} from "./info.js";

import {
    incrementQuestion,
    decrementQuestion,
    startQuiz,
    checkQuestion,
    currentQuiz,
    changeTheme,
    resetPage
} from "./utils.js";

const htmlbtn = document.getElementById('htmlbtn');
const cssbtn = document.getElementById('cssbtn');
const resetBtn = document.getElementById('reset');
const jsbtn = document.getElementById('jsbtn');
const internetbtn = document.getElementById('internetbtn');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const btnList = document.querySelectorAll('.btn');

htmlbtn.addEventListener('click',() => {
    startQuiz(htmlQuizInfo,nextbtn,prevbtn,btnList);
    changeTheme('top','white','#dd6b20');
});

cssbtn.addEventListener('click',() => {
    startQuiz(cssQuizInfo,nextbtn,prevbtn,btnList);
    changeTheme('top','white','blue');
});

resetBtn.addEventListener('click',() => {
    resetPage(nextbtn,prevbtn,btnList);
});

jsbtn.addEventListener('click',() => {
    startQuiz(jsQuizInfo,nextbtn,prevbtn,btnList);
    changeTheme('top','rgba(0,0,0,0.9)','#ecc94b');
});

internetbtn.addEventListener('click',() => {
    startQuiz(internetQuizInfo,nextbtn,prevbtn,btnList);
    changeTheme('bottom','#1a202c','white');
});

prevbtn.addEventListener('click',() => {
    decrementQuestion(btnList,nextbtn);
});

nextbtn.addEventListener('click',() => {
    incrementQuestion(btnList,nextbtn,prevbtn);
});

btnList.forEach(button => {
    button.addEventListener('click', () => {
        checkQuestion(currentQuiz,button,btnList);
    });
});
