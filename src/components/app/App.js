import {URL, URL_COMICS, URL_CHARACTERS} from '../../constants/api'
import {getData} from '../../utils/getAllData'

class App {
    async render() {
        const result = await getData.getAllData(URL + URL_CHARACTERS)
        return result
    }
}

export default new App()