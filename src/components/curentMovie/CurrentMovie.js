import './CurrentMovie.css'

class CurrentMovie {
    render(movie = []) {

        const alert = document.createElement('div')
        alert.classList.add('show__current-item')

        const result = movie.map(item => {
            return `
            <div class="currnet-item" >
            <span class="close-modal">&#10799;</span>
            <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" class="card-img" alt="${item.title}">
            <div class="body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
            `
        })


        const modal = document.querySelector('.modal')
        modal.innerHTML = result

        function closeModal() {
            modal.classList.remove('hidden')
            const closeModal = document.querySelector('.close-modal')
            closeModal.addEventListener('click', () => {

                modal.classList.add('hidden')
            })
        }

        closeModal()

    }
}


export default new CurrentMovie()