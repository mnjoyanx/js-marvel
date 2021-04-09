import { URL, URL_COMICS, URL_CHARACTERS } from '../../constants/api'
import { getData } from '../../utils/getAllData'
import CurrentMovie from '../curentMovie/CurrentMovie'

import './Movie.css'


class Movie {
    async render() {
        const result = await getData.getAllData(URL + URL_COMICS)

        const res = result.map(item => {
            console.log(item)
            return `
                    <div class="each-item" data-id="${item.id}">
                        <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" class="card-img" alt="${item.title}">
                        <div class="body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                `
        })


        document.getElementById('main').innerHTML = res
    }

    async eventListener() {
        document.querySelectorAll('.each-item').forEach((item, idx) => {
            item.addEventListener('click', async() => {

                const idx = item.dataset.id

                const result = await getData.getAllData(URL + URL_COMICS + '/' + idx)
                CurrentMovie.render(result)
            })
        })

    }

}

export default new Movie()