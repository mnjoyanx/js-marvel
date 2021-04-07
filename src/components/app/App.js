import {URL, URL_COMICS, URL_CHARACTERS} from '../../constants/api'
import {getData} from '../../utils/getAllData'
import '/index.css'

class App {
    async render() {
        document.body.append('hello')
        const result = await getData.getAllData(URL + URL_CHARACTERS)
        return result
    }
}

export default new App()