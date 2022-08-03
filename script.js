let body = document.querySelector('body');
let p = document.querySelector('p');
let a = document.querySelector('a');
let instruct = document.getElementById('instructions');
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let tryy = document.getElementById('try');
let time = document.getElementById('time');

let num = document.querySelector('a');
let nextbtn1 = document.getElementById('next1');
let nextbtn2 = document.getElementById('next2');
let nextbtn3 = document.getElementById('next3');

let backbtn = document.getElementById('back');
let startbtn = document.getElementById('start');

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

let btn5 = document.getElementById('button5');
let btn6 = document.getElementById('button6');
let btn7 = document.getElementById('button7');
let btn8 = document.getElementById('button8');

let btn9 = document.getElementById('button9');
let btn10 = document.getElementById('button10');
let btn11 = document.getElementById('button11');
let btn12 = document.getElementById('button12');

let number = 15;
function run() {
      if ( number > 0 ) {
            a.innerText = number;
            number--;
      } else if ( number = 15 ){
            q4.style.display = 'block';
            q3.style.display = 'none';
            q2.style.display = 'none';
            q1.style.display = 'none';
            instruct.style.display = 'none';
            time.style.display = 'none';
      }
}


startbtn.addEventListener('click' , () => {

      setInterval( run , 1000 );
      time.style.display = 'block';
      
      q4.style.display = 'none';
      q1.style.display = 'block';
      instruct.style.display = 'none';
});
nextbtn1.addEventListener('click' , () => {
      
      time.style.display = 'block';

      q4.style.display = 'none';
      q2.style.display = 'block';
      q1.style.display = 'none';
      instruct.style.display = 'none';
});
nextbtn2.addEventListener('click' , () => {

      time.style.display = 'block';

      q4.style.display = 'none';
      q3.style.display = 'block';
      q2.style.display = 'none';
      q1.style.display = 'none';
      instruct.style.display = 'none';    
});
nextbtn3.addEventListener('click' , () => {

      time.style.display = 'none';

      q4.style.display = 'block';
      q3.style.display = 'none';
      q2.style.display = 'none';
      q1.style.display = 'none';
      instruct.style.display = 'none';    
});

let input = document.getElementById('input');
let testsubject = document.getElementById('testsubject');

q4.addEventListener('submit' , (e) => {
      e.preventDefault();
      if ( input.value === "") {
            input.style.borderBlockColor = 'red';
      } else {
            check();
      }
})

function check() {

      if ( array.length > 3 ) {
            let userName = input.value;
            testsubject.innerText = "Hello " + userName + "," + '\n' + "Your Results are Compromised." + '\n' + "Start over and make sure to click each answer ONCE!";
            testsubject.style.color = 'red';
            q4.style.display = 'block';
            tryy.style.display = 'none';
      } else {
            let userName = input.value;
            testsubject.innerText = "Hello " + userName + "," + '\n' + "You Scored "+ array.length +" out of 3";
            q4.style.display = 'block';
            tryy.style.display = 'none';
      }
}



function clearq1() {
      btn1.style.backgroundColor = 'grey';
      btn2.style.backgroundColor = 'grey';
      btn3.style.backgroundColor = 'green';
      btn4.style.backgroundColor = 'grey';
}
function clearq2() {
      btn5.style.backgroundColor = 'grey';
      btn6.style.backgroundColor = 'green';
      btn7.style.backgroundColor = 'grey';
      btn8.style.backgroundColor = 'grey';
}
function clearq3() {
      btn9.style.backgroundColor = 'grey';
      btn10.style.backgroundColor = 'grey';
      btn11.style.backgroundColor = 'green';
      btn12.style.backgroundColor = 'grey';
}

//CREATE ARRAY

let array = [];
function addToArray() {
      array.push(1);
}

// QUESTION ONE

btn1.addEventListener( 'click' , () => {
      btn1.style.backgroundColor = 'red';
      btn3.style.backgroundColor = 'green';
      setTimeout( clearq1 , 1000 );
      setTimeout ( changefocus , 2000 );
})
btn2.addEventListener( 'click' , () => {
      btn2.style.backgroundColor = 'red';
      btn3.style.backgroundColor = 'green';
      setTimeout( clearq1 , 1000 );
      setTimeout ( changefocus , 2000 );
})
btn3.addEventListener( 'click' , () => {
      btn3.style.backgroundColor = 'green';
      setTimeout( clearq1 , 1000 );
      setTimeout ( changefocus , 2000 );

      addToArray();

})
btn4.addEventListener( 'click' , () => {
      btn4.style.backgroundColor = 'red';
      btn3.style.backgroundColor = 'green';
      setTimeout( clearq1 , 1000 );
      setTimeout ( changefocus , 2000 );
})

//QUESTION TWO

btn5.addEventListener( 'click' , () => {
      btn5.style.backgroundColor = 'red';
      btn6.style.backgroundColor = 'green';
      setTimeout( clearq2 , 1000 );
      setTimeout ( changefocus2 , 2000 );
})
btn6.addEventListener( 'click' , () => {
      btn6.style.backgroundColor = 'green';
      setTimeout( clearq2 , 1000 );
      setTimeout ( changefocus2 , 2000 );

      addToArray();

})
btn7.addEventListener( 'click' , () => {
      btn7.style.backgroundColor = 'red';
      btn6.style.backgroundColor = 'green';
      setTimeout( clearq2 , 1000 );
      setTimeout ( changefocus2 , 2000 );
})
btn8.addEventListener( 'click' , () => {
      btn8.style.backgroundColor = 'red';
      btn6.style.backgroundColor = 'green';
      setTimeout( clearq2 , 1000 );
      setTimeout ( changefocus2 , 2000 );
})

// QUESTION THREE

btn9.addEventListener( 'click' , () => {
      btn9.style.backgroundColor = 'red';
      btn11.style.backgroundColor = 'green';
      setTimeout( clearq3 , 1000 );
      setTimeout ( changefocus3 , 2000 );
})
btn10.addEventListener( 'click' , () => {
      btn10.style.backgroundColor = 'red';
      btn11.style.backgroundColor = 'green';
      setTimeout( clearq3 , 1000 );
      setTimeout( msg , 1000 );
      setTimeout ( changefocus3 , 2000 );
})
btn11.addEventListener( 'click' , () => {
      btn11.style.backgroundColor = 'green';
      setTimeout( clearq3 , 1000 );
      setTimeout ( changefocus3 , 2000 );

      addToArray();
      
      console.log(array.length);
})
btn12.addEventListener( 'click' , () => {
      btn12.style.backgroundColor = 'red';
      btn11.style.backgroundColor = 'green';
      setTimeout( clearq3 , 1000 );
      setTimeout ( changefocus3 , 2000 );
})

function changefocus() {
      time.style.display = 'block';

      q4.style.display = 'none';
      q2.style.display = 'block';
      q1.style.display = 'none';
      instruct.style.display = 'none';
}
function changefocus2() {
      time.style.display = 'block';

      q4.style.display = 'none';
      q3.style.display = 'block';
      q2.style.display = 'none';
      q1.style.display = 'none';
      instruct.style.display = 'none';
}
function changefocus3() {
      time.style.display = 'none';

      q4.style.display = 'block';
      q3.style.display = 'none';
      q2.style.display = 'none';
      q1.style.display = 'none';
      instruct.style.display = 'none';
}
function msg() {
      alert("Don't even try to vote that Man!!");
}
