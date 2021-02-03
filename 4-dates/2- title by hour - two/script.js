// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();

//ex2

var today = newDate ();
            var hourNow = today.getHours ();
            var greetings ;

            function hourGreetings()
            {
                if (hourNow >17.30)
            {
                greetings ="Hello";
            }
            else if (hourNow >12)
            {
                greetings ="Good evening";
                
            }
            document.write('<p>'+ greetings+'</p>');
            }