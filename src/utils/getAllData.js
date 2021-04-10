import axios from 'axios'
import { API_KEY } from '../constants/api'
import Error from '../components/error/Error'

class Datas {
    async getAllData(url) {

        try {
            const res = await axios.get(url, {
                params: {
                    apikey: API_KEY
                }
            })

            return res.data.data.results
        } catch (err) {
            Error.render(err.message)
            return false
        }

    }
}


export const getData = new Datas()