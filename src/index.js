import 'regenerator-runtime/runtime'
import Movie from './components/movie/Movie'


// components 
import { App } from './components/index'
// components 


async function general() {
    await App.render()
    Movie.eventListener()
}

general()