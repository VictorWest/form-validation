const nameVal = document.getElementById("name")
const password = document.getElementById("password")
const error = document.getElementById("error")
const submit = document.getElementById("submit")

submit.addEventListener("click", (e) => {
    let messages = []
    if(nameVal.value === "" || nameVal.value === null){
        error.classList.add("showError")
        messages.push("Name cannot be empty")
    }
    if(password.value.length <= 6){
        error.classList.add("showError")
        messages.push("Password must be more than 8 characters long")
    }
    if(password.value === "password"){
        error.classList.add("showError")
        messages.push("Password cannot be \"password\"")
    }
    if(messages.length > 0){
        e.preventDefault()
        error.innerHTML = messages.join(", ")
    }else{
        error.classList.remove("showError")
        error.innerHTML = "Successful✔️"
    }
    
})

