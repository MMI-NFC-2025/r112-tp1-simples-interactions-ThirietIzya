// TODO
const aMettreEnrouge = document.querySelector('#a-mettre-en-rouge')
aMettreEnrouge.style.color="red"

const enRougeSuiteAclick = document.querySelector('#en-rouge-suite-a-click')
enRougeSuiteAclick.addEventListener ("click", (evt)=>{
    enRougeSuiteAclick.style.color='red'
});

const collH2 = document.querySelectorAll ("h2")
collH2.forEach ((elm)=>{
    elm.addEventListener('click',(evt)=>{ 
        evt.target.style.color = "red";
});
});