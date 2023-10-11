

let write = 'FizzBuzz';
let three = 'Fizz';
let five = 'Buzz';
const quadratoEl = document.getElementById('quadrato');



for (let i = 1; i < 101; i++ ){
    console.log(i)
    if((i % 3 === 0) && (i % 5 === 0)){
        write = 'FizzBuzz'
        console.log(write)
    } else if (i % 3 === 0){
        three = 'Fizz'
        console.log(three)
    
    } else if (i % 5 === 0){
        five = 'Buzz'
        console.log(five)
    }
}


