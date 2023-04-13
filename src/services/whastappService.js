const https = require("https");

// Necesito el texto y su numero para la estructura del JSON de la API
function SendMessageWhatsApp(data){
    
    //Construccion de envio al API
    // https://graph.facebook.com/v16.0/106252552436545/messages
    // Ejemplo de estructura

    const options = {
        host: "graph.facebook.com",
        path: "v16.0/106252552436545/messages",
        method: "POST",
        body: data, // cualquier tipo de mensaje enviado desde sampleModels
        headers: {
            "content-Type" : "application/json",
            Autorization :  "Bearer EAAC3wnZAGaNwBAPVUJCa6l0rpgd179fSuMhb8YW4vWDyD1eqZA4EBnsGczdduIppMhdcYSICcV8X6uYA74UBI6TF9kXgvZCqBZCLhZCqJpJOaVLl8YDL9H0YiuYwFajUUlfYx44WQ4QWgp2oMFMTsy0BqUZCcDuyChdinkWTHfpLZB9cKUdvAwx"
        }
    }

    const req = https.request(options, res => {
        res.on("data" , d=> {
            process.stdout.write(d)
        })
    })

    //proceso de busqueda error
    req.on("error", error => {
        console.error(error)
    })

    req.write(data)
    req.end()
}

module.exports = {
    SendMessageWhatsApp
}

