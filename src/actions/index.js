export const LOADSEARCH = 'LOADSEARCH'

export const loadSearch = (query) => {
	
    return async(dispatch) => {
        const apiKey = 'AIzaSyA0SlARszrK3If1__D8S-WxuVm2Wiyz-KU'
        const cx = '12beb1a591baf7c1b'
        const first10 = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`
        const second10 = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&start=10`
        const first10res = await fetch(first10)
        const second10res = await fetch(second10)
		const first10json = await first10res.json()
		const second10json = await second10res.json()
        console.log(first10json["items"])
        const first10resultsArray = first10json["items"]
        const second10resultsArray = second10json["items"]
        const allResults = first10resultsArray.concat(second10resultsArray)

        dispatch({
            type:LOADSEARCH,
            payload:allResults
        })
    }
}