let resposta

console.log("Toca algum instrumento?")

process.stdin.on("data", function(data) {
    let entrada_usuario = data.toString().trim().toLowerCase()

    if(!resposta) {
        resposta = entrada_usuario

        if(resposta == "s" || resposta == "sim") {
            console.log("Qual?")
        } else if (resposta == "n" || resposta == "não" || resposta == "nao") {
            console.log("Nada de bom")
            process.exit()
        } else {
            resposta = undefined
            console.log("Não entendi")
        }
    } else {
        if(entrada_usuario == "violão") {
            console.log("digirigidum")
        } else if(entrada_usuario == "guitarrra") {
            console.log("Então vc é trovoso mesmo hein")
        } else {
            console.log("Instrumento esquisito")
        }
    }
});