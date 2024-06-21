"use strict"


//const x = 10

//const y = 5
document.getElementById("addButton").addEventListener("click", () => {
    const x = Number(document.getElementById("input1").value);
    const y = Number(document.getElementById("input2").value);

    const results = add(x, y)
    alert(`${x} + ${y} = ${results}`)
})

function add(x, y){

    const z = x + y

    console.log(z)
    return z
}

document.getElementById("multButton").addEventListener("click", () => {
    const x = Number(document.getElementById("input1").value);
    const y = Number(document.getElementById("input2").value);

    const results = multiply(x, y)
    alert(`${x} * ${y} = ${results}`)
})


function multiply(x, y){
    const z = x * y

    console.log(z)
    return z
}


document.getElementById("squareButton").addEventListener("click", () => {
    const x = Number(document.getElementById("input1").value);

    const results = square(x)
    alert(`${x} * ${x} = ${results}`)
})

function square(x){ 
    const z = x * x
    console.log(z)
    return z
}

document.getElementById("addSquaresButton").addEventListener("click", () => {
    const x = Number(document.getElementById("input1").value);
    const y = Number(document.getElementById("input2").value);

    const results = addSquares(x, y)
    alert(`(${x} * ${x}) + (${y} * ${y}) = ${square(x)} + ${square(y)} = ${results}`)
})

function addSquares(x, y){
    const a = square(x)
    const b = square(y)

    const z = a + b

    console.log(z)
    return z
}


