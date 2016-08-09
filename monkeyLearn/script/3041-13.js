var Conversation = require('hubot-conversation');module.exports = function (robot) { 
var switchBoard = new Conversation(robot); 
robot.respond(/.*permite.*acuerdos.*materia.*descanso.*semanal.*día.*¿sandwich{0,2}.*/, function (msg) {  
var dialog = switchBoard.startDialog(msg, 30000, 'Para mi tambien es aburrido... cambiamos de tema? '); 
 dialog.timeout = function(msg2)
  {   msg2.emote('Para mi tambien es aburrido... cambiamos de tema? ');  }
msg.reply('queres saber sobre  permite acuerdos en materia de descanso semanal día ¿sandwich¿ ley numero: 3041-13 ?'  );
dialog.addChoice( /si|claro|bueno|ok/i, function(msg2)
{
msg2.reply('Las votaciones quedaron, a favor: 22 en contra: 2    y abstenciones: 1');
msg2.reply('Que opinas sobre esto?');
dialog.addChoice( /¿Cree|convenient{0,1}|trabajadorempleador|puedan|negociar|descanso|día|hábil|laboral|entre|feriados|día|¿sandwich{0,3}/i, function(msg2){ 
 var respuestasAzar = ['En primer lugar el proyecto deberia contemplar la congregacion de todos los sectores no podemos permitir que algunos sectores trabajen y otros no porque al final todos dependemos en alguna medida de todos.','la negociacion deberia ser obligatoria y por votacion para empresa con menos de lo necesario para formar sindicato. Pues se presta para abusos por parte el empleador. sobretodo en la pequeñas empresas donde no existen sindicatos.','¿Se debe entender que al decir -que trabajador y empleador puedan negociar- la palabra -trabajador- se refiere a un sindicato?Estimo que si dicho párrafo significa que cada trabajador en forma individual negocia dicho descanso el resultado sería inconveniente ya que podría darse el caso de que algunos trabajadores laboren y otros nó.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['En primer lugar el proyecto deberia contemplar la congregacion de todos los sectores no podemos permitir que algunos sectores trabajen y otros no porque al final todos dependemos en alguna medida de todos.','la negociacion deberia ser obligatoria y por votacion para empresa con menos de lo necesario para formar sindicato. Pues se presta para abusos por parte el empleador. sobretodo en la pequeñas empresas donde no existen sindicatos.','¿Se debe entender que al decir -que trabajador y empleador puedan negociar- la palabra -trabajador- se refiere a un sindicato?Estimo que si dicho párrafo significa que cada trabajador en forma individual negocia dicho descanso el resultado sería inconveniente ya que podría darse el caso de que algunos trabajadores laboren y otros nó.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['En primer lugar el proyecto deberia contemplar la congregacion de todos los sectores no podemos permitir que algunos sectores trabajen y otros no porque al final todos dependemos en alguna medida de todos.','la negociacion deberia ser obligatoria y por votacion para empresa con menos de lo necesario para formar sindicato. Pues se presta para abusos por parte el empleador. sobretodo en la pequeñas empresas donde no existen sindicatos.','¿Se debe entender que al decir -que trabajador y empleador puedan negociar- la palabra -trabajador- se refiere a un sindicato?Estimo que si dicho párrafo significa que cada trabajador en forma individual negocia dicho descanso el resultado sería inconveniente ya que podría darse el caso de que algunos trabajadores laboren y otros nó.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['En primer lugar el proyecto deberia contemplar la congregacion de todos los sectores no podemos permitir que algunos sectores trabajen y otros no porque al final todos dependemos en alguna medida de todos.','la negociacion deberia ser obligatoria y por votacion para empresa con menos de lo necesario para formar sindicato. Pues se presta para abusos por parte el empleador. sobretodo en la pequeñas empresas donde no existen sindicatos.','¿Se debe entender que al decir -que trabajador y empleador puedan negociar- la palabra -trabajador- se refiere a un sindicato?Estimo que si dicho párrafo significa que cada trabajador en forma individual negocia dicho descanso el resultado sería inconveniente ya que podría darse el caso de que algunos trabajadores laboren y otros nó.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Está|acuerdo|cambio|día|descanso|compensen|horas|trabajadaséstas|considerencomo|extraordin{0,6}/i, function(msg2){ 
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
dialog.addChoice( /¿Debiera|esta|medida|regir|tanto|para|sector|público|como|para|privado?/i, function(msg2){ 
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
