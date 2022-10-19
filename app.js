//const { argv } = require('process');
const {crear}= require('./helpers/multiplicar.js');
const argv= require('./config/yargs.js');
/*const [,,arg3 = 'base=5'] = process.argv;
const [, base=5 ] = arg3.split('=');*/
console.clear();
crear(argv.b, argv.l, argv.h)
.then(nombre=> console.log(nombre, 'creado'.bgCyan))
.catch(err => console.log(err));