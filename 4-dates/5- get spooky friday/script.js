
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here

})();

//ex5

function numberOfFridaythe13thsIn() {
    var counter = 0;
    for (i = 1; i <= 12; i++) {
        var d = new Date(i + "/13/");                          
        if (d.getDay() == 5) {
            counter++;
        }
    }
    return counter;

}