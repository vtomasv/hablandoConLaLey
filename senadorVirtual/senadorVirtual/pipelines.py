# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
from scrapy.exceptions import DropItem

class SenadorvirtualPipeline(object):


    def process_item(self, item, spider):


           for ideas in item['resultados']['ideasGenerales'] :

               if len(ideas['otrosAportes']['cantidadAportes']) == 0 :
                   break

               if not(  len( ideas['otrosAportes']['aportes'] )  > int(ideas['otrosAportes']['cantidadAportes'][0]) )  :
                    raise DropItem("El objeto aun no esta completo: %s" % item)

           return item
