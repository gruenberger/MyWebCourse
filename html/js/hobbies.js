const hobbies = [
    {
        name : "Eating donuts",
        lengthInYearsAtHobby: 20
    },

    {
        name : "changing diapers",
        lengthInYearsAtHobby: 1
    },

    {
        name : "pumping serious iron",
        lengthInYearsAtHobby: 10
    }
];

function printHobby(hobby){
    console.log(`Name: ${hobby.name}, Length In Years At Hobby: ${hobby.lengthInYearsAtHobby}`);
}

hobbies.forEach(h => printHobby(h));

//bonus
let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}

let band2 = {
    name : "Muse",
    city : "London" ,
    country : "England",
    yearFormed : 1997,
    genres : ["Progressive rock", "alt rock"]
}

bands = [band1, band2];

function printBands(bands){
    bands.forEach(band => {
        console.log(`Name ${band.name}, From ${band.city}, ${band.country}. Year Formed: ${band.yearFormed} genres: ${band.genres}`);
    });
}
printBands(bands);

weather = [
    {
        day: "Monday",
        high: 80
    },
    {
        day: "Tuesday",
        high: 79
    },
    {
        day: "Wednesday",
        high: 77
    },
    {
        day:"Turdsday",
        high: 76
    },
    {
        day:"Friday",
        high:75
    }
];
let highest = {day: "someDay", high: null};
let lowest = {day: "someDay", high: null};
for (let day of weather){
    if(highest.high === null || day.high > highest.high){
        highest = day;
    }
    if(lowest.high === null || day.high < lowest.high){
        lowest = day;
    }

}
console.log(`Highest day ${highest.day} with ${highest.high} AND lowest day: ${lowest.day} with ${lowest.high}`);