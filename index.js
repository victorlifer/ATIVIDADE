// exercicio de um curson online.
// exercicio
function imc(altura, peso) {
    return new Promise((resolve, reject) => {
        if (typeof altura !== "number" || typeof peso !== 'number') {
            reject('Argumento nao é um tipo de numero');
        } else {
            resolve(peso / peso ** 2)
        }
    })
}


function showImc(altura, peso) {
    imc(altura, peso)
        .then((result) => {
            console.log(`O resultado do imc ${result}`)
            if (result < 18.5) console.log("magreza")
            else if (result < 25) console.log("normal")
            else if (result < 30) console.log('Sobrepeso')
            else if (result < 40) console.log('Obsidade')
            else console.log("situação: obesidade grave")

        }).catch((err) => {
            console.log(err)
        })
    console.log(`Calculando o imc ${altura} e ${peso}`);
}


showImc(71, 1.54);
showImc(48, 1.60);
showImc(14, 1.30);
showImc(14, 1.48);

