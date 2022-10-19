const { isModuleNamespaceObject } = require('util/types');

const argv =require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    default: 5,
    describe: 'Número con el cuál se creará la tabla.'
})
.check((argv, options) => {
if (isNaN (argv.b) ) {
    throw 'La base debe ser un número';
}
return true;
})   
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false ,
    describe: 'Seleccione si se mostrará la tabla en consola.',
    

}) 
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Número hasta el que llegará la tabla.'
})
.argv;


module.exports= argv;