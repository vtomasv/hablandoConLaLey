var Conversation = require('hubot-conversation');module.exports = function (robot) { 
var switchBoard = new Conversation(robot); 
robot.respond(/.*modifica.*normas.*sobre.*reclamaci�{0,2}.*paternidadmaternidad/, function (msg) {  
var dialog = switchBoard.startDialog(msg, 30000, 'Para mi tambien es aburrido... cambiamos de tema? '); 
 dialog.timeout = function(msg2)
  {   msg2.emote('Para mi tambien es aburrido... cambiamos de tema? ');  }
msg.reply('queres saber sobre  modifica normas sobre reclamación de paternidad o maternidad ley numero: 3043-07 ?'  );
dialog.addChoice( /si|claro|bueno|ok/i, function(msg2)
{
msg2.reply('Las votaciones quedaron, a favor: 63 en contra: 1    y abstenciones: 5');
msg2.reply('Que opinas sobre esto?');
dialog.addChoice( /¿Estima|convenient{0,1}|persona|citada|juzgado|para|reconocer|paternidadmaternidadniño|pueda|manifestartiene|dudas|pedir|realicen|exámenes|ADN?/i, function(msg2){ 
 var respuestasAzar = ['solo me quiero acotar que estamos tratando temas que muchas veces afectan a los niños por lo cual la frialdad con la que se esta transando la encuientro inadecuada.','CONSIDERADO...QUE EN DONDE MAS DEBE SER RIGUROSO ES EN EL TIEMPO DE LOS TRAMITES Y COMPARENDOS QUE SE REALICEN Y SI BIEN ENCUENTRO QUE SE LE PRIVILEGIA A LA MADRE LOS HIJOS DEBE SER EQUITATIVO Y EL PADRE DE TENER LOS MISMO PRIVILEGIOS DEBEN SER MAR RIGUROSO CON LAS DEMANDAS PUESTA Y POR SOBRE TODO SI UNA DE LAS PARTES TIENE EVIDENCIA NECESARIA COMO PARA DEJARLE LA TUTELA AL QUE RECLAMA Y NO SOLO AL PADRE SINO TAMBIEN A FAMILIARES QUE DESEEN SU CUIDADO DEL MENOR ... Y EN DONDE SE INSPECCIONAR EN QUE CONDICIONES VIVE... ESTO LO DIGO NO SOLO POR QUE TENGO UN CASO MUY CERCANO SINO POR QUE LO VEO TODOS LOSDIAS LAS JUEZAS DEBEN SER OBJETIVAS Y PARA ELLA TAMBIEN DEBE EXISTIR UN ARTICULO EN DONDE SI UNOS DE LOS DEMANDOS ENCUENTRA QUE NO ESTA HACIENDO SU TRABAJO BIEN TENGA DERECHO A REPLICA COMO DEMOCRACIA QUE SOMOS.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['solo me quiero acotar que estamos tratando temas que muchas veces afectan a los niños por lo cual la frialdad con la que se esta transando la encuientro inadecuada.','CONSIDERADO...QUE EN DONDE MAS DEBE SER RIGUROSO ES EN EL TIEMPO DE LOS TRAMITES Y COMPARENDOS QUE SE REALICEN Y SI BIEN ENCUENTRO QUE SE LE PRIVILEGIA A LA MADRE LOS HIJOS DEBE SER EQUITATIVO Y EL PADRE DE TENER LOS MISMO PRIVILEGIOS DEBEN SER MAR RIGUROSO CON LAS DEMANDAS PUESTA Y POR SOBRE TODO SI UNA DE LAS PARTES TIENE EVIDENCIA NECESARIA COMO PARA DEJARLE LA TUTELA AL QUE RECLAMA Y NO SOLO AL PADRE SINO TAMBIEN A FAMILIARES QUE DESEEN SU CUIDADO DEL MENOR ... Y EN DONDE SE INSPECCIONAR EN QUE CONDICIONES VIVE... ESTO LO DIGO NO SOLO POR QUE TENGO UN CASO MUY CERCANO SINO POR QUE LO VEO TODOS LOSDIAS LAS JUEZAS DEBEN SER OBJETIVAS Y PARA ELLA TAMBIEN DEBE EXISTIR UN ARTICULO EN DONDE SI UNOS DE LOS DEMANDOS ENCUENTRA QUE NO ESTA HACIENDO SU TRABAJO BIEN TENGA DERECHO A REPLICA COMO DEMOCRACIA QUE SOMOS.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['solo me quiero acotar que estamos tratando temas que muchas veces afectan a los niños por lo cual la frialdad con la que se esta transando la encuientro inadecuada.','CONSIDERADO...QUE EN DONDE MAS DEBE SER RIGUROSO ES EN EL TIEMPO DE LOS TRAMITES Y COMPARENDOS QUE SE REALICEN Y SI BIEN ENCUENTRO QUE SE LE PRIVILEGIA A LA MADRE LOS HIJOS DEBE SER EQUITATIVO Y EL PADRE DE TENER LOS MISMO PRIVILEGIOS DEBEN SER MAR RIGUROSO CON LAS DEMANDAS PUESTA Y POR SOBRE TODO SI UNA DE LAS PARTES TIENE EVIDENCIA NECESARIA COMO PARA DEJARLE LA TUTELA AL QUE RECLAMA Y NO SOLO AL PADRE SINO TAMBIEN A FAMILIARES QUE DESEEN SU CUIDADO DEL MENOR ... Y EN DONDE SE INSPECCIONAR EN QUE CONDICIONES VIVE... ESTO LO DIGO NO SOLO POR QUE TENGO UN CASO MUY CERCANO SINO POR QUE LO VEO TODOS LOSDIAS LAS JUEZAS DEBEN SER OBJETIVAS Y PARA ELLA TAMBIEN DEBE EXISTIR UN ARTICULO EN DONDE SI UNOS DE LOS DEMANDOS ENCUENTRA QUE NO ESTA HACIENDO SU TRABAJO BIEN TENGA DERECHO A REPLICA COMO DEMOCRACIA QUE SOMOS.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['solo me quiero acotar que estamos tratando temas que muchas veces afectan a los niños por lo cual la frialdad con la que se esta transando la encuientro inadecuada.','CONSIDERADO...QUE EN DONDE MAS DEBE SER RIGUROSO ES EN EL TIEMPO DE LOS TRAMITES Y COMPARENDOS QUE SE REALICEN Y SI BIEN ENCUENTRO QUE SE LE PRIVILEGIA A LA MADRE LOS HIJOS DEBE SER EQUITATIVO Y EL PADRE DE TENER LOS MISMO PRIVILEGIOS DEBEN SER MAR RIGUROSO CON LAS DEMANDAS PUESTA Y POR SOBRE TODO SI UNA DE LAS PARTES TIENE EVIDENCIA NECESARIA COMO PARA DEJARLE LA TUTELA AL QUE RECLAMA Y NO SOLO AL PADRE SINO TAMBIEN A FAMILIARES QUE DESEEN SU CUIDADO DEL MENOR ... Y EN DONDE SE INSPECCIONAR EN QUE CONDICIONES VIVE... ESTO LO DIGO NO SOLO POR QUE TENGO UN CASO MUY CERCANO SINO POR QUE LO VEO TODOS LOSDIAS LAS JUEZAS DEBEN SER OBJETIVAS Y PARA ELLA TAMBIEN DEBE EXISTIR UN ARTICULO EN DONDE SI UNOS DE LOS DEMANDOS ENCUENTRA QUE NO ESTA HACIENDO SU TRABAJO BIEN TENGA DERECHO A REPLICA COMO DEMOCRACIA QUE SOMOS.'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /Consideran{0,2}|posibilida{0,1}|efectuar|examen|para|interponerdemanda|filiación¿piensa|bastaría|relaten|forma|clara|circunstan{0,5}|hechos|funda?/i, function(msg2){ 
 var respuestasAzar = ['en la propuesta dos no queda claro hacer examen de adn para interponer la demanda es decir previo? Además el trámite no pasa por darle preferencia en la corte sino en realizar de inmediato el examen adn para determinar la paternidad o maternidad. creo que estan demás los testigos y fotos cuando existe una prueba tan clara como la del adn.','Si la persona se niega a concurrir dos veces en un juicio de filiación para la practica de examen ADN debiera ser llevado bajo arresto a la practica de este y si aun así no es compatible tanto la demanadante como el Estado debieran indemnizarlo por los daños y efectos que esto ocasione; considerando una cantidad específica de 30 UTM cada uno cuando se presente dicha circunstancia la cual será reajustada conforme al IPC trimestral. Dicha indemnización deberá quedar dictada por el tribunal no más allá de 5 días hábiles concido el resultado del examen ADN. De lo contrario le sera integrado en la devolución de renta anual en caso que asi lo permita la calificación del demandado de otro modo se deberá cancelar por planilla anexada a su remuneración. ','Quien se niegue a practicarse el examen de ADN no tiene porqué ser -obligado- a ser padre/madre Se deben escuchar sus razones para no hacer el examen y si son bien fundadas entonces el juicio termina por ejemplo si prueba que no estaba en la ciudad al momento de la fecundación'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['en la propuesta dos no queda claro hacer examen de adn para interponer la demanda es decir previo? Además el trámite no pasa por darle preferencia en la corte sino en realizar de inmediato el examen adn para determinar la paternidad o maternidad. creo que estan demás los testigos y fotos cuando existe una prueba tan clara como la del adn.','Si la persona se niega a concurrir dos veces en un juicio de filiación para la practica de examen ADN debiera ser llevado bajo arresto a la practica de este y si aun así no es compatible tanto la demanadante como el Estado debieran indemnizarlo por los daños y efectos que esto ocasione; considerando una cantidad específica de 30 UTM cada uno cuando se presente dicha circunstancia la cual será reajustada conforme al IPC trimestral. Dicha indemnización deberá quedar dictada por el tribunal no más allá de 5 días hábiles concido el resultado del examen ADN. De lo contrario le sera integrado en la devolución de renta anual en caso que asi lo permita la calificación del demandado de otro modo se deberá cancelar por planilla anexada a su remuneración. ','Quien se niegue a practicarse el examen de ADN no tiene porqué ser -obligado- a ser padre/madre Se deben escuchar sus razones para no hacer el examen y si son bien fundadas entonces el juicio termina por ejemplo si prueba que no estaba en la ciudad al momento de la fecundación'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['en la propuesta dos no queda claro hacer examen de adn para interponer la demanda es decir previo? Además el trámite no pasa por darle preferencia en la corte sino en realizar de inmediato el examen adn para determinar la paternidad o maternidad. creo que estan demás los testigos y fotos cuando existe una prueba tan clara como la del adn.','Si la persona se niega a concurrir dos veces en un juicio de filiación para la practica de examen ADN debiera ser llevado bajo arresto a la practica de este y si aun así no es compatible tanto la demanadante como el Estado debieran indemnizarlo por los daños y efectos que esto ocasione; considerando una cantidad específica de 30 UTM cada uno cuando se presente dicha circunstancia la cual será reajustada conforme al IPC trimestral. Dicha indemnización deberá quedar dictada por el tribunal no más allá de 5 días hábiles concido el resultado del examen ADN. De lo contrario le sera integrado en la devolución de renta anual en caso que asi lo permita la calificación del demandado de otro modo se deberá cancelar por planilla anexada a su remuneración. ','Quien se niegue a practicarse el examen de ADN no tiene porqué ser -obligado- a ser padre/madre Se deben escuchar sus razones para no hacer el examen y si son bien fundadas entonces el juicio termina por ejemplo si prueba que no estaba en la ciudad al momento de la fecundación'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] ); 
 dialog.addChoice( /.*/ , function(msg2){ 
 var respuestasAzar = ['en la propuesta dos no queda claro hacer examen de adn para interponer la demanda es decir previo? Además el trámite no pasa por darle preferencia en la corte sino en realizar de inmediato el examen adn para determinar la paternidad o maternidad. creo que estan demás los testigos y fotos cuando existe una prueba tan clara como la del adn.','Si la persona se niega a concurrir dos veces en un juicio de filiación para la practica de examen ADN debiera ser llevado bajo arresto a la practica de este y si aun así no es compatible tanto la demanadante como el Estado debieran indemnizarlo por los daños y efectos que esto ocasione; considerando una cantidad específica de 30 UTM cada uno cuando se presente dicha circunstancia la cual será reajustada conforme al IPC trimestral. Dicha indemnización deberá quedar dictada por el tribunal no más allá de 5 días hábiles concido el resultado del examen ADN. De lo contrario le sera integrado en la devolución de renta anual en caso que asi lo permita la calificación del demandado de otro modo se deberá cancelar por planilla anexada a su remuneración. ','Quien se niegue a practicarse el examen de ADN no tiene porqué ser -obligado- a ser padre/madre Se deben escuchar sus razones para no hacer el examen y si son bien fundadas entonces el juicio termina por ejemplo si prueba que no estaba en la ciudad al momento de la fecundación'];  
 msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );});
});
});
});
dialog.addChoice( /¿Cree|adecuado|agilizar|juicios|discute|filiaciónniño|ejemplo|acortando|trámites|dándole|preferenci{0,1}|Cortes|Apelacione{0,2}/i, function(msg2){ 
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
dialog.addChoice( /¿Está|acuerdo|juicio|filiaciónpersona|niega|veces|concurrir|para|practicars{0,1}|examen|presuma|legalmentepadre|madre|niño|según|caso?/i, function(msg2){ 
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
