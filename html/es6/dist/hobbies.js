'use strict';

var hobbiesArray = [{ name: 'volleyball', lengthInYearsAtHobby: 25 }, { name: 'cooking', lengthInYearsAtHobby: 15 }, { name: 'swimming', lengthInYearsAtHobby: 11 }];

function logHobby(oneHobby) {
    console.log(oneHobby.name + ': A hobby for ' + oneHobby.lengthInYearsAtHobby + ' years');
}

function logHobbies() {
    for (var index = 0; index < hobbiesArray.length; index++) {
        var hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();

function returnHobbiesHTML() {
    return '\n        <ul>\n            <li>' + hobbiesArray[0].name + ' ' + hobbiesArray[0].lengthInYearsAtHobby + '</li>\n            <li>' + hobbiesArray[1].name + ' ' + hobbiesArray[1].lengthInYearsAtHobby + '</li>\n            <li>' + hobbiesArray[2].name + ' ' + hobbiesArray[2].lengthInYearsAtHobby + '</li>\n        </ul>\n    ';
}