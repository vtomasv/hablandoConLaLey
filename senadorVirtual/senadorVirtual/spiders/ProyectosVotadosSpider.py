import scrapy
import urlparse

from senadorVirtual.items import ProyectosVotados, ResultadosGeneral, IdeaGeneral, OtrosAportes, Aporte

class ProyectosVotadosSpider(scrapy.Spider):
    name = "ProyectosVotados"
    allowed_domains = ["www.senadorvirtual.cl/", "senadorvirtual.cl", "www.senadorvirtual.cl" ]
    start_urls = [
        "http://www.senadorvirtual.cl/proyectos_votados.php"
    ]

    def parse(self, response):
        resutl = []
        titulo = response.xpath('//*[@id="main-top"]/div[2]/div[1]/h1/text()').extract()
        print titulo
        for sel in response.xpath('//*[@id="main-top"]/div[2]/table[2]/tbody/tr'):
            item = ProyectosVotados()
            item['nBoletin'] = sel.xpath('./td[1]/text()').extract()
            item['nombre'] = sel.xpath('./td[2]/text()').extract()
            item['pDesde'] = sel.xpath('./td[3]/text()').extract()
            item['pHasta'] = sel.xpath('./td[4]/text()').extract()
            href = sel.xpath('./td[2]/a/@href').extract()
            if len(href)  ==  1 :
                parteUrl = href[0].strip()
                url = urlparse.urljoin(response.url, parteUrl)
                yield scrapy.Request(url, callback=self.parse_discusion_general , meta={'item': item})
                resutl.append(item)


        for sel in response.xpath('//*[@id="main-top"]/div[2]/table[1]/tbody/tr'):

            item = ProyectosVotados()
            item['nBoletin']     = sel.xpath('./td[1]/text()').extract()
            item['nombre']      = sel.xpath('./td[2]/text()').extract()
            item['pDesde']      = sel.xpath('./td[3]/text()').extract()
            item['pHasta']      = sel.xpath('./td[4]/text()').extract()
            href = sel.xpath('./td[2]/a/@href').extract()
            if len(href)  ==  1 :
                parteUrl = href[0].strip()
                url = urlparse.urljoin(response.url, parteUrl)
                yield scrapy.Request(url, callback=self.parse_discusion_general , meta={'item': item})
                resutl.append(item)

        yield resutl





    def parse_discusion_general(self, response):
        print 'Parsenado los datos '
        result = response.meta['item']
        rg = ResultadosGeneral()

        rg['ideasGenerales']    = []


        if  ([]   != response.xpath('//*[@id="main-top"]/div[2]/table[1]/tbody/tr[2]/td/strong/text()').extract()) :
            rg['aFavor'] = response.xpath('//*[@id="main-top"]/div[2]/table[1]/tbody/tr[2]/td/strong/text()').extract()[0]
            resultados = response.xpath('//*[@id="main-top"]/div[2]/table[1]/tbody/tr[2]/td/text()').extract()[1]
            splitRsultados = resultados.encode("utf-8").split()
            if len(splitRsultados) >= 4 :
                rg['enContra'] = splitRsultados[3]
            if len(splitRsultados) >= 6:
                rg['enAbstencion'] =  splitRsultados[5]

        result['resultados']    = rg
        indiceDeIdea  = 0
        for sel in response.xpath('//*[@id="main-top"]/div[2]/table[2]/tbody/tr'):
            indiceDeIdea = indiceDeIdea + 1
            index = sel.xpath('./td[2]/text()').extract()
            if indiceDeIdea > 2:
                item = IdeaGeneral()
                item['descripcion'] = sel.xpath('./td[2]/text()').extract()
                item['si'] = sel.xpath('./td[3]/text()').extract()
                item['no'] = sel.xpath('./td[4]/text()').extract()
                item['abstencion'] = sel.xpath('./td[5]/text()').extract()
                rg['ideasGenerales'].append(item)
                # Se obtienen los aportes para este item
                aportes = OtrosAportes()
                aportes['clasificacion'] =   response.xpath('//*[@id="main-top"]/div[2]/table[3]/tbody/tr['+str(indiceDeIdea) + ']/td[1]/text()').extract()
                aportes['cantidadAportes'] = response.xpath('//*[@id="main-top"]/div[2]/table[3]/tbody/tr['+ str(indiceDeIdea) +']/td[2]/text()').extract()
                aportes['aportes'] = []
                item['otrosAportes'] = aportes
                href = sel.xpath('//*[@id="main-top"]/div[2]/table[3]/tbody/tr['+ str(indiceDeIdea) + ']/td[3]/a/@href').extract()
                if len(href) == 1:
                    parteUrl = href[0].strip()
                    url = urlparse.urljoin(response.url, parteUrl)
                    yield scrapy.Request(url, callback=self.parse_aportes, meta={'result': result, 'item_nuevo': aportes, 'indice' : indiceDeIdea})

        indiceDeIdea = indiceDeIdea + 1
        item = IdeaGeneral()
        item['descripcion'] = "Ideas Generales de la ley"
        rg['ideasGenerales'].append(item)
        # Se obtienen los aportes para este item
        aportes = OtrosAportes()
        aportes['clasificacion'] = response.xpath(
            '//*[@id="main-top"]/div[2]/table[3]/tbody/tr[' + str(indiceDeIdea) + ']/td[1]/text()').extract()
        aportes['cantidadAportes'] = response.xpath(
            '//*[@id="main-top"]/div[2]/table[3]/tbody/tr[' + str(indiceDeIdea) + ']/td[2]/text()').extract()
        aportes['aportes'] = []
        item['otrosAportes'] = aportes
        href = sel.xpath(
            '//*[@id="main-top"]/div[2]/table[3]/tbody/tr[' + str(indiceDeIdea) + ']/td[3]/a/@href').extract()
        if len(href) == 1:
            parteUrl = href[0].strip()
            url = urlparse.urljoin(response.url, parteUrl)
            yield scrapy.Request(url, callback=self.parse_aportes,
                                 meta={'result': result, 'item_nuevo': aportes, 'indice': indiceDeIdea, 'final': 1 })
        ''' Test 01
        for sel in response.xpath('//*[@id="main-top"]/div[2]/table[3]/tbody/tr'):
            final = final + 1
            index = sel.xpath('./td[2]/text()').extract()
            if len(index) == 1:
                item = OtrosAportes()
                item['clasificacion'] = sel.xpath('./td[1]/text()').extract()
                item['cantidadAportes'] = sel.xpath('./td[2]/text()').extract()
                item['aportes'] = []

                #//*[@id="main-top"]/div[2]/table[3]/tbody/tr[3]/td[3]/a/@href

                href = sel.xpath('./td[3]/a/@href').extract()
                if len(href) == 1:
                    parteUrl = href[0].strip()
                    url = urlparse.urljoin(response.url, parteUrl)
                    elElUltimo = (final - total) == 0
                    yield scrapy.Request(url, callback=self.parse_aportes, meta={'result': result, 'item_nuevo' : item, 'termino' : elElUltimo  })
        '''


    def parse_aportes(self, response):
        filename = 'discuciones.csv'
        result = response.meta['result']

        aportes = response.meta['item_nuevo']

        indice = response.meta['indice']

        for sel in response.xpath('//*[@id="main-top"]/div[2]/table/tbody/tr'):
            item = sel.xpath('./td[2]/text()').extract()
            result['resultados']['ideasGenerales'][int(indice ) - 3 ]['otrosAportes']['aportes'].append(item)



        if  'final' in response.meta.keys() :
            result['final'] = 1
        else :
            result['final'] = 0

        yield result

        #for sel in response.xpath('//*[@id="main-top"]/div[2]/table/tbody/tr'):
        #    index = sel.xpath('./td[2]/text()').extract()
        #    item = Aporte()
        #    item['descripcion'] = sel.xpath('./td[2]/text()').extract()
        #    result['aportes'].append(item)





