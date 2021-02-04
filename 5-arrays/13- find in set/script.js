// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    console.log(people.length);
    //people.length =n
//console.log(people.length);
    // your code here

    function testName()
    {
        if("Alexandre")
    {
        result = true ;
    }
    else
    {
        result = false;
    }
    return result ;
    }
    console.log(testName());
    
    
})();