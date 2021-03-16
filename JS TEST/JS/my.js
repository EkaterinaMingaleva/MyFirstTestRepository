let nca = 0;//правильные ответы
let qNum = 0; //количество отвеченных вопросов в целом
let qNumAll = 5;

let view = {
    displayMessage: function(msg){
        alert(msg);
    },
    displayRight: function(){
        let right = document.querySelectorAll('class');
        console.log(right);
        right.setAttribute('class','right');
    },
};


let firstDay = document.querySelectorAll('.firstDay');
for (i=0; i < firstDay.length; i++){
    firstDay[i].onclick = function(){
        let FD  = this.getAttribute('data');
        if (FD === '8.04'){
            console.log('правильно');
            let fq = document.getElementById('1в');
            fq.innerHTML = "8 апреля! Правильно)";
            nca++;
            qNum++;
            console.log(nca);
            console.log(qNum);
            return true;
        }else {
            console.log('неправильно');
            let fq = document.getElementById('1в');
            fq.classList.add('red');
            fq.innerHTML = "8 апреля!((((";
            qNum++;
            console.log(qNum);
            return false
        }
    }
};

let Birthday = document.querySelectorAll('.Birthday');

for (i=0; i < Birthday.length; i++){
    Birthday[i].onclick = function(){
        let BD  = this.getAttribute('data');
        if (BD === '30.07'){
            console.log('правильно');
            let bd = document.getElementById('2в');
            bd.innerHTML = "30.07.  Угадал))";
            nca++;
            qNum++;
            console.log(nca);
            console.log(qNum);
            return true;
        }else {
            console.log('неправильно');
            let bd = document.getElementById('2в');
            bd.classList.add('red');
            bd.innerHTML = "30.07... опять забыл";
            qNum++;
            console.log(qNum);
            return false
        }
    }
};


let color = document.querySelectorAll('.color');

for (i=0; i < color.length; i++){
    color[i].onclick = function(){
        let CL  = this.getAttribute('data');
        if (CL === 'red'){
            console.log('правильно');
            let cl = document.getElementById('3в');
            cl.innerHTML = "Красный";
            nca++;
            qNum++;
            console.log(nca);
            console.log(qNum);
            return true;
        }else {
            console.log('неправильно');
            let bd = document.getElementById('3в');
            bd.classList.add('red');
            bd.innerHTML = "Красный!!!)))";
            qNum++;
            console.log(qNum);
            return false
        }
    }
};

let theFirstGift = document.querySelectorAll('.theFirstGift');

for (i=0; i < theFirstGift.length; i++){
    theFirstGift[i].onclick = function(){
        let tFG  = this.getAttribute('data');
        if (tFG === 'cap') {
            console.log('правильно');
            let tfg = document.getElementById('4в');
            tfg.innerHTML = "Капкейки";
            nca++;
            qNum++;
            console.log(nca);
            console.log(qNum);
            return true;
        }else {
            console.log('неправильно');
            let tfg = document.getElementById('4в');
            tfg.classList.add('red');
            tfg.innerHTML = "Капкейки я тебе дарила! Божественные";
            qNum++;
            console.log(qNum);
            return false
        }
    }
};

let autor = document.querySelectorAll('.autor');

for (i=0; i < color.length; i++){
    autor[i].onclick = function(){
        let A  = this.getAttribute('data');
        if (A === '2'){
            console.log('правильно');
            let aa = document.getElementById('5в');
            aa.innerHTML = "Он самый,  Марк Твен";
            nca++;
            console.log(nca);
            qNum++;
            // end();
            console.log(qNum);
            return true;
        }else {
            console.log('неправильно');
            let aa = document.getElementById('5в');
            aa.classList.add('red');
            aa.innerHTML = "Марк Твен";
            qNum++;
            console.log(qNum);
            // end();
            return false
        }
    }
};

let question = document.querySelectorAll('.question');
console.log(question);

for (k = 0; k<question.length; k++){
    if (this.qNum === this.qNumAll){
        end();
    } 
}



function end(){
    let itog = document.createElement('div');
    itog.classList.add('itog');
    itog.innerHTML = 'Ты ответил правильно на ' + nca + ' вопроса(ов)';
    document.querySelector('.itog').appendChild(itog);
};
function noEnd(){
    console.log('Еще не все');
};

