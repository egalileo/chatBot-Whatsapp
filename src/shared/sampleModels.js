function SampleText(textResponse, number){
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

function SampleImage(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Imagen
        "type" : "image", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "image" : {
            "link" : "https://www.presidencia.gob.sv/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-06-at-4.53.29-PM.jpeg"
        },
        
    })
    return data
}

function SampleAudio(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Nota de Voz
        "type" : "audio", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "audio" : {
            // extension .mp3
            "link" : ""
        },
        
    })
    return data
}

function SampleVideo(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Video
        "type" : "video", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "video" : {
            // extension .mp4
            "link" : ""
        },
        
    })
    return data
}

function SampleDocument(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Documento
        "type" : "document", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "document" : {
            // url de docuemnto en pdf
            "link" : ""
        },
        
    })
    return data
}

function SampleButtons(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Boton
        "type" : "interactive", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "interactive": {
            "type": "button",
            "body": {
                "text": "Favor de elegir una de las opciones"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btn1",
                            "title": "Si ✅"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btn2",
                            "title": "No ❌"
                        }
                    }
                ]
            }
        }
        
    })
    return data
}


function SampleLocation(number){
    const data = JSON.stringify({
        // Estructura del JSON de tipo Ubicacion
        "type" : "location", 
        "messaging_product" : "whatsapp",
        "to" : number,
        "location": {
            "latitude": "13.976820712797448",
            "longitude": "-89.56897149438208",
            "name": "Estadio Quiteno",
            "address": "Estadio Óscar Quiteño, Av, Ave Fray Felipe De Jesus Moraga Sur, Santa Ana"   
        }
        
    })
    return data
}

module.exports = {
    SampleText, SampleImage, SampleAudio, SampleVideo, SampleButtons, SampleLocation, SampleDocument
}