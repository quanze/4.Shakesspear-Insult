function titleCase() {

}

titleCase.prototype.caps = function(insult) {
    var arr = insult.split("");
    arr[0] = arr[0].toUpperCase();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == " " || arr[i] == "-") {
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }
    return arr.join('');
}
angular.module('insultApp').service('titleCase', titleCase)
