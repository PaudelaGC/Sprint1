async function beureCafe() {
    console.log("Primer preparem cafe, trigarem 2 segons");
    return preparat = await prepararCafe();

}

const prepararCafe = async () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Cafe preparat i llest per beure!"));

        }, 2000);
    })

}

module.exports = beureCafe
