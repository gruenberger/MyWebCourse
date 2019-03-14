let numOne = 1;
let stringOne = '1';


console.log('double == ', numOne == stringOne);
console.log('triple ===', numOne === stringOne);


const day = new Date().getDay();


    if(day == 1){
        console.log("Back to work!");
    }else if(day == 3){
        console.log("Over the hump!");

    }else if(day == 6 || day == 0){
        console.log("It is the weekend!");
    }else {
        console.log("It is a weekday");
    }

