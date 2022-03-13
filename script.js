function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function sumirBotao() {
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'flex';
    }
}

window.addEventListener('scroll', sumirBotao);
  console.log(aparecerBotao);

function abriMenu(){
    if(document.querySelector(".menu--item ul").style.display == 'flex'){
        document.querySelector(".menu--item ul").style.display = 'none';
    }else{
        document.querySelector(".menu--item ul").style.display = 'flex';  
    }
}