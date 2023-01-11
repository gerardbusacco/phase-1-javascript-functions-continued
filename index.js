 /*Implement a function called saturdayFun. 
 It should return a String like "This Saturday, I want to ....!" 
 Fill in the ... with the activity that's passed in as the first parameter. 
 If nothing is passed in, default to "roller-skate". 
 Run npm test to verify you've gotten the first set of tests passing before continuing with the lesson.
 */

 function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
 }

 function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
 }

 function wrapAdjective(highlight) {
    return function (pretty) {
        return (`You are ${highlight}${pretty}${highlight}!`)
    } 
 }