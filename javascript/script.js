

const quadratoEl = document.getElementById('quadrato');



for (let i = 1; i < 101; i++ ){
    console.log(i)
    write = i
    
    let boxClass = 'bg-blue'
    if((i % 3 === 0) && (i % 5 === 0)){
        write = 'FizzBuzz'
        boxClass = 'bg-pink'
        
        console.log(write)
    } else if (i % 3 === 0){
        write = 'Fizz'
        console.log(write)
        boxClass = 'bg-aqua'
    
    } else if (i % 5 === 0){
        write = 'Buzz'
        console.log(write)
        boxClass = 'bg-yellow'
    }
    const boxElementi = document.createElement ('div');
    boxElementi.className = `box ${boxClass} d-flex justify-content-center align-items-center`
    boxElementi.innerHTML = write;
    quadratoEl.append(boxElementi);
}




