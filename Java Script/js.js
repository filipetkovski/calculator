//Models
let final = 0;
let flag;
let num = 0;
let num1;
let op;
let com = 0;

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
}

//Operations
function operator(opr) {
    let eqq = document.getElementById('eq');
    num1 = num;

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
    flag=0;
    com = 0;
}

//Equal button
function equal() {
   let eqq = document.getElementById('eq')

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
    }

   eqq.innerHTML = "";
   eqq.innerHTML = final;

   final = 0;
   num = 0;
   flag = 0;
   com = 0;
}

//AC button
function ac() {
    let eqq = document.getElementById('eq')
    eqq.innerHTML = '0';

    num = 0;
    final = 0;
    com = 0;
    flag = 1;
}

//C buttom
function c() {
    if(flag === 1) {
        let eqq = document.getElementById('eq')
        if(com === 1) {
            eqq.innerHTML = Math.round(num);
            com = 0;
        }
        else {
            if(num>0) {
                eqq.innerHTML = num;
            }
            else {
                eqq.innerHTML = "0";
            }
        }
    }
}

//Comma button
function comma() {
    let eqq = document.getElementById('eq')
    if(flag === 1) {
        eqq.innerHTML = num + '.';
    }
    com = 1;
}