const colors = require('colors');
const { rejects } = require('assert');
const { resolve } = require('path');
const fs = require('fs');

 
const crearArchivo = ( base = 1, listar = false, hasta = 1, callback ) => {
    


    return new Promise((resolve, rejects) => {
        let salida = '';
        for(let i = 1; i <= hasta; i++){
            //console.log(base, ' x ', i, ' = ', i*5);
            salida+=`${base} x ${i} = ${base*i}\n`;
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        if(listar){
            console.log('===================='.blue);
            console.log('   TABLA DEL'.red, colors.green(base));
            console.log('===================='.blue);
            console.log(salida);
        }

        (salida)
        ? resolve(`tabla-${base}.txt`)
        : rejects(`Archivo no creado`);
    });

};

module.exports = {
    crearArchivo
}