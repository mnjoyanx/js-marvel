class CurrentMovie {
    render(movie = []) {
        const alert = document.createElement('div')
        alert.classList.add('show__current-item')

        const result = movie.map(item => {
            return `
            <div class="currnet-item" >
            <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" class="card-img" alt="${item.title}">
            <div class="body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
            `
        })

        // alert.innerHTML = result

        const modal = document.getElementById('modal')
        modal.innerHTML = result

    }
}


export default new CurrentMovie()