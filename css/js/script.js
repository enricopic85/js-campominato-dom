function createEvent(box,color){
    box.addEventListener('click',function(){
        this.classList.add(color);
    })
}

function createNewBox(griglia,box,i,numMin,numMax){
    let newBox=document.createElement('div');
    newBox.className=box;
    newBox.innerText=i;
    griglia.append(newBox);
    let randoms=random(numMin,numMax)
    if (i===noRepeatNumber(randoms)) {
        createEvent(newBox,"red");
    } else{
        createEvent(newBox,"azure");
    }
}
//il computer deve generare 16 numeri casuali nello stesso range di difficoltà prescelta:le bombe.
//I numeri nella lista delle bombe non possono essere duplicati.
let random= (min,max) => Math.floor( Math.random() * (max-min) + min);

function noRepeatNumber(randoms){
    const numbers=[];
    while (numbers.length < 16) {
        const random=randoms;
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}

let griglia1=document.getElementById("griglia1");
let scelta1=document.getElementById("level1");
let scelta2=document.getElementById("level2");
let scelta3=document.getElementById("level3");


scelta1.addEventListener('click',function(){
        griglia1.innerHTML='';
        for(i=1; i <= 100; i++){
        createNewBox(griglia1,'box1',i,1,100);
            
    }
 });
 scelta2.addEventListener('click',function(){
    griglia1.innerHTML='';
    for(i=1; i <= 81; i++){
    createNewBox(griglia1,'box2',i);
}
});
scelta3.addEventListener('click',function(){
    griglia1.innerHTML='';
    for(i=1; i <= 49; i++){
    createNewBox(griglia1,'box3',i);
}
});



