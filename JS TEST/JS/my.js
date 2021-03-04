let nca = 0;

let firstDay = document.querySelectorAll('.firstDay');
for (i=0; i < firstDay.length; i++){
    firstDay[i].onclick = function(){
        let FD  = this.getAttribute('data');
        if (FD === '8.04'){
            console.log('правильно');
            let fq = document.getElementById('1в');
            fq.innerHTML = "8 апреля! Правильно)";
            nca++;
            console.log(nca);
            return true;
        }else {
            console.log('неправильно');
        let fq = document.getElementById('1в');
        fq.classList.add('red');
        fq.innerHTML = "8 апреля!(((("
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
            console.log(nca);
            return true;
        }else {
            console.log('неправильно');
        let bd = document.getElementById('2в');
        bd.classList.add('red');
        bd.innerHTML = "30.07... опять забыл"
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
            console.log(nca);
            return true;
        }else {
            console.log('неправильно');
        let bd = document.getElementById('3в');
        bd.classList.add('red');
        bd.innerHTML = "Красный!!!)))"
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
            console.log(nca);
            return true;
        }else {
            console.log('неправильно');
        let tfg = document.getElementById('4в');
        tfg.classList.add('red');
        tfg.innerHTML = "Капкейки я тебе дарила! Божественные"
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
            
            return true;
        }else {
            console.log('неправильно');
        let aa = document.getElementById('5в');
        aa.classList.add('red');
        aa.innerHTML = "Марк Твен";
        return false
        }
    }
};

let x = document.querySelectorAll('.question');
console.log(x);

for (x=0; i < x.length; x++){
    if (x < 5){
        console.log ('еще не все');
    } else {
        let itog = document.createElement('div');
        itog.classList.add('itog');
        itog.innerHTML = 'Ты ответил правильно на ' + nca + ' вопроса(ов)';
        document.querySelector('.itog').appendChild(itog);
    }
}

function f1(){
    let x = document.querySelectorAll('.question');
    console.log(x);

    for (x=0; i < x.length; x++){
        if (x < 5){
            console.log ('еще не все');
        } else {
            let itog = document.createElement('div');
            itog.classList.add('itog');
            itog.innerHTML = 'Ты ответил правильно на ' + nca + ' вопроса(ов)';
            document.querySelector('.itog').appendChild(itog);
        }
    }   
}
window.onload = f1;