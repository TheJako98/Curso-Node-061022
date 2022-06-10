const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'ARCHIVO CREADO'))
    .catch(err => console.log((err)));


//npm install para restaurar modulos
