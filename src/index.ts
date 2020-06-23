import 'reset-css'
import './styles/main.scss'

const title = document.createElement('h1')
title.textContent = 'Bingo board'

const container = document.createElement('div')
container.appendChild(title)

container.className = 'root'
document.body.appendChild(container)