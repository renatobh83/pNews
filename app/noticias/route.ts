import { NextResponse } from 'next/server'
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");

const urls = ['https://valor.globo.com/ultimas-noticias/',
              'https://www1.folha.uol.com.br/ultimas-noticias/',
              'https://www.estadao.com.br/ultimas/'];
export async function GET(request: Request) {
let noticias = []
  const browser = await puppeteer.launch({
       args:[ "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
      ],
      executablePath: await chromium.executablePath(
         "https://github.com/Sparticuz/chromium/releases/download/v114.0.0/chromium-v114.0.0-pack.tar"
      ),
      ignoreHTTPSErrors: true,
    });
   try {
    for (let i = 0; i< urls.length; i ++) 
      {  
        let url = urls[i]
        const page = await browser.newPage();
   
        await page.setRequestInterception(true);
        page.on('request', request => {
        if (request.resourceType() === 'script') 
           request.abort();
        else
           request.continue();
         })
  
        await page.goto(url, { waitUntil: 'networkidle2' });
  
        await page.waitForTimeout(100);
  
        if(url.includes('estadao')) { 
     
        const noticiaJornal = await page.evaluate( () =>{
          const nodeList = document.getElementsByClassName('headline')
          const estadaoNews = [...nodeList].slice(0, 4)
          const list = estadaoNews.map(({textContent}) => ({jornal: 'Estadao', noticia: textContent}))
          return list  
          })
      noticias = noticias.concat(noticiaJornal)
    }
    if(url.includes('folha'))   {
      const noticiaJornal = await page.evaluate(() => {
          const nodeList = document.getElementsByClassName("c-headline__title")
          const folhaNews = [...nodeList].slice(0,4)
          const list = folhaNews.map(({
            textContent
          }) => ({jornal: "Folha de SP", noticia: textContent}))
          return list
        })
       noticias = noticias.concat(noticiaJornal)
    }
    if(url.includes('valor'))   {
      const noticiaJornal = await page.evaluate(()=>{
        const nodeList = document.getElementsByClassName('feed-post-link gui-color-primary')
        const valorNews = [...nodeList].slice(0,4)
        const list =  valorNews.map(({textContent}) => ({jornal: 'Valor', noticia: textContent}))
      return list 
    })
       noticias = noticias.concat(noticiaJornal)
    }
      }

  return NextResponse.json(new Date().toISOString())
  } catch (e) {
    return NextResponse.json(`Something went wrong while running Puppeteer: ${e}`)
   
  } finally {
    await browser.close();
  }
    
}
