const fs = require("fs")
const myConsole  = new console.Console(fs.createWriteStream("./logs.txt"))
const processMessage = require("../shared/processMessage")




const VerifyToken = (req, res) => {

    try{
        var accessToken = "GALILE0123" //token de usuario
        var token = req.query["hub.verify_token"] //token de whatsapp
        var challenge = req.query["hub.challenge"] //Devolver al verificar token
    
        if( challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send()
        }

    }catch(e){
        res.status(400).send()
    }
    
}

const ReceivedMessage = (req, res) => {
   try{
    //Estructura para extraer msg de whatsApp
    var entry = (req.body["entry"])[0]
    var changes = (entry["changes"])[0]
    var value =  changes["value"]
    var messageObject = value["messages"]

    if(typeof messageObject != "undefined"){
        // Siempre viene en el primer bloque 
        var messages = messageObject[0];

        //Captura del numero
        var number = messages["from"]

        //Captura txt sin importar tipo
        var text = GetTextuser(messages)

        //Envio de msg con casos de uso
        if(text != ""){
            processMessage.Process(text, number)
        }

        //Envio de msg de cualquier tipo

        // if(text == "text"){
        //     var data = samples.SampleText("Hola usuario", number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // } else if(text == "image"){
        //     var data = samples.SampleImage(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else if(text == "video"){
        //     var data = samples.SampleVideo(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else if(text == "audio"){
        //     var data = samples.SampleAudio(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else if(text == "document"){
        //     var data = samples.SampleDocument(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else if(text == "button"){
        //     var data = samples.SampleButtons(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else if(text == "location"){
        //     var data = samples.SampleLocation(number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }else{
        //     var data = samples.SampleText("No entiendo", number)
        //     whatsAppService.SendMessageWhatsApp(data)
        // }
        

        myConsole.log(text)

        

    }
    
    res.send("EVENT_RECEIVED") 
   }catch(e){
    //Si no, whatsapp va a estar enviando siempre
    res.send("EVENT_RECEIVED") 
    myConsole.log(e)
}
}

function GetTextuser(messages){
    var text = ""
    var typeMessage = messages["type"]
    myConsole.log(interactiveObject)
    // Especificamos entre los dos tipos de mensajes (texto, interactivo)
    // Interactivo se refiere a cuando hay botones u otros componentes

    if (typeMessage == "text"){
        text = (messages["text"]["body"])

    }else if(typeMessage == interactive){
        // Responde a boton o lista de opciones
        var interactiveObject = messages["interactive"]
        var typeInteractive = interactiveObject["type"]

        if (typeInteractive == "button_reply"){
            //capturar respuesta
            text = (interactiveObject["button_reply"]["title"])

        }else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"]["title"])

        }else{
            myConsole.log("sin mensaje")
        }
        return text
    }else{

    }



}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
