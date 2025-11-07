// TODO
constaMettreEnrouge = document.querySelector('#a-mettre-en-rouge')
constaMettreEnrouge.style.color="red"
constenRougeSuiteAclick = document.querySelector('#en-rouge-suite-a-click')
constenRougeSuiteAclick.addEventListener ("click", (evt)=>{
    constenRougeSuiteAclick.style.color='red'
});
constcollH2 = document.querySelectorAll ("h2")
constcollH2.forEach ((elm)=>{elm.addEventListener('click',(evt)=>{ 
        evt.target.style.color = "red";
});
});