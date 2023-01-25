function ola() {
    alert("Olá")

}

//ola()

function createUser(name, email, password, userType = "visitante") {
    const user = {
        name,  // é o mesmo que escrever: "name: name,"
        email,
        password,
        userType

    }
    console.log(user)
}

createUser("Maurício", "mauricio@gmail.com", "123456@12", "admin")
