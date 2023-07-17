const arr = ["snow","tan","cyan","coral","darkgrey","pink"];
const number = Math.floor (Math.random()*arr.length); 



//fetch html data 
const buttclick = document.querySelector('button');
const changecolor = document.querySelector('body');

buttclick.addEventListener ('click', ()=> {
  
    
    changecolor.style.backgroundColor =`${arr[number]}`;

});