//Nivell 1 Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const contingut = "Aquest fitxer es una nova prova, una mes, i m'acabo d'adonar que no podem posar accents perque el hexadecimal peta";

escriure = (nom, contingut) => {
    fs.writeFile(nom, contingut, err => {
        if (err) {
            console.error(err);
        }
    });
}

escriure('fitxerProva.txt', contingut);


//Nivell 1 Exercici 2: Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

llegir = directori => {
    fs.readFile(directori, 'utf8', (err, info) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(info);
    });
}

llegir('fitxerProva.txt');

//Nivell 1 Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.

const { createGzip } = require('node:zlib');
const { pipeline } = require('node:stream');
const {
  createReadStream,
  createWriteStream,
} = require('node:fs');

const gzip = createGzip();
const source = createReadStream('fitxerProva.txt');
const destination = createWriteStream('fitxerProva.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }else{
    console.log("Fitxer comprimit satisfactoriament");
  }
});

//Nivell 2 Exercici 1: Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
(repetir = async () => {
    setTimeout(() => {
        console.log(`Soc un pesat`);
        repetir();
    }, 1000);

})();

//Nivell 2 Exercici 2: Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
const { exec } = require('child_process');
const os = require("os");
const userHomeDir = os.homedir();

function mostrarDirectori(sistema){
if(sistema === "Windows"){
    exec('dir', {
        cwd: userHomeDir
    }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return
        }
        console.log(`stdout: ${stdout}`);
    })
}else if(sistema == "iOS"){
    exec('ls', {
        cwd: userHomeDir
    }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return
        }
        console.log(`stdout: ${stdout}`);
    })
}else{
    console.log("Sistema no trobat");
}
    
}

mostrarDirectori("Windows");
mostrarDirectori("iOS");

//Revisat per Oriol
