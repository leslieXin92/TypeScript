interface IIndexLanguage {
	[index: number]: string
}
const frontLanguage: IIndexLanguage = {
	0: 'HTML',
	1: 'CSS',
	2: 'JavaScript',
	4: 'Vue',
	5: 'TypeScript'
}

interface ILanguageYear {
	[name: string]: number
}
const languageYear: ILanguageYear = {
	'C': 1972,
	'Java': 1995,
	'JavaScript': 1996,
	'TypeScript': 2014,
	'now': 2022
}
