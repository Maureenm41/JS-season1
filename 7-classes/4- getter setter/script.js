// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
})();

var person = {
    firstName: "Maureen",
    lastName : "Marchal",
    get name() {
      return this.firstName;
      return this.lastName;
    }
  };