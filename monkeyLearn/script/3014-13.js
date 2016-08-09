var Conversation = require('hubot-conversation');module.exports = function (robot) { 
var switchBoard = new Conversation(robot); 
robot.respond(/.*estatuto.*laboral.*para.*deportista{0,1}.*profesiona{0,3}.*trabajador{0,2}.*desempeña{0,1}.*actividade{0,1}.*conexas.*/, function (msg) {  
var dialog = switchBoard.startDialog(msg, 30000, 'Para mi tambien es aburrido... cambiamos de tema? '); 
 dialog.timeout = function(msg2)
  {   msg2.emote('Para mi tambien es aburrido... cambiamos de tema? ');  }
msg.reply('queres saber sobre  estatuto laboral para deportistas profesionales y trabajadores que desempeñan actividades conexas ley numero: 3014-13 ?'  );
dialog.addChoice( /si|claro|bueno|ok/i, function(msg2)
{
msg2.reply('Las votaciones quedaron, a favor: 39 en contra: 3    y abstenciones: 1');
msg2.reply('Que opinas sobre esto?');
dialog.addChoice( /¿Cree|necesario|regular|Código|Trabajo|contrato|especial|para|deportista{0,1}|profesiona{0,4}/i, function(msg2){ 
 var respuestasAzar = ['El proyecto es claramente incompleto. Sugerencias: a Que el plazo mínimo de contrato esté dado por un torneo no inferior en todo caso a 3 meses. b Que el registro de contratos lo lleve la respectiva federación nacional. c Se debe mejorar la normativa disciplinaria. d Que los premios se paguen según lo acuerden las partes. e Mejorar la regulación del derecho  de imagen del jugador. Faltan los siguientes aspectos: a Contrato de prueba. b Situación del deportista convocado a la selección nacional. c Regular las indemnizaciones por término de contrato. d Situación del jugador lesionado que no puede volver a jugar.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El proyecto es claramente incompleto. Sugerencias: a Que el plazo mínimo de contrato esté dado por un torneo no inferior en todo caso a 3 meses. b Que el registro de contratos lo lleve la respectiva federación nacional. c Se debe mejorar la normativa disciplinaria. d Que los premios se paguen según lo acuerden las partes. e Mejorar la regulación del derecho  de imagen del jugador. Faltan los siguientes aspectos: a Contrato de prueba. b Situación del deportista convocado a la selección nacional. c Regular las indemnizaciones por término de contrato. d Situación del jugador lesionado que no puede volver a jugar.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El proyecto es claramente incompleto. Sugerencias: a Que el plazo mínimo de contrato esté dado por un torneo no inferior en todo caso a 3 meses. b Que el registro de contratos lo lleve la respectiva federación nacional. c Se debe mejorar la normativa disciplinaria. d Que los premios se paguen según lo acuerden las partes. e Mejorar la regulación del derecho  de imagen del jugador. Faltan los siguientes aspectos: a Contrato de prueba. b Situación del deportista convocado a la selección nacional. c Regular las indemnizaciones por término de contrato. d Situación del jugador lesionado que no puede volver a jugar.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El proyecto es claramente incompleto. Sugerencias: a Que el plazo mínimo de contrato esté dado por un torneo no inferior en todo caso a 3 meses. b Que el registro de contratos lo lleve la respectiva federación nacional. c Se debe mejorar la normativa disciplinaria. d Que los premios se paguen según lo acuerden las partes. e Mejorar la regulación del derecho  de imagen del jugador. Faltan los siguientes aspectos: a Contrato de prueba. b Situación del deportista convocado a la selección nacional. c Regular las indemnizaciones por término de contrato. d Situación del jugador lesionado que no puede volver a jugar.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Consider{0,1}|adecuado|hacer|aplicable|contrato|también|entrenador{0,2}|kinesiólo{0,3}|demás|profesiona{0,3}|trabajador{0,2}|deporte?/i, function(msg2){ 
 var respuestasAzar = ['Más que una ley en especia se deben rejir por la normativa actual quizás se deba flexibilizar más la ley pero si se le exijiera a las entidades deportivas y además de eso junto a una obligación de establecerse como empresas de caracter de sociedades anónimas deberíasn resolverse de mejor manera los problemas','esta acitividad debe regularse como cualquier otra considarando aspecto tales como prevision salud y tributacion'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['Más que una ley en especia se deben rejir por la normativa actual quizás se deba flexibilizar más la ley pero si se le exijiera a las entidades deportivas y además de eso junto a una obligación de establecerse como empresas de caracter de sociedades anónimas deberíasn resolverse de mejor manera los problemas','esta acitividad debe regularse como cualquier otra considarando aspecto tales como prevision salud y tributacion'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['Más que una ley en especia se deben rejir por la normativa actual quizás se deba flexibilizar más la ley pero si se le exijiera a las entidades deportivas y además de eso junto a una obligación de establecerse como empresas de caracter de sociedades anónimas deberíasn resolverse de mejor manera los problemas','esta acitividad debe regularse como cualquier otra considarando aspecto tales como prevision salud y tributacion'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['Más que una ley en especia se deben rejir por la normativa actual quizás se deba flexibilizar más la ley pero si se le exijiera a las entidades deportivas y además de eso junto a una obligación de establecerse como empresas de caracter de sociedades anónimas deberíasn resolverse de mejor manera los problemas','esta acitividad debe regularse como cualquier otra considarando aspecto tales como prevision salud y tributacion'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Le|parece|convenient{0,1}|este|contrato|pueda|celebrarsetiempo|determinad{0,1}|decir|plazo|fijo|temporadascampeonato{0,2}/i, function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Está|acuerdo|durante|vigencia|contrato|entidad|deportiva|pueda|convenir|otra|cesión|temporal|definitivaservicios|deportistaprofesiona{0,2}/i, function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿De|existir|señalada|cesión|temporal|definitivaestá|acuerdo|ella|deba|contar|aceptació{0,1}|expresa|deportistaprofesiona{0,2}/i, function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /Ideas|Generales/i, function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = [];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
});
});
 };
