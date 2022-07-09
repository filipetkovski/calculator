//Models
let final = 0;
let flag;
let num = 0;
let num1;
let num3 = 0;
let op;
let com = 0;
let flag2 = 0;

function off() {
    let opHover0 = document.querySelector('.op1');
    let opHover1 = document.querySelector('.op2');
    let opHover2 = document.querySelector('.op3');
    let opHover3 = document.querySelector('.op4');
    let opHover4 = document.querySelector('.op5');
    opHover0.style.pointerEvents = "none";
    opHover1.style.pointerEvents = "none";
    opHover2.style.pointerEvents = "none";
    opHover3.style.pointerEvents = "none";
    opHover4.style.pointerEvents = "none";
}

function on(){
    let opHover0 = document.querySelector('.op1');
    let opHover1 = document.querySelector('.op2');
    let opHover2 = document.querySelector('.op3');
    let opHover3 = document.querySelector('.op4');
    let opHover4 = document.querySelector('.op5');
    opHover0.style.pointerEvents = "unset";
    opHover1.style.pointerEvents = "unset";
    opHover2.style.pointerEvents = "unset";
    opHover3.style.pointerEvents = "unset";
    opHover4.style.pointerEvents = "unset";
}


//Adding Numbers
function numbers(n) {
    let eqq = document.getElementById('eq');
    if(com === 1) {
        num += n/10;
    }
    else {
        num = (num * 10) + n;
    }
    eqq.innerHTML = "";
    eqq.innerHTML = num;

    flag = 1;
    flag2 = 1;
    on();
}

//Operations
function operator(opr) {
    let eqq = document.getElementById('eq');
    num1 = num;
    off();

    if(flag2 === 1) {
        if(opr === '+') {
            op = "+"
            eqq.innerHTML = "+";
        }
        else if(opr === '-') {
            op = "-";
            eqq.innerHTML = "-";
        }
        else if(opr === '*') {
            op = '*';
            eqq.innerHTML = "x";
        }
        else if(opr === '/') {
            op = '/';
            eqq.innerHTML = "/";
        }

        num = 0;
        flag = 0;
        com = 0;
    }
    flag2 = 0;
}

//Equal button
function equal() {
   let eqq = document.getElementById('eq')

    if(num3 === 7548348257254245325) {
        num1 = 0;
    }
    else if(num3 !== 0) {
        num1 = num3;
    }

    if(op === '+') {
        final = num1 + num;
    }
    else if(op === '-') {
        final = num1 - num;
    }
    else if(op === '*') {
        final = num1 * num;
    }
    else if(op === '/') {
        final = num1 / num;
        final =  final.toFixed(3);
    }

   eqq.innerHTML = "";
   eqq.innerHTML = final;

   if(final === 0) {
       num3 = 7548348257254245325;
   } else {
       num3 = final;
   }

   flag = 0;
   com = 0;
}

//AC button
function ac() {
    let eqq = document.getElementById('eq')
    eqq.innerHTML = '0';

    num = 0;
    num1 = 0;
    final = 0;
    com = 0;
    flag = 1;
    num3 = 0;
    on();
}

//C buttom
function c() {
    if(flag === 1) {
        let eqq = document.getElementById('eq')
        if(com === 0) {
            num = (num - (num%10))/10;
            eqq.innerHTML = num;
        }
        else {
            eqq.innerHTML = Math.round(num);
            com = 0;
        }
    }
    on();
}

//Comma button
function comma() {
    let eqq = document.getElementById('eq')
    if(flag === 1) {
        eqq.innerHTML = num + '.';
    }
    com = 1;
    on();
}