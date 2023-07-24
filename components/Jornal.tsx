const links = ["https://valor.globo.com/ultimas-noticias/&classe=feed-post-link gui-color-primary&jornal=Valor",
                "https://www1.folha.uol.com.br/ultimas-noticias/&classe=c-headline__title&jornal=Folha de Sp",
	      "https://br.investing.com/news/latest-news&classe=title&jornal=Investing",
	      "https://www.estadao.com.br/ultimas/&classe=headline&jornal=Estadao"]
export const Jornal = () => {
	return links
}

export const AddJornal = () => {
	const link = "https://www.estadao.com.br/ultimas/&classe=headline&jornal=Estadao"
	links.push(link)
}
