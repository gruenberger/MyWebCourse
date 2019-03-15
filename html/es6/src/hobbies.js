const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}

function logHobbies() {
    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();

function returnHobbiesHTML(){
    return `
        <ul>
            <li>${hobbiesArray[0].name} ${hobbiesArray[0].lengthInYearsAtHobby}</li>
            <li>${hobbiesArray[1].name} ${hobbiesArray[1].lengthInYearsAtHobby}</li>
            <li>${hobbiesArray[2].name} ${hobbiesArray[2].lengthInYearsAtHobby}</li>
        </ul>
    `;
}