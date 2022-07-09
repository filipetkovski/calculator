let final = 0;
let flag;
let num = 0;
let num1;
let op;

function numbers(n) {
    let eqq = document.getElementById('eq');
    num = (num * 10) + n;

    eqq.innerHTML = "";
    eqq.innerHTML = num;

    flag=1;
}

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
}

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
    flag=0;
}

function ac() {
    let eqq = document.getElementById('eq')
    eqq.innerHTML = '0';

    num = 0;
    final = 0;
    flag=1;
}

function c() {
    if(flag === 1) {
        let eqq = document.getElementById('eq')
        num = (num-(num%10)) / 10;
        if(num>0) {
            eqq.innerHTML = num;
        }
        else {
            eqq.innerHTML = "0";
        }
    }
}