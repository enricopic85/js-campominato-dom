function createNewBox(griglia,box,max){
    let newBox=document.createElement('div');
    newBox.className=box;
    newBox.innerText=max;
    griglia.append(newBox);
    newBox.addEventListener('click',function(){
        this.classList.add("azure");
    })
}

let griglia1=document.getElementById("griglia1");
let scelta1=document.getElementById("level1");
let scelta2=document.getElementById("level2");
let scelta3=document.getElementById("level3");


scelta1.addEventListener('click',function(){
        griglia1.innerHTML='';
        for(i=1; i <= 100; i++){
        createNewBox(griglia1,'box1',i);
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

let random=(min,max) => Math.floor( Math.random() * (max-min) + min);

const numbers=[];
while (numbers.length < 16) {
    const random=random(1,16);
    if (!numbers.includes(random)) {
        numbers.push(random);
    }
    
}
console.log(numbers)