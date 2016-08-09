var Conversation = require('hubot-conversation');module.exports = function (robot) { 
var switchBoard = new Conversation(robot); 
robot.respond(/.*impide.*colegios.*enviar.*tareas.*para.*/, function (msg) {  
var dialog = switchBoard.startDialog(msg, 30000, 'Para mi tambien es aburrido... cambiamos de tema? '); 
 dialog.timeout = function(msg2)
  {   msg2.emote('Para mi tambien es aburrido... cambiamos de tema? ');  }
msg.reply('queres saber sobre  impide a los colegios enviar tareas para la cas ley numero: 10730-04 ?'  );
dialog.addChoice( /si|claro|bueno|ok/i, function(msg2)
{
msg2.reply('Las votaciones quedaron, a favor: 1761 en contra: 613    y abstenciones: 56');
msg2.reply('Que opinas sobre esto?');
dialog.addChoice( /Consideran{0,2}|existe|Jornada|Escolar|Completa|exigencia|escolar|rendimient{0,1}|¿está|acuerdo|prohibir|cumplimien{0,2}|tareas|escolares|fuera|horario|clases?/i, function(msg2){ 
 var respuestasAzar = ['El objetivo en un principio de la jornada escolar completa era precisamente que no se le entregaran a los alumnos tareas para desarrollar en el hogar ya que esto atenta contra el tiempo que tiene que disponer el joven para compartir con la familia realizar algún otro tipo de actividad extra escolar que permita desarrollar otras habilidades que complemente su desarrollo integro como persona y desarrollar ademas un contacto familiar fuera del ámbito educacional tareas trabajos etc para impregnarse de esos valores tan escasos y que tanto hacen faltas en estos tiempos '];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El objetivo en un principio de la jornada escolar completa era precisamente que no se le entregaran a los alumnos tareas para desarrollar en el hogar ya que esto atenta contra el tiempo que tiene que disponer el joven para compartir con la familia realizar algún otro tipo de actividad extra escolar que permita desarrollar otras habilidades que complemente su desarrollo integro como persona y desarrollar ademas un contacto familiar fuera del ámbito educacional tareas trabajos etc para impregnarse de esos valores tan escasos y que tanto hacen faltas en estos tiempos '];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El objetivo en un principio de la jornada escolar completa era precisamente que no se le entregaran a los alumnos tareas para desarrollar en el hogar ya que esto atenta contra el tiempo que tiene que disponer el joven para compartir con la familia realizar algún otro tipo de actividad extra escolar que permita desarrollar otras habilidades que complemente su desarrollo integro como persona y desarrollar ademas un contacto familiar fuera del ámbito educacional tareas trabajos etc para impregnarse de esos valores tan escasos y que tanto hacen faltas en estos tiempos '];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['El objetivo en un principio de la jornada escolar completa era precisamente que no se le entregaran a los alumnos tareas para desarrollar en el hogar ya que esto atenta contra el tiempo que tiene que disponer el joven para compartir con la familia realizar algún otro tipo de actividad extra escolar que permita desarrollar otras habilidades que complemente su desarrollo integro como persona y desarrollar ademas un contacto familiar fuera del ámbito educacional tareas trabajos etc para impregnarse de esos valores tan escasos y que tanto hacen faltas en estos tiempos '];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Cree|mayor|parte|esfuerzo|aprendizaj{0,1}|debe|realizarsedentro|establecim{0,5}|educaciona{0,1}|incluyendotareas?/i, function(msg2){ 
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
dialog.addChoice( /juicio|¿es|apropiado|exigir|cumplimien{0,2}|deberes|escolares|complement{0,5}|hogar?/i, function(msg2){ 
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
dialog.addChoice( /¿Se|descuidan|otros|ámbitos|desarrolloestudiante{0,1}|medio|exigencia|cumplir|deberes|escolares|hogar?/i, function(msg2){ 
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
dialog.addChoice( /¿Es|necesario|para|refuerzo|alumnos|problemas|aprendizaj{0,1}|exigencia|deberes|escolares|fuera|horario|clases?/i, function(msg2){ 
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
