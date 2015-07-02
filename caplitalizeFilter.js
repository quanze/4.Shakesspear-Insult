function capitalize() {
    return function(arr) {
        var arr = arr.split("");
        arr[0] = arr[0].toUpperCase();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == " " || arr[i] == "-") {
                arr[i + 1] = arr[i + 1].toUpperCase();
            }
        }
        return arr.join('');
    }
};

angular.module('insultApp').filter('capitalize', capitalize)
