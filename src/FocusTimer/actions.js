import state from './state.js'

export function toggleRunning() {
    // state.isRunning = !state.isRunning -----> uma maneira de fazer
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function set() {
    
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
}



