
    function random() {
        return Math.ceil(Math.random()  * 100);
    }

    function randomBtn() {
        let number = random(100);


    let greeting = 'Привет! Как тебя зовут?';
    let nameUser = prompt(greeting);


    while (nameUser == number || nameUser == '' || nameUser == null) {
        nameUser = prompt(greeting);
    } 

    alert(nameUser + ', я загадал число от 1 до 100');

    let guess = prompt('Какое число я загадал?');
    let numberOfGuesses = 0;

    while (guess != number) {
        if (guess < number ) {
            guess = prompt('Мало. попробуй ещё раз');
            numberOfGuesses += 1;
    } else if (guess > number) {
            guess = prompt('Много. попробуй ещё раз');
            numberOfGuesses += 1;
        }
    }

    alert('Ты угадал! Это число ' + number + ', тебе потребовалось ' + numberOfGuesses + ' попыт.' );
}


