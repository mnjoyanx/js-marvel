import '/index.css'
import Movie from '../movie/Movie'

class App {

    async render() {
        await Movie.render()
        Movie.eventListener()

    }
}

export default new App()