// Рандомные слова

// var randomWords = [
// 	"мама",
// 	"папа",
// 	"дядя",
// 	"игра",
// 	"словосочетание",
// 	"разность",
// 	"улет"
// ]

var randomWord = prompt("Загадай слово"); // Разкоментировать, если хочется самому вставить какое либо слово
var randomWord = randomWord.toLowerCase();

// Выбор рандомного слова из списка

// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var completeWord = [];

// Делаем из слова _

for (var i = 0; i < randomWord.length; i++){
	completeWord[i] = "_";
}
var remainingLetter = randomWord.length;

// Ставим ограничение по ходам

var remainingTrying = 6;

// Делаем игру

while(remainingLetter > 0 && remainingTrying > 0){
	// Обновляем состояние игры
	alert(completeWord.join(""));
	// Спрашуем у игрока хочет ли он играть
	var guess = prompt("Давай сыграем в игру Виселица? Если да - введи рандомную букву, если не хочешь же - нажми кнопку отмена.");
	// Создаем цикл проверки
	if (guess === null || remainingTrying === 0){
		alert("Увидимся в следующий раз!");
		break; // если игрок нажал отмена - выйти с игры
	} else if(guess.length !== 1){
		alert("Введите только одну букву"); // если игрок ввел одну букву - предупредить его об этом
	} else{
		var guess = guess.toLowerCase(); // Если буква большая - сделать ее маленькой
		var correctGuess = false; // Для уменьшения попыток
		for(var j = 0; j < randomWord.length; j++){
			if(randomWord[j] === guess && completeWord[j] === "_"){
				completeWord[j] = guess; // Замена слова
				remainingLetter--; // если игрок ввел одну букву, и не нажал отмена - начать сверку символов
				correctGuess = true;
			}
		}
		if(!correctGuess){
			remainingTrying--; // Само уменьшение попыток
		}
	}
}
// После угадывание слова показать игроку слово и поздравить его.
if(completeWord.join("") === randomWord){
	alert(completeWord.join(""));
	alert("Молодец! Ты угадал!");
} else if (remainingTrying === 0){
	alert("Увы, но вы проиграли, загаданное слово было " + randomWord);
}