
//
function pular(){
    let boy = document.querySelector('.boy');
    boy.style.top = "0px"; 

}


function parar(){
    let boy = document.querySelector('.boy');
    boy.style.top = "80px";  

}
/*
function direita(){
    let boy = document.querySelector('.boy');
    boy.style.left = "10px";  
}
*/

function direita() {
    let boy = document.querySelector('.boy');
    
    // Obtém a posição atual da esquerda (left) e converte para número
    let currentLeft = parseInt(window.getComputedStyle(boy).left);
    
    // Aumenta a posição em 10px a cada clique
    boy.style.left = (currentLeft + 10) + "px";
}

