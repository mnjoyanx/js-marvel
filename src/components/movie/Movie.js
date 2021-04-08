import { URL, URL_COMICS, URL_CHARACTERS } from '../../constants/api'
import { getData } from '../../utils/getAllData'

import './Movie.css'


function getPage() {
    alert('ok')
}

class Movie {
    async render() {
        const result = await getData.getAllData(URL + URL_COMICS)



        const _html = result.map(item => {
                const body = document.createElement('div')
                const title = document.createElement('h2')
                title.textContent = item.title
                body.append = title
                console.log(title)
            })
            // const res = result.map(item => {
            //     return `
            //         <div class="each-item">
            //             <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" class="card-img" alt="${item.title}">
            //             <div class="body">
            //                 <h5 class="card-title">${item.title}</h5>
            //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //             </div>
            //         </div>
            //     `
            // })

        console.log(_html)

        document.getElementById('main').append(_html)

        console.log(result)
    }
}


export default new Movie()