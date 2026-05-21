let btn = document.getElementById("submit")
let result = document.getElementById("result")



btn.addEventListener("click", (event) => {

    event.preventDefault()


    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    let age = document.getElementById("age").value

    
    let file = document.getElementById("img").files[0]
    let code = img
    



    if (name !== "" && email !== "" && age !== "" && code) {
        let data = JSON.parse(localStorage.getItem("users")) || []

        data.push({ name, email, age, code })

        localStorage.setItem("users", JSON.stringify(data))
    }
    if (name) {
        document.getElementById("invalidname").innerHTML = ""
    }
    else {
        document.getElementById("invalidname").innerHTML = "Please enter your name"
    }
    if (email) {
        document.getElementById("invalidemail").innerHTML = ""
    }
    else {
        document.getElementById("invalidemail").innerHTML = "@gmail.com required"
    }
    if (age) {
        document.getElementById("invalidage").innerHTML = ""
    }
    else {
        document.getElementById("invalidage").innerHTML = "Please enter your age"
    }
    if(code){
        img = URL.createObjectURL(file)
    }
    else{
        console.log("please Add any image")
    }
})