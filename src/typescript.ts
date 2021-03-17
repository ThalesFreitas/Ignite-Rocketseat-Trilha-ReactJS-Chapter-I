
                    //Conceito de TypeScript
//Adiconando tipagem, ou seja qual o formado das informações
// que eu estou esperando dentro dos argumentos

//Cria uma tipagem User do tipo type contendo os dados que vai ser recebido pelos argumetos,
// informando seu tipo, ou , seja string, number ... 
type User = {
    name: String
    email: String
    address: {
        city: String
        state?: String
    }
}

//Associamos nosso user a tipagem User criado acima, assim eu terei todas a informações no autocomplete
function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}.
    Your city is ${user.address.city}
    and your state is ${user.address.state}`;
}

//Passo os dados para função
showWelcomeMessage({
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'New York',
        state: 'NY',
    }
})