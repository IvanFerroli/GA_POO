// const rl = require('./interface')

// rl.question('Tu peida, peida?', resposta = {
//     console.log(`sua resposta foi ${resposta}`)
//     rl.close()
// })

const options = require('./data');
const MachineOptions = require('./controller/class/machine');
const User = require('./controller/class/user');
const inquirer = require('inquirer');

let usuario = new User({
    opt: options, 
    name: 'Maria', 
    selected: 'Papel'
}).game()

//let sorteio = new MachineOptions({opt: options}).sort()

console.log(usuario)