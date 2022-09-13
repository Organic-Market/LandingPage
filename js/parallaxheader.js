let campo=document.getElementById('campo');
let montañas=document.getElementById('montañas');
let sol=document.getElementById('sol');
let rama=document.getElementById('rama');
let texth1=document.getElementById('site-type');
let agricultor=document.getElementById('agricultor');


window.addEventListener('scroll',function(){
    let value= window.scrollY;
    sol.style.top=value*0.75+'px';
    texth1.style.paddingLeft=value*0.50+'px';
    montañas.style.top=value*0.25+'px';
    rama.style.top=value*0.8+'px';
    agricultor.style.paddingLeft=value*0.1+'px';

})