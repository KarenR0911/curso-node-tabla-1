const fs= require('fs');
const colors = require('colors');
const crear = async(base=5, listar=false, hasta=10) => {
console.clear();
try {
let salida ='';
let consola ='';
for (let i=1 ;i<=hasta; i++) {
salida+= `${base} x ${i} = ${base * i}\n`;
consola+= `${base} x ${i} = ${base * i}\n`.rainbow;
    }
if (listar) {
        console.log('===================================='.green);
        console.log(`------------Tabla del ${base}-------------`.bgWhite.black.bold);
        console.log('===================================='.green);
        console.log(consola);
    } 
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`.bgCyan;


    } catch (error) {
        throw (error);
    }

}

module.exports= {
    crear
}