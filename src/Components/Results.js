import { useSelector } from 'react-redux'
import './Result.css'

function Results() {
    const results = useSelector(state => state.load_search)

    if (results == null) {
        return null
    }

    return (
        results.map(result => {
            return (
                <div className='Result'>
                    <a
                        target="_blank"
                        href={result.link}
                    >
                        {/* <img
                            style={{ width:200, height:200}}
                            src={result.pagemap && result.pagemap.cse_thumbnail? result.pagemap.cse_thumbnail[0].src : "null"}
                            
                        /> */}
                        <p className='ResultLink'>{result.link}</p>
                        <h4>{result.title}</h4>
                        <h3>{result.snippet}</h3>
                    </a>
                </div>
            )
        })
    )
    
}

export default Results;