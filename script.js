let btn = document.getElementById("submit")

let result = document.getElementById("result")

btn.addEventListener("click", (event) => {

    event.preventDefault()

    let name = document.getElementById("name").value

    let email = document.getElementById("email").value

    let age = document.getElementById("age").value

    let file = document.getElementById("img").files[0]

    let code = URL.createObjectURL(file)

    if (name !== "" && email !== "" && age !== "" && file) {

        let reader = new FileReader()

        reader.onload = function(){

            let code = reader.result

            let data = JSON.parse(localStorage.getItem("users")) || []

            data.push({ name, email, age, code })

    
            localStorage.setItem("users", JSON.stringify(data))

            window.location.href="user.html"

        }
        reader.readAsDataURL(file)
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
        console.log("okk")
    }

    else{
        console.log("please Add any image")
    }
    
})
