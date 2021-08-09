const tarefas = require("./tarefas")

let newTask = process.argv[2]

tarefas.push(newTask)

console.table(tarefas)
