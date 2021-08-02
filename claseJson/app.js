// Requiero un modulo nativo FS (siempre va asi)
let fs = require("fs");


// Me traigo el objeto que voy a querer mostrar
let objeto = fs.readFileSync("./tareas.json", 'utf-8');


// Transformo un JSON (string) a un objeto, y lo guardo en una variable
let tareas = JSON.parse(objeto);


// Lo imprimo en pantalla
console.log(tareas);