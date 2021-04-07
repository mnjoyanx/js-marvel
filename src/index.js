import 'regenerator-runtime/runtime'
import axios from 'axios'

const API_KEY = 'a5837db97d72016c81a7a776f4240db9'
const URL = 'https://gateway.marvel.com/v1/public/comics'

class Datas {
    async getAllData(url) {
        const res = await axios.get(url, {
            params: {
                apikey: API_KEY
            }
        })

       return res.data.data.results
    }
}

const data = new Datas()

async function getDatas(url) {
    const result = await data.getAllData(url)
    console.log(result)
}

getDatas(URL)