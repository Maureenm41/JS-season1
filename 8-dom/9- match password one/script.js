// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    const passOne = document.getElementById("pass-one")
    const passTwo = document.getElementById("pass-two")

    const form = document.getElementById("formPassword")

    const errorElement = document.getElementById()

    form.addEventListener("Run the script", (e) =>
    {
        let messages =[]
        if (passOne.value === '' || passOne.value == 0)
        {
            messages.push('password is required')
        }

        if (passOne.value.length <= 6)
        {
            messages.push('Password must be longer')
        }

        if (messages.length > 0)
        {
            e.preventDefault()
            errorElement.innerText = messages.join(',')
        }
        
    })

})();