//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let exercise1 = document.getElementById('exercise1');
let exercise2 = document.getElementById('exercise2');

function findWords(str, names) {
    let counter = 0;
    for(let i=0; i<names.length; i++) {
        let name = names[i];
        if(dog_string.indexOf(name) != -1) {
            let text = `Matched dog_name: ${name}`;
            console.log(text);
            exercise1.append(text);
            counter += 1;
        }
    }
    if(counter==0) {
        let text2 = 'No Matches';
        console.log(text2);
        exercise1.append(text2);
    }
}

//Call method here with parameters
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for(let i=0; i<arr.length; i++) {
        if(i % 2 == 0) {
            arr.splice(i, 1, "even index");
        }
    }
    console.log(arr);
    exercise2.append(JSON.stringify(arr));
}

//Call method
replaceEvens(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]