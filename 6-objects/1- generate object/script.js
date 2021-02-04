// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
})();

var lastname= Marchal;
var firstname= Maureen;
var age = 25 years old;
var city= Quaregnon;
var country = Belgium;

console.log(var)

const presentation =
{
    isHuman : false;
    printIntroduction : function()
    {
        console.log("I am"+ lastname + firstname + "."+"I'm"+age+"I live in a city called"+city+"that is situated in"+country );
    }
};

const me = Object.create(person);

me.printIntroduction();