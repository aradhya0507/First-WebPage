var list = document.querySelectorAll('img')

const first = Math.floor(Math.random() * 6 ) + 1;
const imagefirst = 'dice'+first+'.png'
list[0].setAttribute('src', imagefirst);

const second = Math.floor(Math.random() * 6 ) + 1;
const imagesecond = 'dice'+second+'.png'
list[1].setAttribute('src', imagesecond);

if( first > second){
    document.querySelector('h1').innerHTML = "The winner is user 1" ; 
}
else if(first < second){
    document.querySelector('h1').innerHTML = "The winner is user 2"  ;  
}
else {
    document.querySelector('h1').innerHTML = "It's a tie!";
}
