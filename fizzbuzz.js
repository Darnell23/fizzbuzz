function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else { return 'Even number' }
}

for (i = 0; i < 100; i++) {
    console.log(fizzbuzz(i))
}
