// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
})();

/*var lastname= Marchal;
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

me.printIntroduction();*/



const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`I am ${this.name}.  ${this.lastname}. I'm ${this.age} I live in ${this.city} situated in ${this.country}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Maureen';
  me.lastname ='Marchal';
  me.age = '25 year old';
  me.city='Quaregnon';
  me.country='Belgium;'


  me.printIntroduction();