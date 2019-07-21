let timesRun=0;
let a=setInterval(function(){
    timesRun +=1;
    if(timesRun==10){
        clearInterval(a);
    }
console.log("React is the Best");
}
    
    
, 1000);
