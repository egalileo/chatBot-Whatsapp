// logica para interpretar el mensaje del usuario

const whasappModel = require("../shared/whastappModels")
const whatsappService = require("../services/whastappService")

function Process(textUser, number){
    //pasar todo el msg a minus
    textUser = textUser.toLowerCase();
    var models = [];

    if(textUser.include("hola")){
        //SALUDO
        var model = whasappModel.MessageText("Hola, un gusto saludarte", number)
        models.push(model)
    }
    else if(textUser.include("gracias")){
        //AGRADECIMIENTO
        var model = whasappModel.MessageText("Gracias a ti por escribirme", number)
        models.push(model)
    } else if(textUser.include("adios") || 
        textUser.include("bye") || 
        textUser.include("me voy") || 
        textUser.include("adiós")){
        //DESPEDIDA
        var model = whasappModel.MessageText("Un placer haberte entendido", number)
        models.push(model)
    }else{
        //Caso de no entender
        var model = whasappModel.MessageText("No entiendo lo que dices", number)
        models.push(model)
    }

    // Hace un recorrido en cada modelo
    models.forEach( model => {
        whatsappService.SendMessageWhatsApp(model)
    });
    

}


module.exports = {
    Process
}
