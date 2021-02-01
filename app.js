let friends = ["john", "jane", "mike", "max", "dave"];

let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    for( let f = 0; f < friends.length; f++){
    const div = document.createElement('div')
    div.className = 'friend'

    const h3 = document.createElement('h3')
    h3.textContent = friends[f]

    div.appendChild(h3)
    document.body.appendChild(div)

        console.log(friends[f])

        for (let i = 99; i > 0; i--) {
            const p = document.createElement('p')


            if(i === 2){
                p.textContent = `${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} line of code in the file`
            }else if(i > 1){
            p.textContent = `${i} lines of code in the file, ${i} lines of code; ${friends[f]} strikes one out, clears it all out, ${i-1} lines of code in the file`
        }else{
            p.textContent = `${i} line of code in the file, ${i} line of code; ${friends[f]} strikes it out, clears it all out ${i-1} lines of code in the file`
        }

        div.appendChild(p)

    }
    };
})

