export const LOADSEARCH = 'LOADSEARCH'

export const loadSearch = (query) => {
	
    return async(dispatch) => {
        const apiKey = 'AIzaSyA0SlARszrK3If1__D8S-WxuVm2Wiyz-KU'
        const cx = '12beb1a591baf7c1b'
        const path = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`
        const res = await fetch(path)
		const json = await res.json()
        console.log(json["items"])
        const resultsArray = json["items"]

        dispatch({
            type:LOADSEARCH,
            payload:resultsArray
        })
    }
}