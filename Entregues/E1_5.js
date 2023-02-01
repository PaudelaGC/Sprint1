//Nivell 1 Exercici 1: Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const contingut = "Aquest fitxer es una nova prova, una més";

escriure = contingut => {
    fs.writeFile('fitxerProva.txt', contingut, err => {
        if (err) {
            console.error(err);
        }
    });
}

//escriure(contingut);


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

//llegir('fitxerProva.txt');

//Nivell 1 Exercici 3: Crea una funció que comprimeixi el fitxer del nivell 1.

const JSZip = require('jszip');
const zip = new JSZip();

comprimir = fitxer => {
    try {
        const textData = fs.readFileSync(fitxer);
        zip.file("textComprimit.txt", textData);


        zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream('provaCompressio.zip'))
            .on('finish', function () {
                console.log("provaCompressio.zip creat satisfactoriament");
            });

    } catch (err) {
        console.error(err)
    }
}

comprimir('fitxerProva.txt');
//Comenta escriure i llegir per realitzar aquesta part
