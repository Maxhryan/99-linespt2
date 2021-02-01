let friends = ["john", "jane", "mike", "max", "dave"];

let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})

let john = document.createElement('div')
let johnText = document.createTextNode('John')
john.appendChild(johnText)
john.className = 'friends'
document.body.appendChild(john)
john.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})


let jane = document.createElement('div')
let janeText = document.createTextNode('jane')
jane.appendChild(janeText)
jane.className = 'friends'
document.body.appendChild(jane)
jane.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})


let mike = document.createElement('div')
let mikeText = document.createTextNode('mike')
mike.appendChild(mikeText)
mike.className = 'friends'
document.body.appendChild(mike)
mike.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})


let max = document.createElement('div')
let maxText = document.createTextNode('max')
max.appendChild(maxText)
max.className = 'friends'
document.body.appendChild(max)
max.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})


let dave = document.createElement('div')
let daveText = document.createTextNode('dave')
dave.appendChild(daveText)
dave.className = 'friends'
document.body.appendChild(dave)
dave.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
        console.log(friends[f])
        for (let i = 99; i > 0; i--) {
            if(i === 2){
                console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`)
            }else if(i > 1){
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`)
        }else{
            console.log(`${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`)
        }
    }
    };
})