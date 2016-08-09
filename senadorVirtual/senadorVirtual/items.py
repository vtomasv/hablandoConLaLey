# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class IdeaGeneral (scrapy.Item):
    descripcion  =  scrapy.Field()
    si           =  scrapy.Field()
    no           =  scrapy.Field()
    abstencion   =  scrapy.Field()
    otrosAportes = scrapy.Field()

class OtrosAportes  (scrapy.Item):
    clasificacion   = scrapy.Field()
    cantidadAportes         = scrapy.Field()
    aportes = scrapy.Field()


class Aporte (scrapy.Item):
    descripcion = scrapy.Field()


class ResultadosGeneral(scrapy.Item):
    ideasGenerales              = scrapy.Field()
    aFavor                      = scrapy.Field()
    enContra                    = scrapy.Field()
    enAbstencion                = scrapy.Field()


class ProyectosVotados(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # Nº boletín
    nBoletin    = scrapy.Field()
    nombre      = scrapy.Field()
    pDesde      = scrapy.Field()
    pHasta      = scrapy.Field()
    final       = scrapy.Field()
    resultados  = scrapy.Field()









