let data = JSON.parse(localStorage.getItem("users")) || []

let output = document.getElementById("center")

data.forEach(user => {

    let div = document.createElement("div")

    div.innerHTML = `

        <div id="result">

            <img src=${user.code} width="100%" height="100px">

            <h3>Name:<span id="name">${user.name}</span></h3>

            <h3>Email:<span id="email">${user.email}</span></h3>

            <h3>Age:<span id="age"></span>${user.age}</h3>

        </div>`

    output.appendChild(div)
    
})

// let pre = document.getElementById("pre")
// pre.addEventListener("click", () => {
//     window.location.href = "index.html"
// })