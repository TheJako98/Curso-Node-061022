const argv = require('yargs')
    .option({
        'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false, 
            describe: 'Mostrar tabla de multiplicar'
        },
        'h':{
            alias:'hasta',
            type:'number',
            default:1,
            describe: 'Hasta que numero multiplicar la base'
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'Base o hasta debe ser un number'
        }
        return true;
    })
    .argv;
//console.clear();

//const base = 8;

//MANERA NO RECOMENDADA
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')


//YARGS

//console.log(process.argv);

//console.log(argv.l);
//console.log(argv.b);

// console.log(base);
module.exports = argv;