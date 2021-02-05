// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    const instance1 = new Cat('Skitty', 9);
const instance2 = new Cat('Pixel', 6);
console.log(instance1, instance2);
})();