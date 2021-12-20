
function createEvent(box,color){
    box.addEventListener('click',function(){
        this.classList.add(color);
        if (color==="red") {
            alert(`hai perso ed hai totalizzato ${punteggio}`);

        } else{
            punteggio++;
        }
    })
}

function createNewBox(noRepeat,griglia,box,i){
    let newBox=document.createElement('div');
    newBox.className=box;
    newBox.innerText=i;
    griglia.append(newBox);
    if (noRepeat.includes(i)) {
        createEvent(newBox,"red");
    } else{
        createEvent(newBox,"azure")
    }
}
function punteggioMax(max){
    let totale=max-16;
    if (totale===punteggio) {
        alert("complimenti hai terminato la partita!")
    }
}
//il computer deve generare 16 numeri casuali nello stesso range di difficoltà prescelta:le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.
// let random= (min,max) => Math.floor( Math.random() * (max-min) + min);

function noRepeatNumber(min,max){
    const numbers=[];
    while (numbers.length < 16) {
        const random=Math.floor( Math.random() * (max-min) + min);
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}

let punteggio=0;
let griglia1=document.getElementById("griglia1");
let scelta1=document.getElementById("level1");
let scelta2=document.getElementById("level2");
let scelta3=document.getElementById("level3");


scelta1.addEventListener('click',function(){
        griglia1.innerHTML='';
        punteggioMax(100);
        let bombe=noRepeatNumber(1,100)
        for(i=1; i <= 100; i++){
        createNewBox(bombe,griglia1,'box1',i);

    }
 });
 scelta2.addEventListener('click',function(){
    griglia1.innerHTML='';
    punteggioMax(81);
    let bombe=noRepeatNumber(1,81);
    for(i=1; i <= 81; i++){
    createNewBox(bombe,griglia1,'box2',i);
}
});
scelta3.addEventListener('click',function(){
    griglia1.innerHTML='';
    punteggioMax(49);
    let bombe=noRepeatNumber(1,49)
    for(i=1; i <= 49; i++){
    createNewBox(bombe,griglia1,'box3',i);
}
});



