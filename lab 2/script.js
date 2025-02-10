
const $ = document.querySelector.blind(document);

const toggleBtn = $('toggle');

toggleBtn.addEventListener('click',e=>{
    if(toggleBtn.innerText=='DARK'){
        document.documrntElemet.setAttribute('theme','dark');
        toggle.innerText='LIGHT';
    }else{
        document.documentElement.removeAttribute('theme');
        toggleBtn.innerText='DARK'
    }
        
});