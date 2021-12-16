function numAleatorio(min = 1000, max = 4000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
numAleatorio(); 

function f1(callback){
    setTimeout(function(){
        console.log("F1");
        if (callback) {callback();}
    }, numAleatorio())
    
}
function f2(callback){
    setTimeout(function(){
        console.log("F2");
        if (callback) {callback();}
    }, numAleatorio())
    
}
function f3(callback){
    setTimeout(function(){
        console.log("F3");
        if (callback) {callback();}
    }, numAleatorio())
    
}
/*
f1(function(){
    f2(function(){
        f3(function(){
            console.log("Ola mundo!");
        });
    });
});*/


f1(callbackf1);

function callbackf1(){
    f2(callbackf2);
}
function callbackf2(){
    f3(callbackf3);
}
function callbackf3(){
    console.log("Ola mundo!")
}
