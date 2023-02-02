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

//npm install jszip
const JSZip = require('jszip');
const zip = new JSZip();

comprimir = async fitxer => {
    try {
        //Deixem un delay per poder escriure el fitxer al principi d'aquest codi
        setTimeout(() => {

            const textData = fs.readFileSync(fitxer);
            zip.file("textComprimit.txt", textData);


            zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
                .pipe(fs.createWriteStream('provaCompressio.zip'))
                .on('finish', function () {
                    console.log("provaCompressio.zip creat satisfactoriament");
                });
        }, 1000);

    } catch (err) {
        console.error(err)
    }
}
comprimir('fitxerProva.txt');

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

//Nivell 3 Exercici 1: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
//Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
//Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
//Inclou un README amb instruccions per a l'execució de cada part.


escriuHex = fitxer => {

    const textDataToHex = fs.readFileSync(fitxer);
    const textDataTo64 = fs.readFileSync(fitxer);
    //Això no funciona, i no he trobat la forma de resoldre-ho
    var textHex = textDataToHex.toString('hex');
    var textBase64 = textDataTo64.toString('base64');
    fs.writeFile('fitxerProvaHex.txt', textHex, err => {
        if (err) {
            console.error(err);
        }
        console.log(`Fitxer encriptat a hex satisfactoriament`);
    });
    fs.writeFile('fitxerProva64.txt', textBase64, err => {
        if (err) {
            console.error(err);
        }
        console.log(`Fitxer encriptat a base64 satisfactoriament`);
    });
}

escriuHex('fitxerProva.txt');

//Revisat per Oriol
