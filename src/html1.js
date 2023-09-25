'use strict'

let player = 2;

let win_num = [11,22,33,44,55,66,77,88,99];

let num;

let num1,num2,num3,num4,num5,num6,num7,num8,num9;

let btncount = 0;
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

document.querySelector('.player_on_1').style.color='#eee';
document.querySelector('.player_on_2').style.color='#5d5b5b';

function player_on(){
  if(player==1){
    document.querySelector('.player_on_2').style.color='#eee';
    document.querySelector('.player_on_1').style.color='#5d5b5b';
  }else if(player==2){
    document.querySelector('.player_on_2').style.color='#5d5b5b';
    document.querySelector('.player_on_1').style.color='#eee';
  }
}

btn1.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num1=(player==1) ? 'X' : 'O';
    btn1.textContent = num1;
    win_num[0]=player;
    winnercheck();
    document.getElementById("btn1").disabled = true;
});

btn2.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num2=(player==1) ? 'X' : 'O';
    btn2.textContent = num2;
    win_num[1]=player;
    winnercheck();
    document.getElementById("btn2").disabled = true;
});

btn3.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num3=(player==1) ? 'X' : 'O';
    btn3.textContent = num3;
    btn1.Value = num3;
    win_num[2]=player;
    winnercheck();
    document.getElementById("btn3").disabled = true;
});

btn4.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num4=(player==1) ? 'X' : 'O';
    btn4.textContent = num4;
    btn1.Value = num4;
    win_num[3]=player;
    winnercheck();
    document.getElementById("btn4").disabled = true;
});

btn5.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num5=(player==1) ? 'X' : 'O';
    btn5.textContent = num5;
    btn1.Value = num5;
    win_num[4]=player;
    winnercheck();
    document.getElementById("btn5").disabled = true;
});

btn6.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num6=(player==1) ? 'X' : 'O';
    btn6.textContent = num6;
    btn1.Value = num6;
    win_num[5]=player;
    winnercheck();
    document.getElementById("btn6").disabled = true;
});

btn7.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num7=(player==1) ? 'X' : 'O';
    btn7.textContent = num7;
    btn1.Value = num7;
    win_num[6]=player;
    winnercheck();
    document.getElementById("btn7").disabled = true;
});

btn8.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num8=(player==1) ? 'X' : 'O';
    btn8.textContent = num8;
    btn1.Value = num8;
    win_num[7]=player;
    winnercheck();
    document.getElementById("btn8").disabled = true;
});

btn9.addEventListener('click',function(){
  if(player==2){
    player--;
  }else if(player==1){
    player++;
  }
  player_on();
    player = (player % 2) ? 1: 2;
    num9=(player==1) ? 'X' : 'O';
    btn9.textContent = num9;
    win_num[8]=player;
    winnercheck();
    document.getElementById("btn9").disabled = true;
});

function blockbtn(){
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  document.getElementById("btn7").disabled = true;
  document.getElementById("btn8").disabled = true;
  document.getElementById("btn9").disabled = true;
}

function won_game(){
  document.querySelector('.player_lable').textContent='player';
  document.querySelector('.num_lable').textContent=player;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.player_on_1').style.visibility='hidden';
  document.querySelector('.player_on_2').style.visibility='hidden';
  document.querySelector('.playerturn').style.visibility='hidden';
  console.log(player);
}

function winnercheck(){
  // Horizontal Check
  if(win_num[0]==win_num[1]&&win_num[1]==win_num[2]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn();}
  else if(win_num[3]==win_num[4]&&win_num[4]==win_num[5]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn();}
  else if(win_num[6]==win_num[7]&&win_num[7]==win_num[8]){
    won_game();
   document.querySelector('.winner').textContent='Won 🎉';blockbtn();}


 // Vertical Check
  else if(win_num[0]==win_num[3]&&win_num[3]==win_num[6]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn()}
  else if(win_num[1]==win_num[4]&&win_num[4]==win_num[7]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn()}
  else if(win_num[2]==win_num[5]&&win_num[5]==win_num[8]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn()}


 // Cross Check
  else if(win_num[0]==win_num[4]&&win_num[4]==win_num[8]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn()}
  else if(win_num[2]==win_num[4]&&win_num[4]==win_num[6]){
    won_game();
    document.querySelector('.winner').textContent='Won 🎉';blockbtn()}

  else if(win_num[0]!= 11 && win_num[2]!= 22 && win_num[2]!= 33 && win_num[3]!= 44 && win_num[4]!= 55 && win_num[5]!= 66 && win_num[6]!= 77 && win_num[7]!= 88 && win_num[8]!= 99){
    console.log(win_num);
    document.querySelector('.player_on_1').style.visibility='hidden';
    document.querySelector('.player_on_2').style.visibility='hidden';
    document.querySelector('.playerturn').style.visibility='hidden';
    document.querySelector('.Draw').textContent='Draw!';
    document.querySelector('body').style.backgroundColor = 'rgb(166, 46, 56)';}

  // else if(win_num[0]!=win_num[1] && win_num[1]!=win_num[2] && win_num[2]!=win_num[3] && win_num[3]!=win_num[4] && win_num[4]!=win_num[5] && win_num[5]!=win_num[6] && win_num[6]!=win_num[7] && win_num[7]!=win_num[8]){
  //   document.querySelector('.winner').textContent='Draw!';}

}

document.querySelector('.reset').addEventListener('click', function(){
  location.reload();
})
