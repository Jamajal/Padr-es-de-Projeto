var createOrdeneredList = function () {
    var list = [];
    while (list.length < 100) {
        var newNumber = Math.floor(Math.random() * 100 + 1);
        list.push(newNumber);
    }
    return list.sort();
};
var binarySearch = function (numberToBeSearch, list) {
    var lowest = 0;
    var highest = list.length - 1;
    while (lowest <= highest) {
        var half = Math.ceil((lowest + highest) / 2);
        var guess = list[half];
        if (guess === numberToBeSearch)
            return "O n\u00FAmero ".concat(guess, " foi encontrado na posi\u00E7\u00E3o ").concat(half);
        if (guess > numberToBeSearch)
            highest = half - 1;
        else
            lowest = half + 1;
    }
    return "O n\u00FAmero ".concat(numberToBeSearch, " n\u00E3o se encontra na lista");
};
var list = createOrdeneredList();
var numberToBeSearch = list[50];
console.log(binarySearch(numberToBeSearch, list));
