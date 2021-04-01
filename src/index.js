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

        console.log(res.data.result)
    }
}

const data = new Datas()
data.getAllData(URL)