//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    console.log(computers);
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    const windows =
    {
        available :true ,
        os : "Windows",
        user: null ,
    };

    const mac =
    {
        available : true,
        os :"macOS"
        user: null,
    }

    
    console.log(defaultProps);
    console.log(windows);
    console.log(mac);
})();
