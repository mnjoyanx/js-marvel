import 'regenerator-runtime/runtime'


// components 
import { App } from './components/index'
// components 


async function general() {
    await App.render()
}

general()