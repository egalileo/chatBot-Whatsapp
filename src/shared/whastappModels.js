// Creamos modelos dedicados a casos de usoo, ejemplos (despedirse o saludar)

function MessageText(textResponse, number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Texto
        "messaging_product" : "whatsapp",
        "to" : number,
        "text" : {
            "body" : textResponse
        },
        "type" : "text"
    })
    return data
}


module.exports = {
    MessageText
}