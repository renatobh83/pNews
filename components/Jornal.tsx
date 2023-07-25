const links = ["https://valor.globo.com/ultimas-noticias/&classe=feed-post-link gui-color-primary&jornal=Valor",
                "https://www1.folha.uol.com.br/ultimas-noticias/&classe=c-headline__title&jornal=Folha de Sp",
	      "https://economia.uol.com.br/ultimas/&classe=thumb-title title-xsmall title-lg-small&jornal=UOL",
	      "https://www.estadao.com.br/ultimas/&classe=headline&jornal=Estadao",
	      "https://www.bomdiamercado.com.br/noticias/&classe=title&jornal=BDM&n=10"]
export const Jornal = () => {
	return links
}

export const AddJornal = () => {
	const link = "https://www.estadao.com.br/ultimas/&classe=headline&jornal=Estadao"
	links.push(link)
}
