function displayName(input){
    console.log(`Hello, ${input}`);
}

displayName('Robert Dobalina');

function fToC(f){
    let c = (f - 32) * (5/9);
    return c;
}

function cToF(c){
    let f = (c * (9/5)) + 32;
    return f;
}

console.log(`212F is ${fToC(212)}`);
console.log(`60C is ${cToF(60)}`);