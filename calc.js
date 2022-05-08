let screen=document.querySelector('#screen');
let btn=document.querySelectorAll('.btn');


for(item of btn){
    item.addEventListener('click', (e)=>{
        btntext=e.target.innerText;

        if(btntext == 'x'){
            btntext = '*';
        }
        if(btntext == '÷'){
            btntext = '/';
        }
         screen.value +=btntext;
    });
}