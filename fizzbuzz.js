function fizzbuzz(num) {
    
    if (num % 3 === 0 && num % 5 === 0) {
        return fizzbuzz
    }

    else if (num % 3 === 0) {
        return "Fizz";
    }
    else (num % 5 === 0) {
        return "Buzz"
    }

}

for(i=0; i<100;i++) {
    console.log(fizzbuzz(i))
}