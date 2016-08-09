import csv, json, sys, codecs, os, re

input =  codecs.open('proyectosVotados.json', encoding='utf-8')
data = json.load(input)
input.close()

#output = csv.writer(open('test_2.csv', 'wb+'))
#output = open('test_2.csv', 'wb+')
#output.writerow(data[0].keys())  # header row

datosCompletos = set()





for row in data:


    nBoletin = row['nBoletin'][0]
    output = open("script/"+nBoletin+".js", 'wb+')

    output.write("var Conversation = require('hubot-conversation');\r\n".encode('utf-8').strip(os.linesep))

    output.write("module.exports = function (robot) { \r\n".encode('utf-8'))
    output.write("var switchBoard = new Conversation(robot); \r\n".encode('utf-8'))


    nombreLey = row['nombre'][0]

    nombreLey = nombreLey.encode('utf-8').strip(os.linesep)
    nombreLey = re.sub(r'[,|(|)|!]', r'', "".join(list(nombreLey)[:-1]))

    nombreLeyEnRegExp = ".*"

    NombreLeySeparado = nombreLey.split()

    for palabra in NombreLeySeparado:
        if (len(palabra) > 10):
            palabra = "".join(list(palabra)[:-(len(palabra) - 10)]) + "{0," + str((len(palabra) - 10)) + "}"+".*"
        if (len(palabra) > 3) and (len(palabra) < 10):
            palabra = palabra + ".*"
        if (len(palabra) <= 3):
            palabra = ""
        nombreLeyEnRegExp = nombreLeyEnRegExp + palabra


    if (nombreLeyEnRegExp[len(nombreLeyEnRegExp)-1] == "|"):
            nombreLeyEnRegExp = "".join(list(nombreLeyEnRegExp)[:-1])



    output.write("robot.respond(/" + nombreLeyEnRegExp.lower()  + "/, function (msg) {  \r\n".encode('utf-8') )
    output.write("var dialog = switchBoard.startDialog(msg, 30000, 'Para mi tambien es aburrido... cambiamos de tema? '); \r\n".encode('utf-8'))
    output.write(" dialog.timeout = function(msg2)\r\n".encode('utf-8'))
    output.write("  {   msg2.emote('Para mi tambien es aburrido... cambiamos de tema? ');  }\r\n".encode('utf-8'))


    output.write("msg.reply('queres saber sobre  "+ re.sub(r'[,|(|)|!]', r'', nombreLey.lower().replace("\r\n", "")) + " ley numero: "   + nBoletin.encode('utf-8') + " ?'  );\r\n".encode('utf-8'))

    output.write("dialog.addChoice( /si|claro|bueno|ok/i, function(msg2)\r\n".encode('utf-8'))
    output.write("{\r\n".encode('utf-8'))

    if  'enAbstencion' in row['resultados'].keys() :
        enAbstencion =  row['resultados']['enAbstencion']
    else :
        enAbstencion = "0"

    aFavor =  row['resultados']['aFavor']
    enContra =  row['resultados']['enContra']

    output.write("msg2.reply('Las votaciones quedaron, a favor: "+ aFavor.encode('utf-8') +" en contra: "+ enContra.encode('utf-8') + " y abstenciones: " + enAbstencion.encode('utf-8') +"');\r\n".encode('utf-8'))
    output.write("msg2.reply('Que opinas sobre esto?');\r\n".encode('utf-8'))

    ideasGeneralesDescripcion = []

    for ideas in row['resultados']['ideasGenerales'] :
        ideasGeneralesDescripcion.append("".join(ideas['descripcion']).encode('utf-8'))
        stringDeMatch = ""


        ideasGeneralesDescripcionSola = re.sub(r'[,|(|)|!]', r'',  "".join(ideas['descripcion']).encode('utf-8')).split()


        for palabra in ideasGeneralesDescripcionSola:

            if (len(palabra) > 10):
                palabra = "".join(list(palabra)[:-(len(palabra) - 10)]) + "{0," + str(
                    (len(palabra) - 10)).encode('utf-8') + "}" + "|"

            if (len(palabra) > 3) and (len(palabra) < 10):
                palabra = palabra + "|"

            if (len(palabra) <= 3):
                palabra = ""

            stringDeMatch = stringDeMatch + palabra
        stringDeMatch = "".join(list(stringDeMatch)[:-1])
        condicion = "dialog.addChoice( /"+stringDeMatch+"/i, function(msg2){ \r\n"
        arrayJavaScrip = " var respuestasAzar = ["
        for aporte in ideas['otrosAportes']['aportes']:
            if (len(aporte) > 0) and len(aporte[0]) > 12 :
                arrayJavaScrip = arrayJavaScrip + "'" + re.sub(r'[,|(|)|!|\']', r'',  aporte[0].replace("\r\n", "").encode('utf-8')) +"'" + ","

        if ideas['otrosAportes']['aportes'] == [] :
            arrayJavaScrip = arrayJavaScrip + "];"
        else:
            arrayJavaScrip = "".join(list(arrayJavaScrip)[:-1]) + "];"

        condicion = condicion +   arrayJavaScrip +   "  \r\n msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );"

        condicion = condicion + " \r\n dialog.addChoice( /.*/ , function(msg2){ \r\n"
        condicion = condicion + arrayJavaScrip + "  \r\n msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );"

        condicion = condicion + " \r\n dialog.addChoice( /.*/ , function(msg2){ \r\n"
        condicion = condicion + arrayJavaScrip + "  \r\n msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );"

        condicion = condicion + " \r\n dialog.addChoice( /.*/ , function(msg2){ \r\n"
        condicion = condicion + arrayJavaScrip + "  \r\n msg2.reply( respuestasAzar[Math.floor(Math.random()*respuestasAzar.length)] );"

        condicion = condicion + "});\r\n".encode('utf-8')
        condicion = condicion + "});\r\n".encode('utf-8')
        condicion = condicion + "});\r\n".encode('utf-8')
        condicion = condicion + "});\r\n".encode('utf-8')
        #


        output.write(condicion)


    output.write("});\r\n".encode('utf-8'))
    output.write("});\r\n".encode('utf-8'))
    output.write(" };\r\n".encode('utf-8'))

