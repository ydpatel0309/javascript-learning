var result=document.getElementById("counterValue");
function onDecrement() {
    
    let x=result.innerHTML;
    x=parseInt(x);
    
    if(x%2!==0)  x=x-2;
    else  x=x-1;
    result.innerHTML=x;
}

function onReset() {
    result.innerHTML="0";
}

function onIncrement() {
    let x=result.innerHTML;
    x=parseInt(x);
    
    if(x%2!==0) x=x+10;
    else x=x+5;
     result.innerHTML=x;
}
