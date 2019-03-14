let hobbies = ["eating","diaper changing","sleeping"];

function printHobbies(hobs){
    console.log(`I like ${hobs.length} things:`);
    hobs.forEach(function(x){
        console.log(`I like ${x}`);
    });
}

printHobbies(hobbies);

let myColor = ["Red", "Green", "White", "Black"];

function printToString(arr){
    console.log(arr.join(','));
}

printToString(myColor);

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

//List of unique values
let uniques = getUniques(arr1);

function getUniques(arr1){
    let retMe = [];
    arr1.forEach(x => {
        if (retMe.indexOf(x) == -1) {
            retMe.push(x);
        }
    });
    return retMe;
}
console.log(uniques);

let counts = [];//uniques position coresponds to 
for(let ind = 0; ind < uniques.length; ind++){
    let filtered = arr1.filter(x => x == uniques[ind]);
    counts.push(filtered.length);
}
console.log(counts);

let mostIndex = calcMost(uniques, counts);

function calcMost(uniques, counts){
    let winner = 0;
    for(let i =1; i < uniques.length; i ++){
        if(counts[i] > counts[i-1]){
            winner = i;
        }
    }
    return winner;
}

console.log(`Most occurences is ${uniques[mostIndex]} with ${counts[mostIndex]} occurrences`);