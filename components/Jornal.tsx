const links = [
"https://valor.globo.com/ultimas-noticias/&classe=h2.feed-post-link&jornal=Valor",
"https://www1.folha.uol.com.br/ultimas-noticias/&classe=h2.c-headline__title&jornal=Folha de Sp",
"https://www.estadao.com.br/ultimas/&classe=h3.headline&jornal=Estadao",
"https://br.investing.com/news/&classe=div.largeTitle>article>.textDiv>a&jornal=Investig",
"https://economia.uol.com.br/ultimas/&classe=h3.thumb-title>article>.textDiv>a&jornal=Uol",
"https://www.bomdiamercado.com.br/noticias/&classe=h4.title&jornal=BDM",
"http://broadcast.com.br/cadernos/financeiro/&classe=.materia>h3>a&jornal=Broadcast",
"https://www.cnbc.com/world/?region=world&classe=.RiverHeadline-headline&jornal=CNBC"]
export const Jornal = () => {
	return links
}

export const AddJornal = () => {
	const link = "https://www.estadao.com.br/ultimas/&classe=headline&jornal=Estadao"
	links.push(link)
}
