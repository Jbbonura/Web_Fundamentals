// Print odds 1-20
for (var i = 1; i < 20; i++) {
    if (i % 2 != 0)
        console.log(i)
}

//Decreasing multiples of 3
for (var i=100; i >= 0; i--) {
    if (i % 3 == 0)
        console.log(i)
}

//print the sequence
for (var i=4; i >= -3.5; i-=1.5) {
    console.log(i)
}

//Sigma
var sum = 0;
for (var i=1; i<=100; i++) {
    sum += i;

    if ( i < 100) {
        console.log(i)
        console.log("+")
    }
    else {
        console.log(i)
        console.log("=")
    }
}
console.log(sum)

//factorial
var product = 0;
for (var i=1; i<=12; i++) {
    product *= i
    if ( i < 12) {
        console.log(i)
        console.log("*")
    }
    else {
        console.log(i)
        console.log("=")
    }
}
console.log(product)
