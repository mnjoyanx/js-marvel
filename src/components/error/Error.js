import './Error.css'

class Error {
    render(err) {
        const _html = `
            <div class="error-component">
                <p class="error-message">${err}</p>
            </div>
        `
        const root = document.getElementById('root')
        root.innerHTML = _html
    }
}

export default new Error()